"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Correct Import Path Based on Your File Structure
const SOPECMap = dynamic(() => import("@/app/component/SOPECMap"), { ssr: false });

export default function About() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-extrabold mb-6">Leading Ohio&apos;s Energy Future</h2>


        <p className="text-2xl font-bold mb-4 text-green-900">
          SOPEC is a council of governments that functions as a shared energy office dedicated to providing
          innovative and sustainable energy solutions in Ohio.
        </p>

        <p className="text-lg mb-6">
          With a strong focus on community engagement and environmental stewardship, SOPEC is at the forefront of promoting green energy initiatives, 
          including our Electric Aggregation Program, electric vehicle network expansion, solar assessments, grant writing assistance, and more.
        </p>

        {/* Interactive Map */}
        <div className="mt-10">
          <SOPECMap />
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/about-sopec"
            className="bg-green-800 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition"
          >
            Learn More About Our Communities
          </Link>
        </div>
      </div>
    </section>
  );
}
