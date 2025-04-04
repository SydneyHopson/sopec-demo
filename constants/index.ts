// app/constants/index.ts
import { StaticImageData } from "next/image"; // Import type for image assets

// Existing Asset Imports (Keep these)
import people01 from "../public/assets/people01.png";
import people02 from "../public/assets/people02.png";
import people03 from "../public/assets/people03.png";

import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import linkedin from "../public/assets/linkedin.svg";
import twitter from "../public/assets/twitter.svg";

import airbnb from "../public/assets/airbnb.png";
import binance from "../public/assets/binance.png";
import coinbase from "../public/assets/coinbase.png";
import dropbox from "../public/assets/dropbox.png";

import send from "../public/assets/Send.svg";
import shield from "../public/assets/Shield.svg";
import star from "../public/assets/Star.svg";


// --- TYPE DEFINITIONS ---

interface NavLink {
  id: string;
  title: string;
}

interface Feature {
  id: string;
  icon: StaticImageData | string; // Allow string if icon path is just a string
  title: string;
  content: string;
}

interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: StaticImageData | string; // Allow string if img path is just a string
}

interface FooterLinkItem {
  name: string;
  link: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLinkItem[];
}

export interface SocialMediaItem { // Export this type
  id: string;
  icon: StaticImageData | string; // Use StaticImageData or string
  link: string;
}

interface Client {
  id: string;
  logo: StaticImageData | string; // Use StaticImageData or string
}

// Types for Detailed Footer Content
interface FooterLogoInfo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface FooterAddressInfo {
    title: string;
    items: string[];
}

export interface ContactItem { // Export this type
    type: 'tel' | 'mail';
    text: string;
    href: string;
}

export interface ContactSection { // Export this type
    title: string;
    items: (string | ContactItem)[]; // Array can contain strings OR ContactItem objects
}

interface FooterProgramList {
    title: string;
    items: string[];
}

export interface QuickLink { // Export this type
    name: string;
    href: string;
}

interface FooterQuickLinks {
    title: string;
    items: QuickLink[];
}

// Type for the item parameter in renderListItem helper
export type FooterListItemType = string | ContactItem | QuickLink;


// --- EXPORTED CONSTANTS (Apply types) ---

// ✅ Navigation Links
export const navLinks: NavLink[] = [ // Apply type
  { id: "home", title: "Home" },
  { id: "about", title: "About Us" },
  { id: "programs", title: "Programs" },
  { id: "membership", title: "Membership" },
  { id: "energy", title: "Energy Services" },
  { id: "join", title: "Join SOPEC" },
];

// ✅ Submenus (used in Navbar & SideMenu)
export const subMenus: Record<string, string[]> = {
  "about us": [
    "WHO IS SOPEC?",
    "OUR TEAM",
    "GOVERNANCE",
    "ANNUAL REPORTS",
    "PUBLIC NOTICES",
    "BIDS",
    "EMPLOYMENT",
    "NEWS AND UPDATES",
    "PUBLIC RECORDS REQUEST",
  ],
  programs: [
    "GREEN INITIATIVES",
    "OHIO SOLAR ASSESSMENT PROGRAM",
    "OHIO REAP GRANT ASSISTANCE PROGRAM",
  ],
  membership: ["SOPEC MEMBERS", "ORGANIZATIONAL MEMBERSHIPS", "COMMUNITY GRANTS"],
  "energy services": [
    "OVERVIEW",
    "ELECTRIC AGGREGATION",
    "PUBLIC PRICING PROGRAM",
    "ENERGY CHOICE",
    "ENERGY EFFICIENCY RESOURCES",
  ],
};

// ✅ Feature Cards (The SOPEC Advantage)
export const features: Feature[] = [ // Apply type
  {
    id: "feature-1",
    icon: star,
    title: "Public Aggregation Benefits",
    content:
      "SOPEC helps local governments and residents secure better energy rates through aggregation.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Community-Focused Energy Planning",
    content:
      "We provide support for sustainable initiatives and protect ratepayers with transparent pricing.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Grant Writing & Solar Assessments",
    content:
      "Our team assists with REAP grants and solar assessments to help rural Ohio communities thrive.",
  },
];

