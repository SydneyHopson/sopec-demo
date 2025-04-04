"use client";

import { styles } from "../lib/styles";
import robot from "../../public/assets/robot.png";
import GetStarted from "./GetStarted";
import { Zap } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left side content */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Tagline */}
        <div className="flex items-center py-[4px] px-3 bg-discount-gradient rounded-[8px] mb-2">
          <Zap className="w-5 h-5 text-[#9dedf0] animate-pulse" />
          <p className="text-sm ml-2 whitespace-nowrap text-gradient">
            Sustainable, Statewide Gov&apos;t Energy Aggregator
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[100.8px] leading-[70px] w-full">
          SOPEC Powers Ohio&apos;s{" "}
          <span className="text-gradient animate-pulse-slow">Energy</span> Future
        </h1>

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

        {/* Apply section (desktop) */}
        <div className="ss:flex hidden flex-col items-center text-center mt-6">
          <GetStarted />
          <p className="text-xs text-gray-300 mt-5 max-w-[470px]">
            If you aren&apos;t currently enrolled in the aggregation program and would like to, call the dedicated SOPEC enrollment number with our supplier (AEP ENERGY) at{" "}
            <strong>1-877-648-1937</strong>.
          </p>
        </div>
      </div>

      {/* Right side robot image */}
      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
        <Image
          src={robot}
          alt="billing"
          width={500}
          height={500}
          className="relative z-[5] object-contain w-full max-w-[400px] sm:max-w-[500px] animate-glow-slow"
          priority
        />

        {/* Gradients */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Apply section (mobile) */}
      <div className={`ss:hidden ${styles.flexCenter} flex-col`}>
        <GetStarted />
        <p className="text-xs text-gray-300 text-center mt-5 max-w-xs px-4">
          If you aren&apos;t currently enrolled in the aggregation program and would like to, call the dedicated SOPEC enrollment number with our supplier (AEP ENERGY) at{" "}
          <strong>1-877-648-1937</strong>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
