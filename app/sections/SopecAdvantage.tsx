"use client";

import { styles, layout } from "../lib/styles";
import Image from "next/image";
import card from "../../public/assets/card.png";

const SopecAdvantage = () => (
  <section id="sopec-advantage" className={`${layout.section} flex-col md:flex-row items-center text-center md:text-left`}>
    {/* Text Section */}
    <div className={`${layout.sectionInfo} flex flex-col items-center md:items-start`}>
      <h2 className={`${styles.heading2}`}>
        The <span className="text-gradient animate-pulse-slow">SOPEC</span> Advantage
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        As a public service organization, SOPEC provides a more valuable experience from day one.
        We help members understand how energy markets and utility rates work. SOPEC is governed by elected officials,
        focused on expanding renewable energy, and committed to never-ending support.
      </p>
    </div>

    {/* Image Section */}
    <div className={`${layout.sectionImg} mt-10 md:mt-0`}>
      <Image
        src={card}
        alt="sopec card"
        className="w-[100%] h-[100%] animate-glow-slow"
      />
    </div>
  </section>
);

export default SopecAdvantage;
