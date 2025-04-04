"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D02] text-white py-4 px-6 text-xs">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* SOPEC Logo (Clickable) */}
        <Link href="/" className="mb-3">
          <Image 
            src="/image/SOPEC-white.png" 
            alt="SOPEC Logo" 
            width={180} 
            height={60} 
            className="h-auto w-40 justify-items-center"
          />
        </Link>

        <div className="grid md:grid-cols-3 gap-4 w-full">
          {/* SOPEC Info */}
          <div className="leading-tight">
            <h3 className="font-bold text-sm">Sustainable Ohio Public Energy Council</h3>
            <p>Athens: 340 W. State St., Unit 134 A-D</p>
            <p>Dayton: 31 S. Main St., Ste 385</p>
            <p>Cleveland: 1468 West 9th St., Ste 100</p>
            <p>Upper Arlington: 2025 Riverside Dr.</p>
          </div>

          {/* Contact Info */}
          <div className="leading-tight">
            <h3 className="font-bold text-sm">Contact</h3>
            <p>P.O. Box 825, Athens, OH 45701</p>
            <p>T: <a href="tel:17405977955" className="underline">1-740-597-7955</a></p>
            <p>E: <a href="mailto:support@sopec-oh.gov" className="underline">support@sopec-oh.gov</a></p>
            <h3 className="font-bold text-sm mt-2">Office Hours</h3>
            <p>M-F 9AM - 5PM (By appointment)</p>
          </div>

          {/* Programs & Navigation */}
          <div className="leading-tight">
            <h3 className="font-bold text-sm">Programs</h3>
            <p>Public Pricing Program</p>
            <p>Solar Assessment Program</p>
            <p>Clean Energy Research</p>

            <h3 className="font-bold text-sm mt-2">Quick Links</h3>
            <ul>
              <li><Link href="/" className="underline">Home</Link></li>
              <li><Link href="/about-sopec" className="underline">About SOPEC</Link></li>
              <li><Link href="/services" className="underline">Services</Link></li>
              <li><Link href="/group-rate" className="underline">Group Rate</Link></li>
              <li><Link href="/news" className="underline">News & Updates</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-[10px] mt-3 border-t border-gray-500 pt-2 w-full">
          © 2024 Sustainable Ohio Public Energy Council (SOPEC). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
