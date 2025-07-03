"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  const metrics = {
    totalRevenue: 45680,
    revenueGrowth: 18.2,
    totalRegistrations: 234,
    registrationGrowth: 12.5,
    completionRate: 94.2,
    completionGrowth: 3.1,
    averageRating: 4.8,
    ratingGrowth: 0.2,
  }

  const workshopPerformance = [
    {
      name: "Advanced Penetration Testing",
      registrations: 45,
      revenue: 13455,
      completion: 96,
      rating: 4.9,
      trend: "up",
    },
    {
      name: "SOC Analyst Training",
      registrations: 38,
      revenue: 11400,
      completion: 92,
      rating: 4.8,
      trend: "up",
    },
    {
      name: "Incident Response Masterclass",
      registrations: 32,
      revenue: 12768,
      completion: 94,
      rating: 4.7,
      trend: "stable",
    },
    {
      name: "Cybersecurity for Beginners",
      registrations: 67,
      revenue: 13333,
      completion: 89,
      rating: 4.6,
      trend: "down",
    },
    {
      name: "Red Team Tactics",
      registrations: 28,
      revenue: 13972,
      completion: 98,
      rating: 4.9,
      trend: "up",
    },
  ]

  const geographicData = [
    { country: "Somalia", users: 156, percentage: 45.2 },
    { country: "Kenya", users: 89, percentage: 25.8 },
    { country: "Ethiopia", users: 34, percentage: 9.9 },
    { country: "United States", users: 28, percentage: 8.1 },
    { country: "United Kingdom", users: 18, percentage: 5.2 },
    { country: "Others", users: 20, percentage: 5.8 },
  ]

  const languageStats = [
    { language: "English", users: 198, percentage: 57.4 },
    { language: "Somali", users: 147, percentage: 42.6 },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUpRight className="h-4 w-4 text-green-600" />
      case "down":
        return <ArrowDownRight className="h-4 w-4 text-red-600" />
      default:
        return <div className="h-4 w-4" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track performance and insights across your platform</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${metrics.totalRevenue.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+{metrics.revenueGrowth}%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Registrations</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.totalRegistrations}</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+{metrics.registrationGrowth}%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.completionRate}%</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+{metrics.completionGrowth}%</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.averageRating}</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+{metrics.ratingGrowth}</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Workshop Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Workshop Performance</CardTitle>
            <CardDescription>Performance metrics for each workshop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workshopPerformance.map((workshop, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-gray-900">{workshop.name}</h4>
                      {getTrendIcon(workshop.trend)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-600">
                      <div>Registrations: {workshop.registrations}</div>
                      <div>Revenue: ${workshop.revenue.toLocaleString()}</div>
                      <div>Completion: {workshop.completion}%</div>
                      <div>Rating: {workshop.rating}/5</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>User distribution by country</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{country.country}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-gray-600">{country.users} users</div>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${country.percentage}%` }} />
                    </div>
                    <div className="text-sm font-medium w-12 text-right">{country.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Language Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Language Preferences</CardTitle>
            <CardDescription>User language distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {languageStats.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${index === 0 ? "bg-blue-500" : "bg-green-500"}`} />
                    <span className="font-medium">{lang.language}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-gray-600">{lang.users} users</div>
                    <div className="text-sm font-medium">{lang.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth</CardTitle>
            <CardDescription>Key metrics growth trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">New Users</span>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+23%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Workshop Completions</span>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+15%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Revenue per User</span>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Customer Satisfaction</span>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Content */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Most popular workshops and content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Advanced Penetration Testing</div>
                  <div className="text-xs text-gray-500">96% completion rate</div>
                </div>
                <Badge className="bg-green-100 text-green-800">Top</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">SOC Analyst Training</div>
                  <div className="text-xs text-gray-500">4.8/5 rating</div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Cybersecurity Basics</div>
                  <div className="text-xs text-gray-500">Most registrations</div>
                </div>
                <Badge className="bg-purple-100 text-purple-800">Trending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
