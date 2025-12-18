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
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      name: "Dashboard",
      link: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
    {
      name: "About",
      link: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
    {
      name: "Setting",
      link: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
    {
      name: "Logout",
      link: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-sidebar-foreground" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      {/* Desktop: Floating sidebar */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <SidebarLink key={idx} link={item} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Resizable Navbar */}
      <Navbar className="fixed top-4 z-30">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton>Get Started</NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton className="mt-4">Get Started</NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Full screen children */}
      <div className="w-screen h-screen">{children}</div>
    </>
  );
}
