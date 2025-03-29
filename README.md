# 🌱 SOPEC Website Redesign – Internal Project README

## 📛 Project Name
**SOPEC Website Redesign Demo**  
_Official Website for the Southeast Ohio Public Energy Council (SOPEC)_

---

## 🔗 Existing Site
**Live URL:** [https://www.sopec-oh.gov](https://www.sopec-oh.gov)

---

## 💰 Budget / Pricing
**Estimated Budget Range:** `$20,000 – $40,000`  
Covers full redesign, CMS integration, accessibility, and performance enhancements.

---

## 📦 Project Scope

Redesign and rebuild the SOPEC website using modern frontend technologies and a headless CMS. The goal is to create a responsive, accessible, mobile-first website that empowers internal staff with easy content editing and provides the public with accurate energy service info.

### Key Goals:
- Sleek, WCAG 2.1 compliant design
- Reusable components in React (Next.js)
- Headless CMS via Sanity
- Clerk authentication
- Real-time updates (Firebase)
- Mapbox integration for service area maps
- Hosted on Vercel with Cloudflare protection
- Optimized for performance (Lighthouse)

---

## ✅ Functional Requirements

- Mobile-first, fully responsive layout
- Homepage video hero with overlaid headline
- Side navigation with submenus
- Key pages: About, Programs, Membership, Energy Services, Join SOPEC
- Footer with contact, programs, and site links
- Reusable components in `/sections/`
- Real-time features supported by Firebase
- Admin login (Clerk)
- Accessible to screen readers, keyboard nav, etc.

---

## 🧰 Tech Stack

| Tech       | Purpose                          |
|------------|----------------------------------|
| Next.js    | React framework (App Router)     |
| TypeScript | Code safety & DX                 |
| Tailwind CSS | Styling                        |
| Sanity.io  | Headless CMS                     |
| Firebase   | Real-time backend features       |
| Clerk      | Authentication                   |
| AWS S3     | Image/media hosting              |
| Mapbox     | Interactive maps                 |
| Cloudflare | DDoS protection + CDN            |
| Vercel     | Hosting/CI-CD                    |

---

## 📂 Folder Structure

```bash
.
├── public/
│   ├── image/SOPEC.png
│   └── video/video1.mp4
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── dashboard/
│   │   ├── categories/
│   │   └── admin/
│   ├── sections/          # Navbar, Footer, Hero, etc.
│   ├── constants/         # Shared data files
│   └── components/        # Reusable elements
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
└── README.md
🖥️ Pages & Sections To Build
NavBar – Logo + Search + Mobile Side Menu

Side Menu – Slides in, submenus:

WHO IS SOPEC?

OUR TEAM

GOVERNANCE

ANNUAL REPORTS

PUBLIC NOTICES

EMPLOYMENT

PROGRAMS → Green Initiatives, REAP

MEMBERSHIP → Grants, Member Orgs

ENERGY SERVICES → Aggregation, Pricing

JOIN SOPEC

Hero Section – Hunter Green background, banner video, overlay text

About Section – "Who is SOPEC?"

Footer – Bigger logo, contact info, nav links, office hours

🧪 QA / Accessibility Checklist
 Mobile-first responsive

 Keyboard navigable

 Screen reader friendly

 Color contrast WCAG 2.1 AA

 “Skip to content” link

 Alt text on all images

 Lighthouse score > 90 for Perf, SEO, Access

🔐 Authentication
Using Clerk for login/signup

Supports OAuth and JWT

Auth required for admin access

📍 Mapping Integration
Using Mapbox to show service regions

Optional real-time data updates via Firebase

🚀 Deployment
Hosted on: Vercel

CI/CD setup: Push to main = auto-deploy

GitHub integration enabled

⚙️ Next.js Setup & Local Dev
This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser.

You can start editing by modifying app/page.tsx. The page auto-updates.

Fonts use next/font for Geist.

🧠 Learn More
Next.js Docs

Next.js GitHub

Vercel Deployment Guide

🧑‍💼 Team Lead
Name: Sydney Hopson
Title: Full Stack Developer @ Reign Mobile
Contact: Karatesyd@icloud.com
Phone: 770-294-1987
Portfolio: https://tinyurl.com/ReignMobileAgency
GitHub: https://github.com/SydneyHopson

🧑‍💼 Team Support 1
Name: Jesse Fish
Title: he has to add
Contact: he has to add
Phone: he has to add
Portfolio: he has to add
GitHub: he has to add

🧑‍💼 Team Project Manager
Name: Noelle Brooks 
Title: Project Strategist 
Contact: noellethestoryteller@gmail.com
Phone: 478-250-3494
Portfolio: noellebrooks.com
GitHub: he has to add

📌 Notes for Team
Keep all sections in /src/sections/ (e.g., Navbar.tsx, Footer.tsx, etc.)

Use local logo/video assets from /public/

Use Tailwind color #0B3D02 for hunter green accents

Stick to the page layout and menu structure

Define content types clearly in Sanity Studio

Firebase is for real-time features, not auth

🌿 How to Add to a Git Branch
To work on a new feature:

bash
Copy
Edit
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes, then commit
git add .
git commit -m "Add: your feature description"

# Push your branch to GitHub
git push origin feature/your-feature-name
Then go to GitHub to open a Pull Request (PR). Tag Sydney if it needs review.