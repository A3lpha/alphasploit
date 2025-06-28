"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Users, DollarSign, Grid, List, Search } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

// Extended workshop data with more dates
const allWorkshops = [
  // Main workshops with detail pages
  {
    id: "advanced-penetration-testing",
    title: "Advanced Penetration Testing Workshop",
    titleSo: "Tababarka Imtixaanka Dhaqdhaqaaqa ee Horumarsan",
    date: "2024-12-15",
    time: "9:00 AM - 1:00 PM EST",
    timeSo: "9:00 AM - 1:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$299",
    originalPrice: "$399",
    level: "Advanced",
    levelSo: "Horumarsan",
    spots: "15 spots left",
    spotsSo: "15 meel oo haray",
    status: "upcoming",
    hasDetailPage: true,
  },
  {
    id: "incident-response-masterclass",
    title: "Incident Response Masterclass",
    titleSo: "Fasalka Sare ee Jawaabta Dhacdada",
    date: "2025-01-20",
    time: "10:00 AM - 4:00 PM EST",
    timeSo: "10:00 AM - 4:00 PM EST",
    duration: "6 hours",
    durationSo: "6 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$399",
    originalPrice: "$499",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "Early Bird Available",
    spotsSo: "Shimbirka Hore Diyaar",
    status: "upcoming",
    hasDetailPage: true,
  },
  {
    id: "cybersecurity-beginners",
    title: "Cybersecurity for Beginners",
    titleSo: "Amniga Teknoolajiyada Bilaabayaasha",
    date: "2025-02-10",
    time: "2:00 PM - 5:00 PM EST",
    timeSo: "2:00 PM - 5:00 PM EST",
    duration: "3 hours",
    durationSo: "3 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$199",
    originalPrice: "$249",
    level: "Beginner",
    levelSo: "Bilow",
    spots: "Registration Opens Soon",
    spotsSo: "Diiwaan gelinta Dhawaan Furmaysa",
    status: "upcoming",
    hasDetailPage: true,
  },
  // Additional simple workshops with Somali translations
  {
    id: "web-security-deep-dive",
    title: "Web Security Deep Dive",
    titleSo: "Qoto Dheer Amniga Shabakada",
    date: "2024-12-28",
    time: "1:00 PM - 5:00 PM EST",
    timeSo: "1:00 PM - 5:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$279",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "12 spots left",
    spotsSo: "12 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/web-security-deep-dive",
  },
  {
    id: "network-security-fundamentals",
    title: "Network Security Fundamentals",
    titleSo: "Qoto Dheer Amniga Shabakada",
    date: "2025-01-08",
    time: "10:00 AM - 2:00 PM EST",
    timeSo: "10:00 AM - 2:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$249",
    level: "Beginner",
    levelSo: "Bilow",
    spots: "20 spots left",
    spotsSo: "20 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/network-security-fundamentals",
  },
  {
    id: "malware-analysis-workshop",
    title: "Malware Analysis Workshop",
    titleSo: "Qoto Dheer Xaaladda Malware",
    date: "2025-01-25",
    time: "9:00 AM - 3:00 PM EST",
    timeSo: "9:00 AM - 3:00 PM EST",
    duration: "6 hours",
    durationSo: "6 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$449",
    level: "Advanced",
    levelSo: "Horumarsan",
    spots: "8 spots left",
    spotsSo: "8 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/malware-analysis-workshop",
  },
  {
    id: "cloud-security-essentials",
    title: "Cloud Security Essentials",
    titleSo: "Qoto Dheer Amniga Cloud",
    date: "2025-02-15",
    time: "11:00 AM - 3:00 PM EST",
    timeSo: "11:00 AM - 3:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$299",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "15 spots left",
    spotsSo: "15 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/cloud-security-essentials",
  },
  {
    id: "digital-forensics-intro",
    title: "Digital Forensics Introduction",
    titleSo: "Qoto Dheer Forensics Dijital",
    date: "2025-02-28",
    time: "9:00 AM - 1:00 PM EST",
    timeSo: "9:00 AM - 1:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$329",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "10 spots left",
    spotsSo: "10 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/digital-forensics-intro",
  },
  {
    id: "red-team-tactics",
    title: "Red Team Tactics & Techniques",
    titleSo: "Tixraac iyo Tixgeliyadda Red Team",
    date: "2025-03-10",
    time: "10:00 AM - 4:00 PM EST",
    timeSo: "10:00 AM - 4:00 PM EST",
    duration: "6 hours",
    durationSo: "6 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$499",
    level: "Advanced",
    levelSo: "Horumarsan",
    spots: "6 spots left",
    spotsSo: "6 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/red-team-tactics",
  },
  {
    id: "social-engineering-defense",
    title: "Social Engineering Defense",
    titleSo: "Qoto Dheer Xaaladda Social Engineering",
    date: "2025-03-22",
    time: "2:00 PM - 6:00 PM EST",
    timeSo: "2:00 PM - 6:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$259",
    level: "Beginner",
    levelSo: "Bilow",
    spots: "25 spots left",
    spotsSo: "25 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/social-engineering-defense",
  },
  // New simple workshops with Somali translations
  {
    id: "password-security-workshop",
    title: "Password Security & Authentication",
    titleSo: "Qoto Dheer Amniga Password iyo Authentication",
    date: "2024-12-22",
    time: "3:00 PM - 5:00 PM EST",
    timeSo: "3:00 PM - 5:00 PM EST",
    duration: "2 hours",
    durationSo: "2 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$149",
    level: "Beginner",
    levelSo: "Bilow",
    spots: "30 spots left",
    spotsSo: "30 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/password-security-workshop",
  },
  {
    id: "phishing-awareness-training",
    title: "Phishing Awareness Training",
    titleSo: "Qoto Dheer Xaaladda Phishing",
    date: "2025-01-12",
    time: "1:00 PM - 3:00 PM EST",
    timeSo: "1:00 PM - 3:00 PM EST",
    duration: "2 hours",
    durationSo: "2 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$129",
    level: "Beginner",
    levelSo: "Bilow",
    spots: "40 spots left",
    spotsSo: "40 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/phishing-awareness-training",
  },
  {
    id: "secure-coding-practices",
    title: "Secure Coding Practices",
    titleSo: "Qoto Dheer Xaaladda Coding Xasuus",
    date: "2025-01-30",
    time: "10:00 AM - 2:00 PM EST",
    timeSo: "10:00 AM - 2:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$349",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "18 spots left",
    spotsSo: "18 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/secure-coding-practices",
  },
  {
    id: "mobile-security-basics",
    title: "Mobile Security Basics",
    titleSo: "Qoto Dheer Amniga Mobile",
    date: "2025-02-05",
    time: "2:00 PM - 4:00 PM EST",
    timeSo: "2:00 PM - 4:00 PM EST",
    duration: "2 hours",
    durationSo: "2 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$179",
    level: "Beginner",
    levelSo: "Bilow",
    spots: "25 spots left",
    spotsSo: "25 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/mobile-security-basics",
  },
  {
    id: "iot-security-workshop",
    title: "IoT Security Workshop",
    titleSo: "Qoto Dheer Amniga IoT",
    date: "2025-02-20",
    time: "9:00 AM - 1:00 PM EST",
    timeSo: "9:00 AM - 1:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$289",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "12 spots left",
    spotsSo: "12 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/iot-security-workshop",
  },
  {
    id: "blockchain-security-intro",
    title: "Blockchain Security Introduction",
    titleSo: "Qoto Dheer Amniga Blockchain",
    date: "2025-03-05",
    time: "11:00 AM - 3:00 PM EST",
    timeSo: "11:00 AM - 3:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$379",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "15 spots left",
    spotsSo: "15 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/blockchain-security-intro",
  },
  {
    id: "privacy-compliance-workshop",
    title: "Privacy & Compliance Workshop",
    titleSo: "Qoto Dheer Amniga Xirfadleh iyo Compliance",
    date: "2025-03-15",
    time: "1:00 PM - 5:00 PM EST",
    timeSo: "1:00 PM - 5:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$319",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "20 spots left",
    spotsSo: "20 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/privacy-compliance-workshop",
  },
  {
    id: "threat-intelligence-basics",
    title: "Threat Intelligence Basics",
    titleSo: "Qoto Dheer Xaaladda Threat Intelligence",
    date: "2025-03-28",
    time: "10:00 AM - 2:00 PM EST",
    timeSo: "10:00 AM - 2:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "Virtual Only",
    typeSo: "Virtual Kaliya",
    price: "$299",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "16 spots left",
    spotsSo: "16 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/threat-intelligence-basics",
  },
  {
    id: "advanced-threat-hunting",
    title: "Advanced Threat Hunting Workshop",
    titleSo: "Qoto Dheer Xaaladda Threat Hunting Dhaqdhaqaaqa",
    date: "2025-06-26",
    time: "9:00 AM - 1:00 PM EST",
    timeSo: "9:00 AM - 1:00 PM EST",
    duration: "4 hours",
    durationSo: "4 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$399",
    originalPrice: "$499",
    level: "Advanced",
    levelSo: "Horumarsan",
    spots: "10 spots left",
    spotsSo: "10 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/advanced-threat-hunting",
  },
  {
    id: "cybersecurity-leadership",
    title: "Cybersecurity Leadership & Management",
    titleSo: "Qoto Dheer Xaaladda Amniga Teknoolajiyada iyo Xirfadaha",
    date: "2025-07-05",
    time: "10:00 AM - 3:00 PM EST",
    timeSo: "10:00 AM - 3:00 PM EST",
    duration: "5 hours",
    durationSo: "5 saacadood",
    type: "In-Person & Virtual",
    typeSo: "Shakhsi ahaan & Virtual",
    price: "$449",
    level: "Intermediate",
    levelSo: "Dhexdhexaad",
    spots: "15 spots left",
    spotsSo: "15 meel oo haray",
    status: "upcoming",
    hasDetailPage: false,
    registrationUrl: "https://forms.google.com/cybersecurity-leadership",
  },
]

