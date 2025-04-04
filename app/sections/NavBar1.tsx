"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideMenu from "./SideMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Side Menu */}
      <SideMenu isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />

      {/* Navbar */}
      <header>
        {/* Top Bar */}
        <div className="bg-[#0B3D02] text-white p-3 flex justify-between items-center">
          <span className="text-sm font-light">Sustainable Ohio Public Energy Council</span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black px-3 py-1 rounded-full w-1/4 sm:w-1/6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Main Navigation */}
        <nav className="bg-white text-green-700 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            {/* Clickable SOPEC Logo */}
            <Link href="/">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/73f677bd-27b1-4773-a5ef-f3f2f396150b/sopec_10yr_logo_hrz_green.png?format=1500w"
                alt="SOPEC Logo"
                width={150}
                height={50}
                className="h-auto w-40 cursor-pointer"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(true)} className="md:hidden text-green-700 text-2xl">
              <Menu size={24} />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/about-us" className="hover:text-[#0B3D02]">About Us</Link>
              <Link href="/programs" className="hover:text-[#0B3D02]">Programs</Link>
              <Link href="/membership" className="hover:text-[#0B3D02]">Membership</Link>
              <Link href="/energy-services" className="hover:text-[#0B3D02]">Energy Services</Link>
              <Link href="/join-sopec" className="hover:text-[#0B3D02]">Join SOPEC</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
