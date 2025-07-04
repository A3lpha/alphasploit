"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Calendar,
  Award,
  Clock,
  Users,
  Star,
  Download,
  Play,
  CheckCircle,
  TrendingUp,
  Target,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("student_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const enrolledWorkshops = [
    {
      id: 1,
      title: "Advanced Penetration Testing Workshop",
      instructor: "Alex Thompson",
      progress: 75,
      status: "in_progress",
      nextSession: "2024-12-15 09:00",
      totalSessions: 8,
      completedSessions: 6,
      certificate: false,
    },
    {
      id: 2,
      title: "SOC Analyst Training Program",
      instructor: "Sarah Mitchell",
      progress: 100,
      status: "completed",
      completedDate: "2024-01-10",
      totalSessions: 12,
      completedSessions: 12,
      certificate: true,
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      instructor: "Marcus Chen",
      progress: 45,
      status: "in_progress",
      nextSession: "2024-12-18 14:00",
      totalSessions: 6,
      completedSessions: 3,
      certificate: false,
    },
  ]

  const upcomingWorkshops = [
    {
      id: 4,
      title: "Incident Response Masterclass",
      instructor: "Sarah Mitchell",
      startDate: "2025-01-20",
      duration: "6 hours",
      price: "$399",
      enrolled: false,
    },
    {
      id: 5,
      title: "Red Team Operations",
      instructor: "Alex Thompson",
      startDate: "2025-02-15",
      duration: "8 hours",
      price: "$499",
      enrolled: false,
    },
  ]

  const achievements = [
    {
      title: "First Workshop Completed",
      description: "Completed your first cybersecurity workshop",
      icon: Award,
      earned: true,
      date: "2024-01-10",
    },
    {
      title: "Penetration Testing Expert",
      description: "Mastered advanced penetration testing techniques",
      icon: Target,
      earned: false,
      progress: 75,
    },
    {
      title: "Community Contributor",
      description: "Helped 10 fellow students in the community forum",
      icon: Users,
      earned: false,
      progress: 60,
    },
    {
      title: "Perfect Attendance",
      description: "Attended all sessions in a workshop",
      icon: Calendar,
      earned: true,
      date: "2024-01-10",
    },
  ]

  const stats = [
    { label: "Workshops Completed", value: "1", icon: BookOpen, color: "text-green-600" },
    { label: "Hours Learned", value: "24", icon: Clock, color: "text-blue-600" },
    { label: "Certificates Earned", value: "1", icon: Award, color: "text-purple-600" },
    { label: "Current Streak", value: "7 days", icon: TrendingUp, color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name || "Student"}! 👋</h1>
              <p className="text-gray-600">Continue your cybersecurity learning journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                <Globe className="h-3 w-3 mr-1" />
                Student
              </Badge>
              <Button variant="outline" asChild>
                <Link href="/">Back to Website</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Workshops */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  My Workshops
                </CardTitle>
                <CardDescription>Track your progress in enrolled workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledWorkshops.map((workshop) => (
                    <div key={workshop.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{workshop.title}</h3>
                          <p className="text-sm text-gray-600">Instructor: {workshop.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>
                              {workshop.completedSessions}/{workshop.totalSessions} sessions
                            </span>
                            {workshop.status === "in_progress" && (
                              <span>Next: {new Date(workshop.nextSession).toLocaleDateString()}</span>
                            )}
                            {workshop.status === "completed" && (
                              <span>Completed: {new Date(workshop.completedDate!).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            className={
                              workshop.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }
                          >
                            {workshop.status === "completed" ? "Completed" : "In Progress"}
                          </Badge>
                          {workshop.certificate && (
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Certificate
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{workshop.progress}%</span>
                        </div>
                        <Progress value={workshop.progress} className="h-2" />
                      </div>
                      {workshop.status === "in_progress" && (
                        <div className="mt-4 flex space-x-2">
                          <Button size="sm">
                            <Play className="h-4 w-4 mr-1" />
                            Continue Learning
                          </Button>
                          <Button size="sm" variant="outline">
                            View Materials
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Workshops */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Workshops
                </CardTitle>
                <CardDescription>Discover new workshops to enhance your skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingWorkshops.map((workshop) => (
                    <div key={workshop.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{workshop.title}</h3>
                          <p className="text-sm text-gray-600">Instructor: {workshop.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>Starts: {new Date(workshop.startDate).toLocaleDateString()}</span>
                            <span>Duration: {workshop.duration}</span>
                            <span className="font-medium text-green-600">{workshop.price}</span>
                          </div>
                        </div>
                        <Button>Enroll Now</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/workshops">View All Workshops</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${achievement.earned ? "bg-green-100" : "bg-gray-100"}`}>
                        <achievement.icon
                          className={`h-4 w-4 ${achievement.earned ? "text-green-600" : "text-gray-400"}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                        {achievement.earned ? (
                          <p className="text-xs text-green-600 mt-1">
                            <CheckCircle className="h-3 w-3 inline mr-1" />
                            Earned {achievement.date}
                          </p>
                        ) : (
                          achievement.progress && (
                            <div className="mt-2">
                              <Progress value={achievement.progress} className="h-1" />
                              <p className="text-xs text-gray-500 mt-1">{achievement.progress}% complete</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/workshops">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Workshops
                  </Link>
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Community Forum
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Materials
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  Rate Workshop
                </Button>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Learning Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                  <p className="text-sm text-gray-600">Days in a row</p>
                  <p className="text-xs text-gray-500 mt-2">Keep it up! You're doing great.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