export default function WorkshopsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const { t, language } = useLanguage()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getWorkshopsForDate = (date: string) => {
    return allWorkshops.filter((workshop) => workshop.date === date)
  }

  const filteredWorkshops = allWorkshops.filter((workshop) => {
    const title = language === "so" ? workshop.titleSo || workshop.title : workshop.title
    const level = language === "so" ? workshop.levelSo || workshop.level : workshop.level
    const type = language === "so" ? workshop.typeSo || workshop.type : workshop.type

    const matchesLevel = selectedLevel === "all" || level.toLowerCase() === selectedLevel
    const matchesType = selectedType === "all" || type.toLowerCase().includes(selectedType.toLowerCase())
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesLevel && matchesType && matchesSearch
  })

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "so" ? "so-SO" : "en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getLevelColor = (level: string) => {
    const normalizedLevel = level.toLowerCase()
    if (normalizedLevel.includes("beginner") || normalizedLevel.includes("bilow")) {
      return "bg-green-100 text-green-700 border-green-200"
    } else if (normalizedLevel.includes("intermediate") || normalizedLevel.includes("dhexdhexaad")) {
      return "bg-blue-100 text-blue-700 border-blue-200"
    } else if (normalizedLevel.includes("advanced") || normalizedLevel.includes("horumarsan")) {
      return "bg-red-100 text-red-700 border-red-200"
    }
    return "bg-gray-100 text-gray-700 border-gray-200"
  }

  const handleWorkshopClick = (workshop: any) => {
    if (workshop.hasDetailPage) {
      // Navigate to detail page
      window.location.href = `/workshop/${workshop.id}`
    } else {
      // Open registration form in new tab
      window.open(workshop.registrationUrl, "_blank")
    }
  }

  const renderCalendarView = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 bg-gray-50 border border-gray-200"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const workshopsForDay = getWorkshopsForDate(dateString).filter((workshop) => {
        const level = language === "so" ? workshop.levelSo || workshop.level : workshop.level
        const type = language === "so" ? workshop.typeSo || workshop.type : workshop.type
        const matchesLevel = selectedLevel === "all" || level.toLowerCase() === selectedLevel
        const matchesType = selectedType === "all" || type.toLowerCase().includes(selectedType.toLowerCase())
        return matchesLevel && matchesType
      })

      days.push(
        <div key={day} className="h-32 bg-white border border-gray-200 p-2 overflow-hidden hover:bg-gray-50">
          <div className="font-semibold text-sm text-gray-700 mb-1">{day}</div>
          <div className="space-y-1">
            {workshopsForDay.map((workshop, index) => {
              const title = language === "so" ? workshop.titleSo || workshop.title : workshop.title
              const level = language === "so" ? workshop.levelSo || workshop.level : workshop.level
              const time = language === "so" ? workshop.timeSo || workshop.time : workshop.time

              return (
                <div
                  key={index}
                  onClick={() => handleWorkshopClick(workshop)}
                  className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 transition-opacity ${getLevelColor(level)}`}
                >
                  <div className="font-medium truncate">{title}</div>
                  <div className="text-xs opacity-75">{time.split(" - ")[0]}</div>
                </div>
              )
            })}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/cybersecurity-hero.jpg" alt="Workshops Calendar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
              <Calendar className="mr-2 h-4 w-4" />
              {t("workshops.calendar")}
            </Badge>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">{t("workshops.page.title")}</h1>
            <p className="font-roboto text-xl text-white/90 max-w-3xl mx-auto">{t("workshops.page.description")}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("workshops.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">{t("workshops.levels.all")}</option>
                <option value="beginner">{t("workshops.levels.beginner")}</option>
                <option value="intermediate">{t("workshops.levels.intermediate")}</option>
                <option value="advanced">{t("workshops.levels.advanced")}</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">{t("workshops.types.all")}</option>
                <option value="virtual">{t("workshops.types.virtual")}</option>
                <option value="in-person">{t("workshops.types.inPerson")}</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "calendar" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("calendar")}
                className="flex items-center space-x-2"
              >
                <Grid className="h-4 w-4" />
                <span>{t("common.calendar")}</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span>{t("common.list")}</span>
              </Button>
            </div>
          </div>
        </div>

        {viewMode === "calendar" ? (
          <>
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-poppins font-bold text-2xl text-text">
                {currentDate.toLocaleDateString(language === "so" ? "so-SO" : "en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
                  {t("common.today")}
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <Card className="mb-8">
              <CardContent className="p-0">
                {/* Days of week header */}
                <div className="grid grid-cols-7 bg-gray-50">
                  {(language === "so"
                    ? ["Axd", "Isn", "Tal", "Arb", "Kha", "Jim", "Sab"]
                    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                  ).map((day) => (
                    <div key={day} className="p-4 text-center font-semibold text-gray-700 border-b border-gray-200">
                      {day}
                    </div>
                  ))}
                </div>
                {/* Calendar days */}
                <div className="grid grid-cols-7">{renderCalendarView()}</div>
              </CardContent>
            </Card>
          </>
        ) : (
          /* List View */
          <div className="space-y-6">
            <h2 className="font-poppins font-bold text-2xl text-text mb-6">
              {t("workshops.list")} ({filteredWorkshops.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => {
                const title = language === "so" ? workshop.titleSo || workshop.title : workshop.title
                const level = language === "so" ? workshop.levelSo || workshop.level : workshop.level
                const type = language === "so" ? workshop.typeSo || workshop.type : workshop.type
                const duration = language === "so" ? workshop.durationSo || workshop.duration : workshop.duration
                const time = language === "so" ? workshop.timeSo || workshop.time : workshop.time
                const spots = language === "so" ? workshop.spotsSo || workshop.spots : workshop.spots

                return (
                  <Card key={workshop.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getLevelColor(level)}>{level}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      </div>
                      <CardTitle className="font-poppins font-bold text-lg text-text line-clamp-2">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-text/70">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {formatDate(workshop.date)}
                        </div>
                        <div className="flex items-center text-sm text-text/70">
                          <Clock className="h-4 w-4 mr-2 text-accent" />
                          {time}
                        </div>
                        <div className="flex items-center text-sm text-text/70">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {duration}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-text/70">
                            <DollarSign className="h-4 w-4 mr-1 text-accent" />
                            <span className="font-semibold text-primary">{workshop.price}</span>
                            {workshop.originalPrice && (
                              <span className="ml-2 line-through text-text/50">{workshop.originalPrice}</span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-accent">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="font-medium">{spots}</span>
                          </div>
                        </div>
                      </div>
                      {workshop.hasDetailPage ? (
                        <Button asChild className="w-full bg-primary hover:bg-primary/90">
                          <Link href={`/workshop/${workshop.id}`}>{t("youtube.viewDetails")}</Link>
                        </Button>
                      ) : (
                        <Button
                          onClick={() => window.open(workshop.registrationUrl, "_blank")}
                          className="w-full bg-accent hover:bg-accent/90"
                        >
                          {t("youtube.registerNow")}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Legend */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-poppins font-bold text-lg text-text">{t("workshops.legend.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                <span className="text-sm text-text/70">{t("workshops.legend.beginner")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                <span className="text-sm text-text/70">{t("workshops.legend.intermediate")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                <span className="text-sm text-text/70">{t("workshops.legend.advanced")}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="font-poppins font-bold text-2xl text-text mb-4">{t("workshops.cta.title")}</h3>
          <p className="font-roboto text-text/80 mb-6 max-w-2xl mx-auto">{t("workshops.cta.description")}</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">{t("workshops.cta.button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
