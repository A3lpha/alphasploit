"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Users,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
} from "lucide-react"

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")

  const users = [
    {
      id: 1,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@email.com",
      phone: "+252 61 123 4567",
      location: "Mogadishu, Somalia",
      role: "student",
      status: "active",
      joinDate: "2024-01-15",
      workshopsAttended: 3,
      completionRate: 95,
      avatar: "/images/armored-wolf-warrior.jpg",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Fatima Ali",
      email: "fatima.ali@email.com",
      phone: "+252 61 234 5678",
      location: "Hargeisa, Somalia",
      role: "student",
      status: "active",
      joinDate: "2024-02-20",
      workshopsAttended: 2,
      completionRate: 88,
      avatar: "/images/armored-wolf-warrior.jpg",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Mohamed Omar",
      email: "mohamed.omar@email.com",
      phone: "+252 61 345 6789",
      location: "Kismayo, Somalia",
      role: "instructor",
      status: "active",
      joinDate: "2023-08-10",
      workshopsAttended: 0,
      completionRate: 0,
      avatar: "/images/armored-wolf-warrior.jpg",
      lastActive: "30 minutes ago",
    },
    {
      id: 4,
      name: "Amina Abdi",
      email: "amina.abdi@email.com",
      phone: "+252 61 456 7890",
      location: "Bosaso, Somalia",
      role: "student",
      status: "inactive",
      joinDate: "2024-03-05",
      workshopsAttended: 1,
      completionRate: 100,
      avatar: "/images/armored-wolf-warrior.jpg",
      lastActive: "1 week ago",
    },
    {
      id: 5,
      name: "Abdi Rahman",
      email: "abdi.rahman@email.com",
      phone: "+252 61 567 8901",
      location: "Galkayo, Somalia",
      role: "admin",
      status: "active",
      joinDate: "2023-05-12",
      workshopsAttended: 0,
      completionRate: 0,
      avatar: "/images/armored-wolf-warrior.jpg",
      lastActive: "Online now",
    },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterRole === "all" || user.role === filterRole
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800"
      case "instructor":
        return "bg-blue-100 text-blue-800"
      case "student":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalUsers = users.length
  const activeUsers = users.filter((u) => u.status === "active").length
  const totalStudents = users.filter((u) => u.role === "student").length
  const totalInstructors = users.filter((u) => u.role === "instructor").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600">Manage all platform users and their activities</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{activeUsers}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Students</p>
                <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
              </div>
              <Award className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Instructors</p>
                <p className="text-2xl font-bold text-gray-900">{totalInstructors}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage user accounts and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Role: {filterRole === "all" ? "All" : filterRole}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterRole("all")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterRole("student")}>Students</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterRole("instructor")}>Instructors</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterRole("admin")}>Admins</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead className="w-[70px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {user.location}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-3 w-3 mr-1 text-gray-400" />
                          {user.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone className="h-3 w-3 mr-1 text-gray-400" />
                          {user.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm font-medium">Joined {user.joinDate}</div>
                        <div className="text-sm text-gray-500">Last active: {user.lastActive}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {user.role === "student" ? (
                        <div>
                          <div className="text-sm font-medium">{user.workshopsAttended} workshops</div>
                          <div className="text-sm text-gray-500">{user.completionRate}% completion</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">N/A</div>
                      )}
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
                            <Edit className="h-4 w-4 mr-2" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            View Activity
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete User
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
