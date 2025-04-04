// app/(dashboard)/admin/layout.tsx
import type { ReactNode } from "react";
import "./admin/admin.css";  // Correct relative import for admin.css in app/(dashboard)/admin/
  // Correct relative import for admin.css
import Header from "./admin/sections/Header";
import Sidebar from "./admin/components/Sidebar";

export const metadata = {
  title: "SOPEC – Sustainable Ohio Public Energy Council",
  description: 'Powered by Reign Mobile Agency NextPublic energy services, aggregation, and green initiatives for Ohio communities.',
};

const mockSession = {
  user: {
    name: "Chloe Musick",
    email: "chloe@example.com",
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-light-300 text-dark-400 overflow-hidden">
        <div className="flex h-screen w-screen">
          <Sidebar session={mockSession} />
          <div className="admin-container">
            <Header session={mockSession} />
            <div className="flex-1 overflow-y-auto h-[calc(100vh-100px)]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