// ✅ Testimonials
export const feedback: Feedback[] = [
  {
    id: "feedback-1",
    content:
      "The first year of this program offered through SOPEC helped Cleveland residents and small businesses save over $12 million. This program has not only kept money in Clevelanders' pockets, but it has also kept Cleveland on track with actions outlined in the Clean & Equitable Energy Future and Climate Action Plans.",
    name: "Sarah O'Keeffe",
    title: "Director of Sustainability and Climate Justice, City of Cleveland",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "We appreciate SOPEC’s work to build a more sustainable energy infrastructure in the region.",
    name: "Shelley Dickstein",
    title: "City Manager, City of Dayton",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Unlike a traditional broker, SOPEC really cares about helping its member governments. They helped our local government reduce our energy costs by 70%, even while we were under contract with another supplier.",
    name: "Doug Davis",
    title: "Mayor, Village of Trimble",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "SOPEC has provided energy aggregation services for the City of Athens since 2014. There is not a better deal out there. SOPEC provides first-class customer support and is entirely focused on helping our community accomplish our energy planning goals.",
    name: "Steve Patterson",
    title: "Mayor, City of Athens",
    img: people01,
  },
  {
    id: "feedback-5",
    content:
      "All I can say is, thank you SOPEC and keep up the good work! Aggregation is the built-in check and balance to a fair and equitable energy system.",
    name: "Maria Dimengo",
    title: "Annual Pawpaw Festival Drawing Winner",
    img: people02,
  },
];


// ✅ Footer Links (Simple version)
export const footerLinks: FooterLinkGroup[] = [ // Apply type
  {
    title: "SOPEC Info",
    links: [
      { name: "About SOPEC", link: "/about-sopec" },
      { name: "Energy Services", link: "/energy-services" },
      { name: "News & Updates", link: "/news" },
      { name: "Public Records Request", link: "/public-records" },
    ],
  },
  {
    title: "Programs",
    links: [
      { name: "Green Initiatives", link: "/programs/green" },
      { name: "Solar Assessment Program", link: "/programs/solar" },
      { name: "REAP Grant Assistance", link: "/programs/reap" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact Us", link: "/contact" },
      { name: "Join SOPEC", link: "/join" },
      { name: "Careers", link: "/employment" },
    ],
  },
];

// ✅ Social Media Links
export const socialMedia: SocialMediaItem[] = [ // Apply type
  { id: "social-1", icon: facebook, link: "https://www.facebook.com/" },
  { id: "social-2", icon: instagram, link: "https://www.instagram.com/" },
  { id: "social-3", icon: twitter, link: "https://www.twitter.com/" },
  { id: "social-4", icon: linkedin, link: "https://www.linkedin.com/" },
];

// ✅ Partner/Client Logos
export const clients: Client[] = [ // Apply type
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];

// --- NEW Exports for the Detailed Footer (Apply types) ---

// ✅ Detailed Footer Logo Info
export const footerLogoInfo: FooterLogoInfo = { // Apply type
    src: "/assets/logo.png", // Use your actual SOPEC logo path here
    alt: "SOPEC Logo",
    width: 180,
    height: 60,
};

// ✅ Detailed Footer Address Info
export const footerAddressInfo: FooterAddressInfo = { // Apply type
    title: "Sustainable Ohio Public Energy Council",
    items: [
      "Athens: 340 W. State St., Unit 134 A-D",
      "Dayton: 31 S. Main St., Ste 385",
      "Cleveland: 1468 West 9th St., Ste 100",
      "Upper Arlington: 2025 Riverside Dr.",
    ],
};

// ✅ Detailed Footer Contact Info (Split into sections)
export const footerContactInfo: ContactSection[] = [ // Apply type
    {
      title: "Contact",
      items: [
        "P.O. Box 825, Athens, OH 45701",
        { type: 'tel', text: "T: 1-740-597-7955", href: "tel:17405977955" },
        { type: 'mail', text: "E: support@sopec-oh.gov", href: "mailto:support@sopec-oh.gov" },
      ],
    },
    {
      title: "Office Hours",
      items: ["M-F 9AM - 5PM (By appointment)"],
    },
];

// ✅ Detailed Footer Program List (Simple list for the footer column)
export const footerProgramList: FooterProgramList = { // Apply type
    title: "Programs",
    items: [
      "Public Pricing Program",
      "Solar Assessment Program",
      "Clean Energy Research",
    ],
};
export const sopecStats = [
    {
      title: "Communities Served",
      start: 3,
      end: 35,
      suffix: "+",
    },
    {
      title: "Residents Enrolled",
      start: 1,
      end: 100000,
      suffix: "K+",
    },
    {
      title: "Dollars Saved",
      start: 1,
      end: 12000000,
      suffix: "M+",
    },
  ];
  
// ✅ Detailed Footer Quick Links
export const footerQuickLinks: FooterQuickLinks = { // Apply type
    title: "Quick Links",
    items: [
      { name: "Home", href: "/" },
      { name: "About SOPEC", href: "/about-sopec" },
      { name: "Services", href: "/energy-services" },
      { name: "Group Rate", href: "/group-rate" },
      { name: "News & Updates", href: "/news" },
    ],
};

// ✅ Detailed Footer Copyright
export const footerCopyright: string = `Copyright Ⓒ ${new Date().getFullYear()} Sustainable Ohio Public Energy Council (SOPEC). All Rights Reserved.`;