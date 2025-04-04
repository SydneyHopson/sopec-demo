"use client";

import { feedback } from "../../constants";
import { styles } from "../lib/styles";
import FeedbackCard from "./FeedBackCard";

const Testimonials = () => (
  <section
    id="testimonials"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Background glow */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Header */}
    <h2 className={`${styles.heading2} text-center`}>
      What{" "}
      <span className="bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent animate-pulse">
        People
      </span>{" "}
      Are <br className="sm:block hidden" /> Saying About Us
    </h2>

    <p
      className={`${styles.paragraph} text-center max-w-[700px] mt-6 text-dimWhite z-[1]`}
    >
      Here&apos;s what community leaders and members are saying about SOPEC&apos;s
      mission, results, and support.
    </p>

    {/* Feedback Cards */}
    <div className="flex flex-wrap justify-center w-full gap-6 mt-12 z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
