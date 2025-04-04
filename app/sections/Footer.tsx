"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  footerLogoInfo,
  footerAddressInfo,
  footerContactInfo,
  footerProgramList,
  footerQuickLinks,
  socialMedia,
  footerCopyright,
  SocialMediaItem,
  ContactSection,
  ContactItem,
  QuickLink,
  FooterListItemType,
} from "../../constants/index";

const renderListItem = (
  item: FooterListItemType,
  index: number,
  array: FooterListItemType[]
) => {
  const marginBottomClass = index !== array.length - 1 ? "mb-1" : "mb-0";
  const commonClasses = `font-poppins font-normal text-[12px] leading-[18px] text-gray-300 ${marginBottomClass}`;

  if (typeof item === "string") {
    return (
      <p key={index} className={commonClasses}>
        {item}
      </p>
    );
  }

  if (item && "type" in item && (item.type === "tel" || item.type === "mail")) {
    return (
      <p key={item.href || index} className={commonClasses}>
        <a href={item.href} className="hover:text-white underline">
          {item.text}
        </a>
      </p>
    );
  }

  if (item && "name" in item && "href" in item) {
    return (
      <li key={item.name} className={`${commonClasses} hover:text-white cursor-pointer list-none`}>
        <Link href={item.href} className="underline">
          {item.name}
        </Link>
      </li>
    );
  }

  console.warn("Unknown item type in renderListItem:", item);
  return null;
};

const Footer = () => (
  <section className="w-full py-8 bg-primary text-white">
    <div className="container mx-auto px-4 flex flex-col gap-10 md:gap-6">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-6"
      >
        {/* Logo + Address */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-[220px]">
          <Link href="/" className="mb-2">
            <Image
              src={footerLogoInfo.src}
              alt={footerLogoInfo.alt}
              width={footerLogoInfo.width / 1.5}
              height={footerLogoInfo.height / 1.5}
              className="object-contain h-auto"
              priority
            />
          </Link>
          <h3 className="font-poppins font-semibold text-[14px] leading-[21px] text-white mb-1">
            {footerAddressInfo.title}
          </h3>
          <div className="flex flex-col items-center md:items-start">
            {footerAddressInfo.items.map((item: string, index: number) =>
              renderListItem(item, index, footerAddressInfo.items)
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-center md:text-left">
          {footerContactInfo.map((section: ContactSection) => (
            <div key={section.title}>
              <h4 className="font-poppins font-medium text-[14px] leading-[21px] text-gradient mb-2">
                {section.title}
              </h4>
              <div className="flex flex-col items-center md:items-start">
                {section.items.map((item: string | ContactItem, index: number) =>
                  renderListItem(item, index, section.items)
                )}
              </div>
            </div>
          ))}

          <div>
            <h4 className="font-poppins font-medium text-[14px] leading-[21px] text-gradient mb-2">
              {footerProgramList.title}
            </h4>
            <div className="flex flex-col items-center md:items-start">
              {footerProgramList.items.map((item: string, index: number) =>
                renderListItem(item, index, footerProgramList.items)
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copyright + Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-t-[#33bbcf] pt-4 gap-4">
        <p className="font-poppins font-normal text-[12px] text-gray-300 text-center md:text-left">
          {footerCopyright}
        </p>
        <div className="flex flex-row">
          {socialMedia.map((social: SocialMediaItem, index: number) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer ${index !== socialMedia.length - 1 ? "mr-4" : "mr-0"}`}
            >
              <Image
                src={social.icon}
                alt={social.id}
                width={18}
                height={18}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* One-Line Quick Links + Newsletter Footer Blip */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="w-full border-t border-t-[#33bbcf] pt-3 pb-2 px-4 flex flex-wrap justify-center md:justify-between items-center gap-3 text-[11px] text-gray-300"
      >
        {/* Quick Links (inline) */}
        <div className="flex flex-wrap justify-center gap-3">
          {footerQuickLinks.items.map((link: QuickLink) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white underline whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2"
        >
          <input
            type="email"
            placeholder="Email"
            className="px-2 py-[4px] text-[11px] rounded-sm text-black w-[140px]"
          />
          <button
            type="submit"
            className="bg-white text-[#0B3D02] text-[11px] px-3 py-[4px] rounded-sm hover:bg-opacity-90"
          >
            Join
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default Footer;
