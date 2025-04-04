"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminSideBarLinks } from "../admin-constants/index";
import { cn } from "../admin-constants/lib/utils";
import { Avatar, AvatarImage } from "./ui/Avatar";
import Image from "next/image";

type Session = {
  user?: {
    name?: string;
    email?: string;
  };
};

const Sidebar = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar w-[100px] md:w-[264px] h-screen flex flex-col bg-white px-4 py-6 border-r border-gray-100 overflow-hidden">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start gap-3 border-b border-solid border-gray-200 pb-4 shrink-0">
        <Image
          src="/assets/logog.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Nav + User */}
      <div className="flex flex-col justify-between flex-1 overflow-hidden">
        {/* Navigation */}
        <nav className="flex-1 mt-4 flex flex-col gap-2 items-center md:items-start overflow-y-auto no-scrollbar">
          {adminSideBarLinks.map((link) => {
            const isSelected =
              (link.route !== "/admin" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            const Icon = link.icon;

            return (
              <Link href={link.route} key={link.route}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-2.5 py-2 rounded-lg w-full transition-colors duration-200 justify-center md:justify-start hover:bg-[#e6f4ef]",
                    isSelected && "bg-primary-admin text-white"
                  )}
                >
                  <Icon
                    size={18}
                    className={cn(
                      "transition-colors",
                      isSelected ? "text-white" : "text-gray-700 group-hover:text-primary-admin"
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm font-medium hidden md:block",
                      isSelected ? "text-white" : "text-dark"
                    )}
                  >
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom: User Info */}
        <div className="shrink-0 pt-4 border-t border-solid border-light-300 flex items-center gap-2 justify-center md:justify-start">
          <Avatar>
            <AvatarImage
              src="/images/chloe.jpg"
              alt="User"
              className="rounded-full object-cover"
            />
          </Avatar>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-semibold text-dark-200">
              {session?.user?.name || "Chloe Musick"}
            </p>
            <p className="text-xs text-light-500">
              {session?.user?.email || "admin@sopec.com"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
