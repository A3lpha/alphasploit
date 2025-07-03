"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Users, Calendar, DollarSign, Eye } from "lucide-react"
import Link from "next/link"

export default function WorkshopsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const workshops = [
    {
      id: 1,
      title: "Advanced Penetration Testing Workshop",
      titleSo: "Tababarka Imtixaanka Dhaqdhaqaaqa ee Horumarsan",
      date: "2024-12-15",
      time: "9:00 AM - 1:00 PM EST",
      duration: "4 hours",
      type: "In-Person & Virtual",
      price: 299,
      registered: 15,
      capacity: 20,
      status: "active",
      level: "Advanced",
      instructor: "Alex Thompson",
    },
    {
      id: 2,
      title: "Incident Response Masterclass",
      titleSo: "Fasalka Sare ee Jawaabta Dhacdada",
      date: "2025-01-20",
      time: "10:00 AM - 4:00 PM EST",
      duration: "6 hours",
      type: "Virtual Only",
      price: 399,
      registered: 8,
      capacity: 25,
      status: "active",
      level: "Intermediate",
      instructor: "Sarah Mitchell",
    },
    {
      id: 3,
      title: "Cybersecurity for Beginners",
      titleSo: "Amniga Teknoolajiyada Bilaabayaasha",
      date: "2025-02-10",
      time: "2:00 PM - 5:00 PM EST",
      duration: "3 hours",
      type: "In-Person & Virtual",
      price: 199,
      registered: 0,
      capacity: 30,
      status: "draft",
      level: "Beginner",
      instructor: "Marcus Chen",
    },
    {
      id: 4,
      title: "Web Security Deep Dive",
      titleSo: "Qoto Dheer Amniga Shabakada",
      date: "2024-12-28",
      time: "1:00 PM - 5:00 PM EST",
      duration: "4 hours",
      type: "Virtual Only",
      price: 279,
      registered: 12,
      capacity: 15,
      status: "active",
      level: "Intermediate",
      instructor: "Ahmed Hassan",
    },
    {
      id: 5,
      title: "Network Security Fundamentals",
      titleSo: "Aasaasaha Amniga Shabakada",
      date: "2024-11-15",
      time: "10:00 AM - 2:00 PM EST",
      duration: "4 hours",
      type: "In-Person & Virtual",
      price: 249,
      registered: 25,
      capacity: 25,
      status: "completed",
      level: "Beginner",
      instructor: "Fatima Ali",
    },
  ]

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.titleSo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || workshop.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-700"
      case "intermediate":
        return "bg-blue-100 text-blue-700"
      case "advanced":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workshops Management</h1>
          <p className="text-gray-600">Manage all your cybersecurity training workshops</p>
        </div>
        <Button asChild>
          <Link href="/admin/workshops/new">
            <Plus className="h-4 w-4 mr-2" />
            Create Workshop
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Workshops</p>
                <p className="text-2xl font-bold text-gray-900">{workshops.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Workshops</p>
                <p className="text-2xl font-bold text-gray-900">
                  {workshops.filter((w) => w.status === "active").length}
                </p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                <p className="text-2xl font-bold text-gray-900">
                  {workshops.reduce((sum, w) => sum + w.registered, 0)}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${workshops.reduce((sum, w) => sum + w.registered * w.price, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>All Workshops</CardTitle>
          <CardDescription>Manage and monitor your workshop portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search workshops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter: {filterStatus === "all" ? "All" : filterStatus}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterStatus("all")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("active")}>Active</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("draft")}>Draft</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("completed")}>Completed</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("cancelled")}>Cancelled</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Workshop</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Registrations</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[70px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkshops.map((workshop) => (
                  <TableRow key={workshop.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{workshop.title}</div>
                        <div className="text-sm text-gray-500">{workshop.titleSo}</div>
                        <div className="text-sm text-gray-500">by {workshop.instructor}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{workshop.date}</div>
                        <div className="text-sm text-gray-500">{workshop.time}</div>
                        <div className="text-sm text-gray-500">{workshop.duration}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{workshop.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getLevelColor(workshop.level)}>{workshop.level}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">
                          {workshop.registered}/{workshop.capacity}
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(workshop.registered / workshop.capacity) * 100}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">${(workshop.registered * workshop.price).toLocaleString()}</div>
                      <div className="text-sm text-gray-500">${workshop.price} each</div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(workshop.status)}>{workshop.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Workshop
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" />
                            View Registrations
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Workshop
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
