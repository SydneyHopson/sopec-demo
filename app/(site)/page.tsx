"use client";

import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import SolarSection from "../sections/SolarSection";
import SopecAdvantage from "../sections/SopecAdvantage";
import Testimonials from "../sections/Testimonials";
import NewsUpdates from "../sections/NewsUpdates";
import CTA from "../sections/Cta";
import MemberValue from "../sections/MemberValue";

export default function Home() {
  return (
    <div className="text-white p-4">
      <Hero />
      <Stats />
      <MemberValue />
      <SolarSection />
      <SopecAdvantage /> {/* ✅ fixed spelling */}
      <Testimonials />
      <NewsUpdates />
      <CTA />
    </div>
  );
}
