import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface LeadPayload {
  fullName: string;
  workEmail: string;
  companyName: string;
  message?: string;
}

interface StoredLead extends LeadPayload {
  id: string;
  submittedAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --- Vercel Ephemeral Memory Fallback ---
let inMemoryLeads: StoredLead[] = [];
let isReadOnlyFileSystem = false;

async function ensureStore(): Promise<StoredLead[]> {
  // If we already detected a read-only environment, skip fs calls entirely
  if (isReadOnlyFileSystem) {
    return inMemoryLeads;
  }

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as StoredLead[];
  } catch (err: any) {
    // If Vercel blocks folder or file creation because it is read-only
    if (err.code === "EROFS" || err.code === "EACCES") {
      isReadOnlyFileSystem = true;
      console.warn("Read-only filesystem detected (Vercel). Switching to in-memory store.");
      return inMemoryLeads;
    }

    // Otherwise, the file just doesn't exist yet, try creating it empty
    try {
      await fs.writeFile(DATA_FILE, "[]", "utf-8");
    } catch (writeErr: any) {
      if (writeErr.code === "EROFS" || writeErr.code === "EACCES") {
        isReadOnlyFileSystem = true;
        console.warn("Read-only filesystem detected on write. Switching to in-memory store.");
        return inMemoryLeads;
      }
    }
    return [];
  }
}

function validate(payload: Partial<LeadPayload>): string | null {
  if (!payload.fullName || !payload.fullName.trim()) {
    return "Full name is required.";
  }
  if (!payload.workEmail || !EMAIL_RE.test(payload.workEmail)) {
    return "A valid work email is required.";
  }
  if (!payload.companyName || !payload.companyName.trim()) {
    return "Company name is required.";
  }
  if (payload.message && payload.message.length > 2000) {
    return "Message is too long (max 2000 characters).";
  }
  return null;
}

export async function POST(req: NextRequest) {
  let body: Partial<LeadPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json(
      { ok: false, error: validationError },
      { status: 422 }
    );
  }

  const lead: StoredLead = {
    id: crypto.randomUUID(),
    fullName: body.fullName!.trim(),
    workEmail: body.workEmail!.trim().toLowerCase(),
    companyName: body.companyName!.trim(),
    message: body.message?.trim() ?? "",
    submittedAt: new Date().toISOString(),
  };

  try {
    const leads = await ensureStore();
    leads.push(lead);

    if (isReadOnlyFileSystem) {
      inMemoryLeads = leads; // Persist to in-memory array on Vercel
    } else {
      try {
        await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
      } catch (writeErr: any) {
        // Safe check during runtime write failure
        if (writeErr.code === "EROFS" || writeErr.code === "EACCES") {
          isReadOnlyFileSystem = true;
          inMemoryLeads = leads;
          console.warn("Write blocked in production. Data saved to session memory.");
        } else {
          throw writeErr;
        }
      }
    }
  } catch (err) {
    console.error("Failed to persist lead:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save lead. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  try {
    const leads = await ensureStore();
    return NextResponse.json({ 
      ok: true, 
      count: leads.length, 
      environment: isReadOnlyFileSystem ? "Vercel Serverless (In-Memory)" : "Localhost (JSON Persistent)",
      leads 
    });
  } catch (err) {
    console.error("Failed to read leads:", err);
    return NextResponse.json(
      { ok: false, error: "Could not read leads." },
      { status: 500 }
    );
  }
}