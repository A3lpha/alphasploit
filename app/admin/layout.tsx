"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  BarChart3,
  FileText,
  Globe,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
} from "lucide-react"
import { Suspense } from "react"

// Mock authentication - in real app, use proper auth
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in (mock)
    const token = localStorage.getItem("admin_token")
    if (token === "admin_authenticated") {
      setIsAuthenticated(true)
      setUser({
        name: "Admin User",
        email: "admin@alphasploit.com",
        role: "Super Admin",
        avatar: "/images/wolf-warrior-presenter.png",
      })
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const logout = () => {
    localStorage.removeItem("admin_token")
    setIsAuthenticated(false)
    setUser(null)
    router.push("/admin/login")
  }

  return { isAuthenticated, user, logout }
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const pathname = usePathname()

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard, current: pathname === "/admin" },
    { name: "Workshops", href: "/admin/workshops", icon: Calendar, current: pathname.startsWith("/admin/workshops") },
    { name: "Users", href: "/admin/users", icon: Users, current: pathname.startsWith("/admin/users") },
    { name: "Content", href: "/admin/content", icon: FileText, current: pathname.startsWith("/admin/content") },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3, current: pathname.startsWith("/admin/analytics") },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare, current: pathname.startsWith("/admin/messages") },
    { name: "Languages", href: "/admin/languages", icon: Globe, current: pathname.startsWith("/admin/languages") },
    { name: "Settings", href: "/admin/settings", icon: Settings, current: pathname.startsWith("/admin/settings") },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between px-4 border-b">
              <img src="/images/alphasploit-logo.png" alt="AlphaSploit" className="h-8 w-auto" />
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Suspense>

      {/* Desktop sidebar */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img src="/images/alphasploit-logo.png" alt="AlphaSploit" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-gray-900">Admin</span>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      item.current ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between items-center">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Notifications */}
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>

              {/* Profile dropdown */}
              <div className="relative flex items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user?.avatar || "/placeholder.svg"}
                    alt={user?.name || "Admin"}
                  />
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-gray-700">{user?.name}</div>
                    <div className="text-xs text-gray-500">{user?.role}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={logout} className="text-gray-500 hover:text-gray-700">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
