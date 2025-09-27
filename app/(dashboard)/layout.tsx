"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <div className="md:w-60 lg:w-68">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="md:w-[95%] w-full">
        <Header onMenu={() => setSidebarOpen(true)} />

        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
