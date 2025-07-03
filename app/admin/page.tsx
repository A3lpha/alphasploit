"use client"

import { useState } from "react"
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
  ImageIcon,
  Palette,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeWorkshops: 8,
    pendingMessages: 12,
    monthlyRevenue: 15420,
    registrations: 89,
    completionRate: 94,
  })

  const recentActivities = [
    {
      id: 1,
      type: "registration",
      message: "New workshop registration for Advanced Penetration Testing",
      user: "Ahmed Hassan",
      time: "2 minutes ago",
      icon: Calendar,
      color: "text-custom-gold",
    },
    {
      id: 2,
      type: "message",
      message: "New contact form submission",
      user: "Fatima Ali",
      time: "15 minutes ago",
      icon: MessageSquare,
      color: "text-custom-purple",
    },
    {
      id: 3,
      type: "completion",
      message: "Workshop completed: SOC Analyst Training",
      user: "Mohamed Omar",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "text-custom-blue",
    },
    {
      id: 4,
      type: "alert",
      message: "Workshop capacity almost full",
      user: "System",
      time: "2 hours ago",
      icon: AlertCircle,
      color: "text-custom-lavender",
    },
  ]

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Advanced Penetration Testing Workshop",
      date: "December 15, 2024",
      registered: 15,
      capacity: 20,
      status: "active",
    },
    {
      id: 2,
      title: "Incident Response Masterclass",
      date: "January 20, 2025",
      registered: 8,
      capacity: 25,
      status: "active",
    },
    {
      id: 3,
      title: "Cybersecurity for Beginners",
      date: "February 10, 2025",
      registered: 0,
      capacity: 30,
      status: "draft",
    },
  ]

  const quickStats = [
    {
      name: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      change: "+12%",
      changeType: "increase",
      icon: Users,
      color: "from-custom-purple to-custom-blue",
    },
    {
      name: "Active Workshops",
      value: stats.activeWorkshops,
      change: "+2",
      changeType: "increase",
      icon: Calendar,
      color: "from-custom-gold to-custom-lavender",
    },
    {
      name: "Pending Messages",
      value: stats.pendingMessages,
      change: "-3",
      changeType: "decrease",
      icon: MessageSquare,
      color: "from-custom-blue to-custom-purple",
    },
    {
      name: "Monthly Revenue",
      value: `$${stats.monthlyRevenue.toLocaleString()}`,
      change: "+18%",
      changeType: "increase",
      icon: DollarSign,
      color: "from-custom-lavender to-custom-gold",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-custom-purple to-custom-gold bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Welcome back! Control your AlphaSploit platform from here.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-custom-teal border-custom-teal/20 bg-custom-teal/10">
            <div className="w-2 h-2 bg-custom-teal rounded-full mr-2 animate-pulse" />
            System Online
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card
            key={index}
            className="border-none shadow-custom hover:shadow-custom-lg transition-all duration-300 group"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.changeType === "increase" ? (
                      <ArrowUpRight className="h-4 w-4 text-custom-teal" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-custom-purple" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.changeType === "increase" ? "text-custom-teal" : "text-custom-purple"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${stat.color} shadow-custom group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="border-none shadow-custom">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-custom-purple" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest activities across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-custom-purple/5 transition-colors duration-200"
                >
                  <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-500">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white bg-transparent"
              >
                View All Activities
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Workshops */}
        <Card className="border-none shadow-custom">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Network className="mr-2 h-5 w-5 text-custom-gold" />
              Upcoming Workshops
            </CardTitle>
            <CardDescription>Manage your scheduled workshops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingWorkshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:shadow-custom transition-all duration-200"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{workshop.title}</h4>
                    <p className="text-sm text-gray-500">{workshop.date}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <Badge variant={workshop.status === "active" ? "default" : "secondary"} className="text-xs">
                        {workshop.status}
                      </Badge>
                      <span className="text-xs text-gray-500">
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
                        className="bg-gradient-to-r from-custom-purple to-custom-teal h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(workshop.registered / workshop.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild className="w-full bg-custom-teal hover:bg-custom-teal-dark text-white">
                <Link href="/admin/workshops">Manage Workshops</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-none shadow-custom">
          <CardHeader>
            <CardTitle>Registration Trends</CardTitle>
            <CardDescription>Monthly workshop registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-custom-purple to-custom-gold bg-clip-text text-transparent">
                {stats.registrations}
              </div>
              <p className="text-sm text-gray-600">This month</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <TrendingUp className="h-4 w-4 text-custom-teal" />
                <span className="text-sm text-custom-teal font-medium">+23% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-custom">
          <CardHeader>
            <CardTitle>Completion Rate</CardTitle>
            <CardDescription>Workshop completion percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-custom-gold to-custom-blue bg-clip-text text-transparent">
                {stats.completionRate}%
              </div>
              <p className="text-sm text-gray-600">Average completion</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-gray-600">Excellent performance</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-custom">
          <CardHeader>
            <CardTitle>Global Reach</CardTitle>
            <CardDescription>Countries with active users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-custom-blue to-custom-lavender bg-clip-text text-transparent">
                12
              </div>
              <p className="text-sm text-gray-600">Countries</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <Globe className="h-4 w-4 text-custom-purple" />
                <span className="text-sm text-gray-600">Growing internationally</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-none shadow-custom">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5 text-custom-teal" />
            Quick Actions
          </CardTitle>
          <CardDescription>Frequently used admin functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white bg-transparent"
            >
              <Link href="/admin/workshops">
                <Calendar className="h-6 w-6" />
                <span>Workshops</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-gold text-custom-gold hover:bg-custom-gold hover:text-white bg-transparent"
            >
              <Link href="/admin/users">
                <Users className="h-6 w-6" />
                <span>Users</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white bg-transparent"
            >
              <Link href="/admin/messages">
                <MessageSquare className="h-6 w-6" />
                <span>Messages</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-lavender text-custom-lavender hover:bg-custom-lavender hover:text-white bg-transparent"
            >
              <Link href="/admin/analytics">
                <TrendingUp className="h-6 w-6" />
                <span>Analytics</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-teal text-custom-teal hover:bg-custom-teal hover:text-white bg-transparent"
            >
              <Link href="/admin/content">
                <FileText className="h-6 w-6" />
                <span>Content</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white bg-transparent"
            >
              <Link href="/admin/media">
                <ImageIcon className="h-6 w-6" />
                <span>Media</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-gold text-custom-gold hover:bg-custom-gold hover:text-white bg-transparent"
            >
              <Link href="/admin/settings">
                <Settings className="h-6 w-6" />
                <span>Settings</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col space-y-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white bg-transparent"
            >
              <Palette className="h-6 w-6" />
              <span>Themes</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
