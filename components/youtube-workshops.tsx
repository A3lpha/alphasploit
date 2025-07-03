"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Play,
  Users,
  Calendar,
  ExternalLink,
  Youtube,
  X,
  MessageSquare,
  Clock,
  CheckCircle,
  Rocket,
  Eye,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function YouTubeWorkshops() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [videoViews, setVideoViews] = useState<{ [key: string]: number }>({
    dQw4w9WgXcQ: 15000,
    dQw4w9WgXcR: 8200,
    dQw4w9WgXcS: 12000,
  })
  const { t, language } = useLanguage()

  const recentVideos = [
    {
      title:
        language === "so" ? "Aasaasaha Hacking Anshaxa leh: Bilowga" : "Ethical Hacking Fundamentals: Getting Started",
      views: videoViews["dQw4w9WgXcQ"] || 15000,
      duration: "45 min",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description:
        language === "so"
          ? "Hagaha dhamaystiran ee bilaabayaasha ee mabaadi'da iyo habdhaqameedyada hacking anshaxa leh."
          : "Complete beginner's guide to ethical hacking principles and methodologies.",
      videoId: "dQw4w9WgXcQ",
      videoUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: language === "so" ? "Qalabka Falanqeeyaha SOC: Habaynta SIEM" : "SOC Analyst Tools: SIEM Configuration",
      views: videoViews["fEKWkAbxrdo"] || 8200,
      duration: "32 min",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description:
        language === "so"
          ? "Cashar gacanta ku haya oo ku saabsan habaynta iyo isticmaalka qalabka SIEM si wax ku ool ah."
          : "Hands-on tutorial for configuring and using SIEM tools effectively.",
      videoId: "fEKWkAbxrdo",
      videoUrl: "https://youtu.be/fEKWkAbxrdo?si=_gWjs5zcuYN1vv5q",
    },
    {
      title:
        language === "so"
          ? "Kooxda Cas vs Kooxda Buluug: Fahamka Farqiga"
          : "Red Team vs Blue Team: Understanding the Difference",
      views: videoViews["dQw4w9WgXcS"] || 12000,
      duration: "28 min",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description:
        language === "so"
          ? "Qoto dheer ku gal habdhaqameedyada amniga teknoolajiyada ee weerarka iyo difaaca."
          : "Deep dive into offensive and defensive cybersecurity approaches.",
      videoId: "MShbP3OpASA",
      videoUrl: "https://youtu.be/MShbP3OpASA?si=T-eC0ewaQaSy-tY8",
    },
  ]

  const upcomingWorkshops = [
    {
      id: "advanced-penetration-testing",
      title:
        language === "so" ? "Tababarka Imtixaanka Dhaqdhaqaaqa ee Horumarsan" : "Advanced Penetration Testing Workshop",
      date: language === "so" ? "Diseembar 15, 2024" : "December 15, 2024",
      duration: language === "so" ? "4 saacadood" : "4 hours",
      type: language === "so" ? "Shakhsi ahaan & Virtual" : "In-Person & Virtual",
      spots: language === "so" ? "15 meel oo haray" : "15 spots left",
      price: "$299",
      status: "upcoming",
    },
    {
      id: "incident-response-masterclass",
      title: language === "so" ? "Fasalka Sare ee Jawaabta Dhacdada" : "Incident Response Masterclass",
      date: language === "so" ? "Janaayo 20, 2025" : "January 20, 2025",
      duration: language === "so" ? "6 saacadood" : "6 hours",
      type: language === "so" ? "Virtual Kaliya" : "Virtual Only",
      spots: language === "so" ? "Shimbirka Hore Diyaar" : "Early Bird Available",
      price: "$399",
      status: "upcoming",
    },
    {
      id: "cybersecurity-beginners",
      title: language === "so" ? "Amniga Teknoolajiyada Bilaabayaasha" : "Cybersecurity for Beginners",
      date: language === "so" ? "Febraayo 10, 2025" : "February 10, 2025",
      duration: language === "so" ? "3 saacadood" : "3 hours",
      type: language === "so" ? "Shakhsi ahaan & Virtual" : "In-Person & Virtual",
      spots: language === "so" ? "Diiwaan gelinta Dhawaan Furmaysa" : "Registration Opens Soon",
      price: "$199",
      status: "upcoming",
    },
  ]

  const closedWorkshops = [
    {
      id: "web-security-fundamentals",
      title: language === "so" ? "Aasaasaha Amniga Shabakada" : "Web Security Fundamentals",
      date: language === "so" ? "Nofembar 15, 2024" : "November 15, 2024",
      duration: language === "so" ? "5 saacadood" : "5 hours",
      type: language === "so" ? "Shakhsi ahaan & Virtual" : "In-Person & Virtual",
      participants: language === "so" ? "25 ka qayb qaate" : "25 participants",
      price: "$249",
      status: "completed",
      rating: 4.9,
    },
    {
      id: "network-security-basics",
      title: language === "so" ? "Aasaasaha Amniga Shabakada" : "Network Security Basics",
      date: language === "so" ? "Oktoobar 20, 2024" : "October 20, 2024",
      duration: language === "so" ? "4 saacadood" : "4 hours",
      type: language === "so" ? "Virtual Kaliya" : "Virtual Only",
      participants: language === "so" ? "30 ka qayb qaate" : "30 participants",
      price: "$199",
      status: "completed",
      rating: 4.8,
    },
    {
      id: "malware-analysis-intro",
      title: language === "so" ? "Hordhaca Falanqaynta Malware" : "Malware Analysis Introduction",
      date: language === "so" ? "Sebtembar 25, 2024" : "September 25, 2024",
      duration: language === "so" ? "6 saacadood" : "6 hours",
      type: language === "so" ? "Shakhsi ahaan & Virtual" : "In-Person & Virtual",
      participants: language === "so" ? "20 ka qayb qaate" : "20 participants",
      price: "$349",
      status: "completed",
      rating: 4.9,
    },
  ]

  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId)
    // Increment view count
    setVideoViews((prev) => ({
      ...prev,
      [videoId]: (prev[videoId] || 0) + 1,
    }))
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M ${t("common.views")}`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K ${t("common.views")}`
    }
    return `${views} ${t("common.views")}`
  }

  // Auto-increment views periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoViews((prev) => {
        const updated = { ...prev }
        Object.keys(updated).forEach((key) => {
          updated[key] += Math.floor(Math.random() * 3) + 1
        })
        return updated
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* YouTube Content Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-100 text-red-700 border-red-200 shadow-cyber">
              <Youtube className="mr-2 h-4 w-4" />
              {t("youtube.badge")}
            </Badge>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-text mb-6">{t("youtube.title")}</h2>
            <p className="font-roboto text-xl text-text/80 max-w-3xl mx-auto mb-8">{t("youtube.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 shadow-cyber"
              >
                <a href="https://youtube.com/@alphasploit" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" />
                  {t("youtube.visitChannel")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 shadow-cyber"
              >
                <a href="https://discord.gg/alphasploit" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {t("youtube.joinDiscord")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentVideos.map((video, index) => (
              <Card
                key={index}
                className="group hover:shadow-cyber-lg transition-all duration-300 overflow-hidden border-none bg-gradient-to-br from-white to-primary/5"
              >
                <div className="relative cursor-pointer" onClick={() => openVideoModal(video.videoId)}>
                  <div className="relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = video.thumbnail || "/placeholder.svg"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-cyber animate-pulse-glow">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-2 py-1 rounded flex items-center shadow-cyber">
                    <Youtube className="h-3 w-3 mr-1" />
                    YouTube
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-lg text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="font-roboto text-sm text-text/70 mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-text/60">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {formatViews(video.views)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => openVideoModal(video.videoId)}
                    >
                      {t("youtube.watchNow")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Workshops Section */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-cyber">
              <Users className="mr-2 h-4 w-4" />
              {t("youtube.workshops.badge")}
            </Badge>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-text mb-6">
              {t("youtube.workshops.title")}
            </h2>
            <p className="font-roboto text-xl text-text/80 max-w-3xl mx-auto">{t("youtube.workshops.description")}</p>
          </div>

          {/* Upcoming Workshops */}
          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl text-text mb-8 text-center flex items-center justify-center">
              <Rocket className="mr-2 h-6 w-6 text-primary" />
              {t("youtube.upcoming")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingWorkshops.map((workshop, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-cyber-lg transition-all duration-300 cursor-pointer group border-none"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">{workshop.type}</Badge>
                      <Calendar className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <CardTitle className="font-poppins font-bold text-xl text-text group-hover:text-primary transition-colors duration-300">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.date")}:</span>
                        <span className="font-roboto text-sm font-medium text-text">{workshop.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.duration")}:</span>
                        <span className="font-roboto text-sm font-medium text-text">{workshop.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.price")}:</span>
                        <span className="font-roboto text-sm font-medium text-primary">{workshop.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.availability")}:</span>
                        <span className="font-roboto text-sm font-medium text-accent">{workshop.spots}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-full shadow-cyber"
                    >
                      <Link href={`/workshop/${workshop.id}`}>{t("youtube.viewDetails")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Workshops */}
          <div className="mb-12">
            <h3 className="font-poppins font-bold text-2xl text-text mb-8 text-center flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-cyber-green" />
              {t("youtube.completed")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {closedWorkshops.map((workshop, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {language === "so" ? "La Dhammeeyay" : "Completed"}
                      </Badge>
                      <Clock className="h-5 w-5 text-gray-500" />
                    </div>
                    <CardTitle className="font-poppins font-bold text-xl text-text">{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.date")}:</span>
                        <span className="font-roboto text-sm font-medium text-text">{workshop.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.duration")}:</span>
                        <span className="font-roboto text-sm font-medium text-text">{workshop.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.participants")}:</span>
                        <span className="font-roboto text-sm font-medium text-text">{workshop.participants}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-roboto text-sm text-text/70">{t("common.rating")}:</span>
                        <div className="flex items-center space-x-1">
                          <span className="font-roboto text-sm font-medium text-text">{workshop.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(workshop.rating) ? "text-yellow-400" : "text-gray-300"
                                }`}
                              >
                                ⭐
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button disabled className="w-full bg-gray-300 text-gray-600 rounded-full cursor-not-allowed">
                      {t("youtube.workshopCompleted")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center glass rounded-2xl p-8 shadow-cyber">
            <p className="font-roboto text-text/70 mb-6">{t("youtube.customWorkshops")}</p>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white shadow-cyber bg-transparent"
            >
              <Link href="/contact">{t("youtube.contactCustom")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl glass rounded-lg overflow-hidden shadow-cyber-lg">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
