"use client";

import { styles, layout } from "../lib/styles";
import Image from "next/image";
import Link from "next/link";
import bill from "../../public/assets/bill.png"; // your updated image

const SolarSection = () => (
  <section id="solar-assistance" className={`${layout.sectionReverse} flex-col md:flex-row items-center text-center md:text-left`}>
    {/* Image Side */}
    <div className={`${layout.sectionImgReverse} relative`}>
      <Image
        src={bill}
        alt="solar assessment placeholder"
        className="w-[100%] h-[100%] relative z-[5] animate-glow-slow rounded-xl"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    {/* Text Side */}
    <div className={`${layout.sectionInfo} flex flex-col items-center md:items-start`}>
      <h2 className={`${styles.heading2} text-white text-center md:text-left`}>
        Free Solar <span className="text-gradient animate-pulse-slow">Assessments</span> <br className="sm:block hidden" /> & REAP Grant <span className="text-gradient animate-pulse-slow">Assistance</span>
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center md:text-left`}>
        With support from the Ohio USDA Rural Development State Office, SOPEC offers free solar assessments and grant prep
        for rural small businesses and farmers across Ohio. Receive a custom report with 50% USDA REAP grant info, 30% federal solar credit,
        and additional low-cost financing options.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-[#5ce1e6] text-black font-bold py-3 px-6 rounded-full text-[16px] mt-8 hover:bg-[#33bbcf] transition animate-button-glow"
      >
        Apply Here
      </Link>
    </div>
  </section>
);

export default SolarSection;
