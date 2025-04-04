// app/(site)/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { styles } from "../lib/styles";
import Navbar from "../sections/NavBar";
import Footer from "../sections/Footer";

export const metadata: Metadata = {
  title: "SOPEC – Sustainable Ohio Public Energy Council",
  description:
    "Public energy services, aggregation, and green initiatives for Ohio communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-primary text-white h-full overflow-x-hidden flex flex-col">
        {/* Navbar always visible */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Page Content */}
        <div className={`bg-primary ${styles.flexStart} flex-grow`}>
          <div className={`${styles.boxWidth}`}>{children}</div>
        </div>

        {/* Footer always visible */}
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
