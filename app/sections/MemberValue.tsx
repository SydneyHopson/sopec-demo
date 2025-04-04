"use client";

import { Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { styles } from "../lib/styles";
import { layout } from "../lib/styles";

const SOPECMap = dynamic(() => import("@/app/component/SOPECMap"), { ssr: false });

const MemberValue = () => (
  <section id="member-value" className={`${layout.section} flex flex-col md:flex-row items-center gap-10`}>
    {/* Text Side */}
    <div className={`${layout.sectionInfo} flex flex-col items-center md:items-start`}>
      {/* Tagline Frame */}
      <div className="flex items-center py-[4px] px-3 bg-discount-gradient rounded-[8px] mb-2">
        <Zap className="w-5 h-5 text-[#9dedf0] animate-glow delay-[0.4s]" />
        <p className="text-sm ml-2 whitespace-nowrap text-gradient">
          Our Members Matter
        </p>
      </div>

      {/* Headline */}
      <h2 className={`${styles.heading2} text-white text-center md:text-left`}>
        Focused on Value <br className="sm:block hidden" /> for Our{" "}
        <span className="text-gradient animate-pulse-slow">Members</span>
      </h2>

      {/* Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center md:text-left`}>
        SOPEC helps local governments pool their energy needs to get the best rates and deliver sustainable public services.
        Our team also provides legal, financial, and grant support to empower community energy decisions.
      </p>

      {/* Button */}
      <Link
        href="/about-sopec"
        className="inline-block bg-[#5ce1e6] text-black font-bold py-3 px-6 rounded-full text-[16px] mt-8 hover:bg-[#33bbcf] transition animate-button-glow delay-[1.4s]"
      >
        Learn About Our Communities
      </Link>
    </div>

    {/* Map Side */}
    <div className="w-full max-w-[500px] sm:max-w-[600px] md:ml-10">
      <SOPECMap />
    </div>
  </section>
);

export default MemberValue;
