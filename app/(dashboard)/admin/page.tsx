"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

import { Bell, Calendar, FileText, PlusCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const DashboardHome = () => {
  const actions: {
    label: string;
    icon: React.ReactNode;
    variant: "default" | "secondary" | "outline" | "ghost";
  }[] = [
    { label: "Add Member", icon: <PlusCircle size={18} />, variant: "default" },
    { label: "Upload Notice", icon: <FileText size={18} />, variant: "secondary" },
    { label: "View Stats", icon: <TrendingUp size={18} />, variant: "outline" },
    { label: "Calendar", icon: <Calendar size={18} />, variant: "ghost" },
  ];

  return (
    <div className="admin-container w-full space-y-8 px-4 sm:px-6 py-6 sm:py-8">
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800">
          Welcome back, Chloe 👋
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Here’s what’s happening with SOPEC today
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Member Communities", value: 21 },
          { title: "Current Programs", value: 5 },
          { title: "Recent Grant Requests", value: 3 },
          { title: "News Updates This Week", value: 2 },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="hover:scale-[1.02] transition-transform"
          >
            <Card className="hover:shadow-lg transition duration-300 border border-zinc-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-zinc-700">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary-admin">{item.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border border-zinc-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-zinc-800">
              Recent Activity
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-primary-admin">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-zinc-600">
            <p>✅ Athens County requested a solar assessment – Apr 3</p>
            <p>📁 Uploaded Annual Report 2024 – Apr 2</p>
            <p>🔧 Updated Community Grants section – Mar 28</p>
            <p>🗓️ Added upcoming bid deadline – Mar 25</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h2 className="text-lg font-semibold text-zinc-800">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-4">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button variant={action.variant} size="sm" className="w-full gap-2">
                {action.icon} {action.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Alert */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6"
      >
        <Card className="border-l-4 border-primary-admin bg-light-100 shadow-sm">
          <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4">
            <Bell className="text-primary-admin shrink-0" />
            <p className="text-zinc-700 text-sm">
              New Public Bids due by <strong>April 15</strong>. Review now in the Documents tab.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
