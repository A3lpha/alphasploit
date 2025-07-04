"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Globe,
  AlertCircle,
  CheckCircle,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Brain,
  Network,
  Settings,
  FileText,
  Activity,
  Clock,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeWorkshops: 8,
    pendingMessages: 12,
    monthlyRevenue: 15420,
    registrations: 89,
    completionRate: 94,
  })

  useEffect(() => {
    const userData = localStorage.getItem("admin_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const recentActivities = [
    {
      id: 1,
      type: "registration",
      message: "New workshop registration for Advanced Penetration Testing",
      user: "Ahmed Hassan",
      time: "2 minutes ago",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      id: 2,
      type: "message",
      message: "New contact form submission received",
      user: "Fatima Ali",
      time: "15 minutes ago",
      icon: MessageSquare,
      color: "text-green-600",
    },
    {
      id: 3,
      type: "completion",
      message: "Workshop completed: SOC Analyst Training",
      user: "Mohamed Omar",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "text-purple-600",
    },
    {
      id: 4,
      type: "alert",
      message: "Workshop capacity almost full (18/20 students)",
      user: "System Alert",
      time: "2 hours ago",
      icon: AlertCircle,
      color: "text-orange-600",
    },
    {
      id: 5,
      type: "payment",
      message: "Payment received for Incident Response Masterclass",
      user: "Amina Abdi",
      time: "3 hours ago",
      icon: DollarSign,
      color: "text-green-600",
    },
  ]

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Advanced Penetration Testing Workshop",
      date: "December 15, 2024",
      time: "9:00 AM - 1:00 PM EST",
      registered: 15,
      capacity: 20,
      status: "active",
      instructor: "Alex Thompson",
    },
    {
      id: 2,
      title: "Incident Response Masterclass",
      date: "January 20, 2025",
      time: "10:00 AM - 4:00 PM EST",
      registered: 8,
      capacity: 25,
      status: "active",
      instructor: "Sarah Mitchell",
    },
    {
      id: 3,
      title: "Cybersecurity for Beginners",
      date: "February 10, 2025",
      time: "2:00 PM - 5:00 PM EST",
      registered: 0,
      capacity: 30,
      status: "draft",
      instructor: "Marcus Chen",
    },
  ]

  const quickStats = [
    {
      name: "Total Students",
      value: stats.totalUsers.toLocaleString(),
      change: "+12%",
      changeType: "increase",
      icon: Users,
      description: "Registered platform users",
    },
    {
      name: "Active Workshops",
      value: stats.activeWorkshops,
      change: "+2",
      changeType: "increase",
      icon: Calendar,
      description: "Currently running workshops",
    },
    {
      name: "Pending Messages",
      value: stats.pendingMessages,
      change: "-3",
      changeType: "decrease",
      icon: MessageSquare,
      description: "Unread contact inquiries",
    },
    {
      name: "Monthly Revenue",
      value: `$${stats.monthlyRevenue.toLocaleString()}`,
      change: "+18%",
      changeType: "increase",
      icon: DollarSign,
      description: "Revenue this month",
    },
  ]

  const systemHealth = [
    { name: "Server Status", status: "healthy", value: "99.9% uptime" },
    { name: "Database", status: "healthy", value: "All connections active" },
    { name: "Email Service", status: "healthy", value: "Sending normally" },
    { name: "Backup System", status: "warning", value: "Last backup: 2 hours ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome back, {user?.name || "Admin"}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your cybersecurity training platform today.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
            <Activity className="w-3 h-3 mr-1" />
            System Online
          </Badge>
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
            <Shield className="w-3 h-3 mr-1" />
            {user?.role || "Admin"}
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === "increase" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest activities and events across your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className={`p-2 rounded-full bg-gray-100`}>
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                      <span className="text-muted-foreground">•</span>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full bg-transparent">
                View All Activities
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Workshops */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Network className="mr-2 h-5 w-5 text-accent" />
              Upcoming Workshops
            </CardTitle>
            <CardDescription>Manage your scheduled cybersecurity training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingWorkshops.map((workshop) => (
                <div key={workshop.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{workshop.title}</h4>
                      <p className="text-sm text-muted-foreground">Instructor: {workshop.instructor}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {workshop.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {workshop.time}
                        </span>
                      </div>
                      <div className="flex items-center mt-2 space-x-2">
                        <Badge variant={workshop.status === "active" ? "default" : "secondary"} className="text-xs">
                          {workshop.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {workshop.registered}/{workshop.capacity} registered
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {Math.round((workshop.registered / workshop.capacity) * 100)}%
                      </div>
                      <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(workshop.registered / workshop.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild className="w-full">
                <Link href="/admin/workshops">Manage All Workshops</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current status of platform components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemHealth.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                  <Badge
                    className={
                      item.status === "healthy"
                        ? "bg-green-100 text-green-800"
                        : item.status === "warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Workshop Completion Rate</span>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">94.2%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Student Satisfaction</span>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">4.8/5</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Monthly Growth</span>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+23%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Global Reach</span>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">15 countries</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used admin functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
                <Link href="/admin/workshops">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xs">Workshops</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
                <Link href="/admin/users">
                  <Users className="h-5 w-5" />
                  <span className="text-xs">Users</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
                <Link href="/admin/messages">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-xs">Messages</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
                <Link href="/admin/analytics">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-xs">Analytics</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
                <Link href="/admin/content">
                  <FileText className="h-5 w-5" />
                  <span className="text-xs">Content</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
                <Link href="/admin/settings">
                  <Settings className="h-5 w-5" />
                  <span className="text-xs">Settings</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Registrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5 text-primary" />
            Recent Workshop Registrations
          </CardTitle>
          <CardDescription>Latest student enrollments in your cybersecurity programs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                student: "Ahmed Hassan",
                workshop: "Advanced Penetration Testing",
                date: "2 hours ago",
                amount: "$299",
              },
              {
                student: "Fatima Ali",
                workshop: "SOC Analyst Training",
                date: "4 hours ago",
                amount: "$399",
              },
              {
                student: "Mohamed Omar",
                workshop: "Cybersecurity Fundamentals",
                date: "6 hours ago",
                amount: "$199",
              },
              {
                student: "Amina Abdi",
                workshop: "Incident Response Masterclass",
                date: "8 hours ago",
                amount: "$399",
              },
            ].map((registration, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{registration.student}</p>
                    <p className="text-xs text-muted-foreground">{registration.workshop}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm text-green-600">{registration.amount}</p>
                  <p className="text-xs text-muted-foreground">{registration.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/admin/users">View All Students</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
