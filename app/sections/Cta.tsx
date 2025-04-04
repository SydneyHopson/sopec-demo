"use client";

import { styles } from "../lib/styles";
import Buttons from "./Buttons";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden group`}
  >
    {/* Glowing blue border */}
    <div className="absolute inset-0 rounded-[20px] border-2 border-[#5ce1e6] animate-border-glow pointer-events-none" />

    <div className="flex-1 flex flex-col items-center z-[1] text-center">
      {/* Header with gradient "CONNECT" */}
      <h2 className={styles.heading2}>
        <span className="bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] text-transparent bg-clip-text animate-pulse">
          CONNECT
        </span>{" "}
        WITH SOPEC
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Join to receive news and updates first!
      </p>

      {/* Email input & button */}
      <div className="flex flex-col items-center mt-6 w-full gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-3 rounded-full w-full sm:w-[350px] border border-white bg-transparent text-white placeholder:text-white focus:outline-none"
        />

        {/* Blue gradient glowing button */}
        <Buttons styles="bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] animate-pulse text-white w-[180px] text-center mt-3" />
      </div>

      <p className="text-white text-[14px] mt-5 max-w-[470px]">
        We respect your privacy. We promise to never sell your email or spam you.
      </p>
    </div>
  </section>
);

export default CTA;
