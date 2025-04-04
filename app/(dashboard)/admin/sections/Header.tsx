"use client";

import { motion } from "framer-motion";

type User = {
  name?: string;
  email?: string;
};

type Session = {
  user?: User;
};

interface HeaderProps {
  session: Session;
}

const Header = ({ session }: HeaderProps) => {
  const username = session?.user?.name || "Guest User";
  const email = session?.user?.email;

  return (
    <motion.header
      className="admin-header px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-2xl font-bold text-zinc-800 tracking-tight">
          Welcome back, {username}
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Monitor user activity, community uploads, and platform metrics here.
        </p>
      </div>
      
      {email && (
        <div className="text-right mt-4 sm:mt-0">
          <span className="text-sm text-zinc-400">Logged in as</span>
          <p className="text-sm font-medium text-zinc-700">{email}</p>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
