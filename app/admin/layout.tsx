"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  User,
  Bell,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    description: "Overview of platform statistics, recent activity, and key metrics",
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
    description: "Manage student accounts, instructors, and user permissions",
  },
  {
    title: "Workshops",
    href: "/admin/workshops",
    icon: BookOpen,
    description: "Create, edit, and manage cybersecurity workshops and training programs",
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: MessageSquare,
    description: "View and respond to contact form submissions and customer inquiries",
  },
  {
    title: "Email",
    href: "/admin/email",
    icon: Mail,
    description: "Send newsletters, manage email campaigns, and configure SMTP settings",
  },
  {
    title: "Content",
    href: "/admin/content",
    icon: FileText,
    description: "Manage website content, pages, blog posts, and site information",
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: ImageIcon,
    description: "Upload and organize images, videos, documents, and other media files",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    description: "View website traffic, user engagement, and performance analytics",
  },
  {
    title: "Security",
    href: "/admin/security",
    icon: Shield,
    description: "Monitor security threats, manage access controls, and view audit logs",
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

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  // Check authentication
  useEffect(() => {
    if (pathname === "/admin/login") return

    const token = localStorage.getItem("admin_token")
    const userData = localStorage.getItem("admin_user")

    if (!token) {
      router.push("/admin/login")
      return
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [pathname, router])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("admin_user")
    localStorage.removeItem("admin_remember")
    router.push("/admin/login")
  }

  // Don't render layout for login page
  if (pathname === "/admin/login") {
    return children
  }

  // Don't render if not authenticated
  if (!user) {
    return null
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6 text-primary" />
          <span>AlphaSploit Admin</span>
        </Link>
      </div>

      {/* Navigation */}
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

      {/* User Info */}
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center space-x-3 mb-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>{user?.name?.charAt(0) || "A"}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.role}</p>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* Mobile Menu */}
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

          {/* Page Title */}
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">
              {sidebarItems.find((item) => item.href === pathname)?.title || "Admin Panel"}
            </h1>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button variant="outline" size="icon" className="bg-transparent">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{user?.name?.charAt(0) || "A"}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/admin/settings">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Back to Website</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
