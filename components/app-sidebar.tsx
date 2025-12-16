"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop: Floating sidebar */}
      <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 rounded-md border border-sidebar-border/20 bg-sidebar/10 backdrop-blur-md shadow-lg">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Mobile: Original layout */}
      <div className="md:hidden flex flex-col h-screen">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div></div>
          </SidebarBody>
        </Sidebar>
        <div className="flex flex-1">
          <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-sidebar-border p-2">
            {children}
          </div>
        </div>
      </div>

      {/* Desktop: Full screen children */}
      <div className="hidden md:block w-screen h-screen">{children}</div>
    </>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center gap-6 py-1 text-sm font-normal text-sidebar-foreground"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-sidebar-foreground" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-sidebar-foreground"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      aria-label="Acet Labs Home"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-sidebar-foreground"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-sidebar-foreground" />
    </Link>
  );
};
