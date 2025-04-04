"use client";

import Link from "next/link";
import Image from "next/image";
import { styles } from "../lib/styles";

const newsItems = [
  {
    title:
      "City of Gahanna Recertified as Gold Plus Equity Champion Under MORPC’s Sustainable2050 Program",
    description:
      "The City of Gahanna has been recertified with elevated status for actions promoting sustainability and equity by MORPC.",
    img: "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/1728493425719-UIRLIL9HYUPCS73LM5CU/sopec_badge_logo_green.png?format=2500w",
  },
  {
    title: "SOPEC Ranks 7th Nationally for CCA Green Power Sales in 2023",
    description:
      "SOPEC ranked 7th in the U.S. for Community Choice Aggregation green power sales, per the National Renewable Energy Laboratory.",
    img: "https://images.squarespace-cdn.com/content/v1/5bc0dceb77889706f8750fc4/1728493425719-UIRLIL9HYUPCS73LM5CU/sopec_badge_logo_green.png?format=2500w",
  },
];

const NewsUpdates = () => (
  <section
    id="news"
    className={`${styles.paddingY} ${styles.paddingX} w-full flex flex-col items-center gap-12`}
  >
    {/* Header with gradient only on "Updates" */}
    <h2 className="text-center text-[32px] font-bold text-white">
      News{" "}
      <span className="bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent animate-pulse">
        Updates
      </span>
    </h2>

    {/* News Cards */}
    <div className="w-full max-w-6xl grid sm:grid-cols-2 grid-cols-1 gap-8">
      {newsItems.map((item, index) => (
        <Link
          key={index}
          href="/coming-soon"
          className="group relative flex flex-col items-center rounded-xl border-2 border-[#5ce1e6] p-6 transition-transform duration-300 hover:scale-[1.015]"
        >
          {/* Glowing border only */}
          <span className="absolute inset-0 rounded-xl border-2 border-[#5ce1e6] pointer-events-none animate-border-glow" />

          <Image
            src={item.img}
            alt="news logo"
            width={100}
            height={100}
            className="object-contain z-[1] mb-4"
          />

          <h3 className="text-white text-[18px] font-semibold text-center z-[1] mb-2">
            {item.title}
          </h3>
          <p className="text-dimWhite text-[16px] text-center z-[1]">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  </section>
);

export default NewsUpdates;
