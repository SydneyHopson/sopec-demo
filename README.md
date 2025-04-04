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
- Interactive dashboard UI for admin pages
- Programs, Grants, Uploads, and Documents pages fully custom-built

---

## ✅ Functional Requirements

- Mobile-first, fully responsive layout
- Homepage video hero with overlaid headline
- Side navigation with submenus
- Key pages: About, Programs, Membership, Energy Services, Join SOPEC
- Admin Dashboard with:
  - Animated Communities Page with leaderboard
  - Grants spreadsheet-style layout
  - Uploads page with mock Canva-like UI
  - Documents center with dynamic document cards and news-style snippets
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
```

---

## 🖥️ Pages & Sections To Build

### Public Site
- NavBar with mobile-friendly SideMenu
- Hero Section with video overlay
- About Section ("Who is SOPEC?")
- Programs Section (Modern, interactive)
- Membership Page (Grants, Member Orgs)
- Energy Services Page (Pricing & Aggregation)
- Footer (Contact, programs, nav links)

### Admin Dashboard
- Header with session-based greeting
- Communities Leaderboard with animated population + profile images
- Programs grid with badges and icons
- Grants section styled like a spreadsheet
- Uploads mock UI with Canva-inspired design
- Documents hub with cards and news-style insights

---

## 🥐 QA / Accessibility Checklist

- [x] Mobile-first responsive
- [x] Keyboard navigable
- [x] Screen reader friendly
- [x] Color contrast WCAG 2.1 AA
- [x] “Skip to content” link
- [x] Alt text on all images
- [x] Lighthouse score > 90 for Perf, SEO, Access

---

## 🔐 Authentication
- Using Clerk for login/signup
- Supports OAuth and JWT
- Auth required for admin access

---

## 📍 Mapping Integration
- Using Mapbox to show service regions
- Optional real-time data updates via Firebase

---

## 🚀 Deployment
- Hosted on: Vercel
- CI/CD setup: Push to main = auto-deploy
- GitHub integration enabled

---

## ⚙️ Next.js Setup & Local Dev

This is a Next.js project bootstrapped with create-next-app.

### Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser.

You can start editing by modifying `app/page.tsx`. The page auto-updates.

Fonts use `next/font` for Geist.

---

## 🧠 Learn More
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 🧑‍💼 Team Lead
**Name:** Sydney Hopson  
**Title:** Full Stack Developer @ Reign Mobile  
**Contact:** Karatesyd@icloud.com  
**Phone:** 770-294-1987  
**Portfolio:** https://tinyurl.com/ReignMobileAgency  
**GitHub:** https://github.com/SydneyHopson

🧑‍💼 Team Support 1
Name: Jessie Fish
Title: he has to add
Contact: he has to add
Phone: he has to add
Portfolio: he has to add
GitHub: he has to add

🧑‍💼 Team Project Manager
Name: Add name here
Title: he has to add
Contact: he has to add
Phone: he has to add
Portfolio: he has to add
GitHub: he has to add

---

## 📌 Notes for Team

- Keep all sections in `/src/sections/` (e.g., `Navbar.tsx`, `Footer.tsx`, etc.)
- Use local logo/video assets from `/public/`
- Use Tailwind color `#0B3D02` for hunter green accents
- Stick to the page layout and menu structure
- Define content types clearly in Sanity Studio
- Firebase is for real-time features, not auth

---

## 🌿 How to Add to a Git Branch
To work on a new feature:

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes, then commit
git add .
git commit -m "Add: your feature description"

# Push your branch to GitHub
git push origin feature/your-feature-name
```

Then go to GitHub to open a Pull Request (PR). Tag Sydney if it needs review.
