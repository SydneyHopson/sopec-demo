"use client";

import { styles } from "../lib/styles";
import arrowUp from "../../public/assets/arrow-up.svg";
import Image from "next/image";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green-gradient p-[2px] cursor-pointer transition-transform duration-300 hover:scale-105`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full animate-pulse-soft hover:animate-none hover:shadow-lg`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient animate-gradient-pulse">Apply</span>
        </p>
        <Image
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain ml-1"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient animate-gradient-pulse">Here</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
