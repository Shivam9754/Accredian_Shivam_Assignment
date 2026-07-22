# Accredian Enterprise Clone - Intern Assignment

Hi! This is my submission for the **Full Stack Developer Intern** role at Accredian. 

I built a responsive landing page using **Next.js (App Router)** and **Tailwind CSS**. Instead of just copying the original site's blue layout, I wanted to challenge myself and build an upgraded, modern dark-mode version with crimson accents (similar to the layouts seen on sites like Vercel, Linear, or Stripe).

---

## 🔗 Live Links
*   **Live Deployed Link (Vercel):** [PASTE YOUR LIVE VERCEL LINK HERE]
*   **GitHub Repository:** [PASTE YOUR GITHUB REPO LINK HERE]

---

## 🛠️ How to Run This Project Locally

To run this on your PC, make sure you have Node.js installed, then follow these steps:

1. **Clone the project:**
   ```bash
   git clone [PASTE YOUR GITHUB REPO LINK HERE]
   cd Accredian_Shivam_Assignment
   ```

2. **Install all packages:**
   ```bash
   npm install
   ```

3. **Start the local server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

4. **Test the production build:**
   ```bash
   npm run build
   ```
   *(I ran this locally to make sure there are no TypeScript or compilation errors before pushing).*

---

## 💡 My Approach & Features

I wanted this landing page to feel interactive and alive, so I focused on adding smooth animations and dynamic components:

*   **Custom Dark/Light Mode:** I built a theme provider and added a toggle switch (Sun/Moon icons) in the Navbar. Clicking it switches the whole page between light and dark mode.
*   **Animated Stats Graph:** In the "Track Record" section, the numbers dynamically count up from 0 when they scroll into view. I also added minimal progress bars that animate to show growth.
*   **Tailored Course Stepper:** Inspired by premium web design, I built a vertical step-by-step progress guide on the left. The progress bar automatically fills up and cycles through the phases, updating the content cards on the right.
*   **Strategic Skills Grid:** A clean 3x3 layout of cards. I added hover transitions so the cards scale up slightly and glow with a subtle red border on mouse-over.
*   **Smooth Scroll:** Clicking links in the Navbar smoothly glides the page down to the correct section instead of jumping abruptly.

---

## 💾 How the Lead Capture API Works (Bonus Goal)

I completed the optional bonus challenge by building a **Lead Capture Form** and connecting it to a **Next.js API Route** (`/api/leads`).

### Solving the Vercel Serverless File System Issue
While testing, I learned that Vercel uses Serverless Functions, which operate on a **read-only file system**. 
*   When running the server locally on my PC, the backend successfully writes and saves submitted leads to a local file (`data/leads.json`).
*   To prevent the app from crashing on Vercel, I added code to check if the file system is read-only. If it is, the backend automatically switches to saving leads inside a local memory array (`inMemoryLeads`). This keeps the form completely functional in production!

---

## 🤖 AI Usage & Manual Refinements

As required by the assignment guidelines, I used AI tools (like Claude/ChatGPT) to help me build, debug, and learn during this project:

### Where AI Helped Me:
*   **Boilerplate & CSS Structure:** AI helped me scaffold the Tailwind CSS and HTML structure for the layouts and the basic layout grids.
*   **Interval Timer Logic:** AI helped me write the math and interval hook to synchronize the progress bar timing on the vertical course stepper.

### What I Modified and Coded Manually:
*   **API Route Logic & Validation:** I wrote the manual validation in `/api/leads/route.ts` to check for empty inputs, trim whitespaces, convert emails to lowercase, and restrict message lengths.
*   **Vercel Fallback Check:** I wrote the filesystem catch logic (`isReadOnlyFileSystem`) to handle the read-only error on serverless deployments.
*   **Scroll Intersections:** I adjusted the triggering points of the `CountUp` component so the counting animation doesn't start until the user actually scrolls to the stats section.

---

## 🔮 What I Would Improve With More Time
If I had more time to work on this project, I would:
1.  **Connect a Real Database:** Connect the `/api/leads` route to a free database (like Supabase or Neon PostgreSQL) instead of using the local memory array.
2.  **Add an Admin Dashboard:** Build a simple, protected `/admin` page using NextAuth where the team could log in and see a table of all the captured leads.
3.  **Add Testing:** Write automated end-to-end tests using Playwright to ensure the form behaves perfectly on all device screens.