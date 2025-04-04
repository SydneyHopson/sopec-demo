"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../public/assets/logo.png";
import menu from "../../public/assets/menu.svg";
import close from "../../public/assets/close.svg";
import { navLinks, subMenus } from "../../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState<string | null>(null);

  const handleMobileNavClick = (nav: string) => {
    const lower = nav.toLowerCase();
    if (subMenus[lower]) {
      setCurrentSubMenu(lower);
    } else {
      setActive(nav);
      setToggle(false);
    }
  };

  return (
    <nav className="bg-huntergreen w-full flex py-6 justify-between items-center navbar relative">
      {/* Logo */}
      <Image
        src={logo}
        alt="SOPEC"
        width={124}
        height={32}
        className="object-contain"
        priority
      />

      {/* Desktop Nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative font-poppins font-normal cursor-pointer text-[16px] transition-all duration-300 ease-in-out
              ${
                active === nav.title
                  ? "bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent animate-pulse"
                  : "text-dimWhite"
              }
              hover:bg-gradient-to-r hover:from-[#5ce1e6] hover:to-[#33bbcf] hover:bg-clip-text hover:text-transparent hover:animate-pulse
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onMouseEnter={() => setActive(nav.title)}
            onMouseLeave={() => setActive("Home")}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {subMenus[nav.title.toLowerCase()] &&
                active === nav.title && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 bg-black-gradient text-white border-2 border-[#5ce1e6] rounded-xl p-4 min-w-[200px] z-20 shadow-md animate-border-glow"
                  >
                    {subMenus[nav.title.toLowerCase()].map((item, idx) => (
                      <li
                        key={idx}
                        className="py-2 px-3 hover:bg-gradient-to-r hover:from-[#5ce1e6] hover:to-[#33bbcf] hover:bg-clip-text hover:text-transparent hover:animate-pulse transition-all duration-300 text-sm font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className="sm:hidden flex justify-end items-center ml-auto">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => {
            setToggle(!toggle);
            setCurrentSubMenu(null);
          }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="fixed top-20 right-0 bg-black-gradient text-white border-2 border-[#5ce1e6] animate-border-glow rounded-xl p-6 z-50 w-fit min-w-[200px] shadow-md"
            >
              {/* Main Menu */}
              {!currentSubMenu && (
                <ul className="space-y-4">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`text-base font-medium cursor-pointer transition-all duration-300 ease-in-out
                        ${
                          active === nav.title
                            ? "bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent animate-pulse"
                            : "text-white"
                        }
                        hover:bg-gradient-to-r hover:from-[#5ce1e6] hover:to-[#33bbcf] hover:bg-clip-text hover:text-transparent hover:animate-pulse
                      `}
                      onClick={() => handleMobileNavClick(nav.title)}
                    >
                      {nav.title}
                    </li>
                  ))}
                </ul>
              )}

              {/* SubMenu */}
              {currentSubMenu && (
                <>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setCurrentSubMenu(null)}
                      className="text-sm font-bold mr-2"
                    >
                      ← Back
                    </button>
                    <span className="text-lg font-semibold capitalize">
                      {currentSubMenu.replace(/^\w/, (c) => c.toUpperCase())}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {subMenus[currentSubMenu].map((item, index) => (
                      <li
                        key={index}
                        className="text-sm font-medium text-white hover:bg-gradient-to-r hover:from-[#5ce1e6] hover:to-[#33bbcf] hover:bg-clip-text hover:text-transparent hover:animate-pulse"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
