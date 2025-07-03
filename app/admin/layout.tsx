"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  BookOpen,
  Mail,
  Shield,
  Database,
  Languages,
  Menu,
  LogOut,
  FileText,
  ImageIcon,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    description: "Overview of your platform statistics and recent activity",
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
    description: "Manage user accounts, permissions, and user data",
  },
  {
    title: "Workshops",
    href: "/admin/workshops",
    icon: BookOpen,
    description: "Create, edit, and manage cybersecurity workshops and courses",
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: MessageSquare,
    description: "View and respond to contact form submissions and inquiries",
  },
  {
    title: "Email",
    href: "/admin/email",
    icon: Mail,
    description: "Send emails, manage subscribers, and create email campaigns",
  },
  {
    title: "Content",
    href: "/admin/content",
    icon: FileText,
    description: "Manage website content, pages, and blog posts",
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: ImageIcon,
    description: "Upload and manage images, videos, and other media files",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    description: "View website traffic, user engagement, and performance metrics",
  },
  {
    title: "Security",
    href: "/admin/security",
    icon: Shield,
    description: "Monitor security alerts, login logs, and configure security settings",
  },
  {
    title: "Backup",
    href: "/admin/backup",
    icon: Database,
    description: "Create backups, schedule automated backups, and restore data",
  },
  {
    title: "Languages",
    href: "/admin/languages",
    icon: Languages,
    description: "Manage translations and multi-language content for your website",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    description: "Configure general settings, preferences, and system configuration",
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6" />
          <span>AlphaSploit Admin</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-start gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary ${
                  isActive ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-xs text-muted-foreground leading-tight mt-1">{item.description}</span>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/">
            <LogOut className="h-4 w-4 mr-2" />
            Back to Website
          </Link>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SidebarContent />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">
              {sidebarItems.find((item) => item.href === pathname)?.title || "Admin Panel"}
            </h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
