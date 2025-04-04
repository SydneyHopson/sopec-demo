"use client";
import { styles } from "../lib/styles";
import { sopecStats } from "../../constants";
import AnimatedNumber from "./AnimatedNumber";

const pulseDelays = ["animate-pulse", "animate-pulse-slow", "animate-pulse"];

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
    {sopecStats.map((stat, index) => (
      <div
        key={stat.title}
        className="w-full sm:w-auto flex justify-center sm:justify-start items-center flex-row text-center m-3"
      >
        <h4 className="font-poppins font-semibold text-[30.89px] text-white leading-[43.16px]">
          <AnimatedNumber start={stat.start} end={stat.end} suffix={stat.suffix} />
        </h4>
        <p
          className={`font-poppins font-normal text-gradient uppercase ml-3 text-[15.45px] leading-[21.58px] ${
            pulseDelays[index % pulseDelays.length]
          }`}
        >
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
