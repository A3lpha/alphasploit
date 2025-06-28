"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  CheckCircle,
  Star,
  ExternalLink,
  ArrowLeft,
  Shield,
  Target,
  BookOpen,
  Share2,
  MessageCircle,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react"
import Link from "next/link"

// Workshop data - in a real app, this would come from a database
const workshops = {
  "advanced-penetration-testing": {
    id: "advanced-penetration-testing",
    title: "Advanced Penetration Testing Workshop",
    subtitle: "Master Advanced Ethical Hacking Techniques",
    heroImage: "/images/hacker-setup.jpg", // Dark hacker setup image
    date: "December 15, 2024",
    time: "9:00 AM - 1:00 PM EST",
    duration: "4 hours",
    type: "In-Person & Virtual",
    price: "$299",
    originalPrice: "$399",
    spots: "15 spots left",
    location: "AlphaSploit Training Center, Tech City",
    virtualLink: "Zoom link will be provided",
    level: "Advanced",
    prerequisites: "Basic penetration testing knowledge required",
    description:
      "Take your ethical hacking skills to the next level with our advanced penetration testing workshop. Learn sophisticated attack techniques, advanced exploitation methods, and professional reporting standards used by industry experts.",
    whatYouWillLearn: [
      "Advanced web application penetration testing",
      "Network pivoting and lateral movement techniques",
      "Advanced exploitation frameworks and tools",
      "Professional penetration testing methodologies",
      "Advanced reporting and documentation",
      "Real-world attack scenarios and case studies",
      "Advanced privilege escalation techniques",
      "Post-exploitation techniques and persistence",
    ],
    includes: [
      "4 hours of intensive hands-on training",
      "Access to exclusive lab environment",
      "Workshop materials and resources",
      "Certificate of completion",
      "30-day access to recorded session",
      "Follow-up Q&A session",
      "Networking with industry professionals",
      "Exclusive AlphaSploit workshop swag",
    ],
    agenda: [
      { time: "9:00 - 9:30 AM", topic: "Welcome & Advanced Reconnaissance" },
      { time: "9:30 - 10:30 AM", topic: "Advanced Web Application Testing" },
      { time: "10:30 - 10:45 AM", topic: "Break" },
      { time: "10:45 - 11:45 AM", topic: "Network Pivoting & Lateral Movement" },
      { time: "11:45 AM - 12:45 PM", topic: "Advanced Exploitation Techniques" },
      { time: "12:45 - 1:00 PM", topic: "Q&A & Wrap-up" },
    ],
    presenter: {
      name: "Adnan jafar",
      title: "Lead Cybersecurity Instructor & Founder",
      image: "/images/wolf-warrior-presenter.png",
      bio: "Adnan jafar is a seasoned cybersecurity professional with over 15 years of experience in penetration testing, incident response, and security consulting. He holds multiple industry certifications including CISSP, CEH, and OSCP. Alex has conducted security assessments for Fortune 500 companies and government agencies.",
      credentials: ["CISSP", "CEH", "OSCP", "GCIH"],
      experience: "15+ years in cybersecurity",
      specialties: ["Penetration Testing", "Incident Response", "Security Architecture"],
    },
    testimonials: [
      {
        name: "omar abdi",
        role: "Security Analyst",
        content:
          "adnan's advanced penetration testing workshop was incredible. The hands-on labs were challenging and realistic.",
        rating: 5,
      },
      {
        name: "mohamed hassan",
        role: "IT Manager",
        content:
          "Best workshop I've attended. adnan's expertise and teaching style made complex topics easy to understand.",
        rating: 5,
      },
    ],
    registrationUrl: "https://forms.google.com/advanced-pentest-workshop",
  },
  "incident-response-masterclass": {
    id: "incident-response-masterclass",
    title: "Incident Response Masterclass",
    subtitle: "Master Cybersecurity Incident Response",
    heroImage: "/images/ninja-warrior.jpg", // Ninja warrior image for incident response
    date: "January 20, 2025",
    time: "10:00 AM - 4:00 PM EST",
    duration: "6 hours",
    type: "Virtual Only",
    price: "$399",
    originalPrice: "$499",
    spots: "Early Bird Available",
    location: "Virtual Workshop",
    virtualLink: "Zoom link will be provided 24 hours before",
    level: "Intermediate to Advanced",
    prerequisites: "Basic cybersecurity knowledge recommended",
    description:
      "Master the art of cybersecurity incident response with our comprehensive masterclass. Learn industry-standard methodologies, tools, and techniques used by professional incident response teams.",
    whatYouWillLearn: [
      "Incident response lifecycle and methodologies",
      "Threat hunting and detection techniques",
      "Digital forensics fundamentals",
      "Malware analysis basics",
      "Communication and coordination during incidents",
      "Legal and compliance considerations",
      "Recovery and lessons learned processes",
      "Building an incident response program",
    ],
    includes: [
      "6 hours of comprehensive training",
      "Real-world incident scenarios",
      "IR toolkit and templates",
      "Certificate of completion",
      "60-day access to recorded session",
      "IR playbook templates",
      "Access to private community",
      "Follow-up mentoring session",
    ],
    agenda: [
      { time: "10:00 - 10:30 AM", topic: "IR Fundamentals & Framework" },
      { time: "10:30 - 11:30 AM", topic: "Detection & Analysis" },
      { time: "11:30 - 11:45 AM", topic: "Break" },
      { time: "11:45 AM - 12:45 PM", topic: "Containment & Eradication" },
      { time: "12:45 - 1:45 PM", topic: "Lunch Break" },
      { time: "1:45 - 2:45 PM", topic: "Recovery & Post-Incident" },
      { time: "2:45 - 3:00 PM", topic: "Break" },
      { time: "3:00 - 4:00 PM", topic: "Hands-on Scenario & Q&A" },
    ],
    presenter: {
      name: "adnan jafar",
      title: "Incident Response Specialist & Co-Founder",
      image: "/images/wolf-warrior-presenter.png",
      bio: "adnan jafar is a certified incident response specialist with 12+ years of experience leading IR teams for major corporations. She has handled hundreds of security incidents and specializes in advanced persistent threats and ransomware response.",
      credentials: ["GCIH", "GCFA", "CISSP", "CISM"],
      experience: "12+ years in incident response",
      specialties: ["Incident Response", "Digital Forensics", "Threat Hunting"],
    },
    testimonials: [
      {
        name: "xabibo ali",
        role: "CISO",
        content: "adnan's incident response training transformed our team's capabilities. Highly recommended!",
        rating: 5,
      },
      {
        name: "leylo omar",
        role: "Security Engineer",
        content: "Excellent practical training with real-world scenarios. Worth every penny.",
        rating: 5,
      },
    ],
    registrationUrl: "https://forms.google.com/incident-response-masterclass",
  },
  "cybersecurity-beginners": {
    id: "cybersecurity-beginners",
    title: "Cybersecurity for Beginners",
    subtitle: "Your Gateway to Cybersecurity Career",
    heroImage: "/images/cartoon-hacker.jpg", // Cartoon hacker image for beginners
    date: "February 10, 2025",
    time: "2:00 PM - 5:00 PM EST",
    duration: "3 hours",
    type: "In-Person & Virtual",
    price: "$199",
    originalPrice: "$249",
    spots: "Registration Opens Soon",
    location: "AlphaSploit Training Center, Tech City",
    virtualLink: "Zoom link will be provided",
    level: "Beginner",
    prerequisites: "No prior experience required",
    description:
      "Perfect for those new to cybersecurity! This workshop provides a comprehensive introduction to cybersecurity fundamentals, career paths, and essential skills needed to start your journey in this exciting field.",
    whatYouWillLearn: [
      "Cybersecurity fundamentals and concepts",
      "Common threats and attack vectors",
      "Basic security tools and techniques",
      "Career paths in cybersecurity",
      "Essential certifications and skills",
      "Hands-on security exercises",
      "Building a home security lab",
      "Next steps in your cybersecurity journey",
    ],
    includes: [
      "3 hours of beginner-friendly training",
      "Hands-on exercises and demos",
      "Career guidance and roadmap",
      "Certificate of completion",
      "Resource library access",
      "Career mentoring session",
      "Community access",
      "Beginner's toolkit",
    ],
    agenda: [
      { time: "2:00 - 2:30 PM", topic: "Cybersecurity Landscape Overview" },
      { time: "2:30 - 3:15 PM", topic: "Common Threats & Attack Methods" },
      { time: "3:15 - 3:30 PM", topic: "Break" },
      { time: "3:30 - 4:15 PM", topic: "Hands-on Security Tools Demo" },
      { time: "4:15 - 5:00 PM", topic: "Career Paths & Next Steps" },
    ],
    presenter: {
      name: "salman nur",
      title: "Cybersecurity Educator & Technical Lead",
      image: "/images/wolf-warrior-presenter.png",
      bio: "salman nur is passionate about cybersecurity education and has helped over 500 beginners start their cybersecurity careers. With 10+ years in the field, he specializes in making complex security concepts accessible to newcomers.",
      credentials: ["Security+", "CySA+", "CISSP", "CTM"],
      experience: "10+ years in cybersecurity education",
      specialties: ["Security Education", "Career Mentoring", "Technical Training"],
    },
    testimonials: [
      {
        name: "jaabir ali",
        role: "Career Changer",
        content: "salman made cybersecurity approachable for a complete beginner like me. Great introduction!",
        rating: 5,
      },
      {
        name: "saed omar",
        role: "Student",
        content: "Perfect starting point for anyone interested in cybersecurity. Highly recommended!",
        rating: 5,
      },
    ],
    registrationUrl: "https://forms.google.com/cybersecurity-beginners",
  },
}

export default function WorkshopPage({ params }: { params: { id: string } }) {
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  const workshop = workshops[params.id as keyof typeof workshops]

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!workshop) {
    notFound()
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `Check out this amazing workshop: ${workshop.title} by AlphaSploit! ${workshop.description}`

  const handleShare = () => {
    setShowShareOptions(!showShareOptions)
  }

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const handleSocialShare = (platform: string) => {
    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://m.facebook.com/61555331334130")}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://x.com/AlphaSploit")}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
        break
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(workshop.title)}&body=${encodeURIComponent(`${shareText} ${currentUrl}`)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="pt-20 pb-8 flex items-center justify-between">
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
            <Link href="/#workshops">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Workshops
            </Link>
          </Button>

          {/* Share Buttons */}
          <div className="flex items-center space-x-3">
            <Button onClick={handleShare} variant="outline" className="flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button
              onClick={handleWhatsAppShare}
              className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>

        {/* Hero Section with Workshop-Specific Background */}
        <section className="relative py-20 lg:py-32 overflow-hidden mb-12 rounded-2xl">
          <div className="absolute inset-0">
            <img
              src={workshop.heroImage || "/placeholder.svg"}
              alt={workshop.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
                {workshop.level}
              </Badge>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">{workshop.title}</h1>
              <p className="font-roboto text-xl text-white/90 mb-6">{workshop.subtitle}</p>
              <p className="font-roboto text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                {workshop.description}
              </p>
            </div>
          </div>
        </section>

        {/* Presenter Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-none shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="relative">
                    <img
                      src={workshop.presenter.image || "/placeholder.svg"}
                      alt={workshop.presenter.name}
                      className="w-48 h-48 rounded-2xl object-cover border-4 border-white shadow-2xl"
                    />
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Workshop Presenter</Badge>
                  <h1 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-2">
                    {workshop.presenter.name}
                  </h1>
                  <p className="font-roboto text-xl text-primary mb-4">{workshop.presenter.title}</p>
                  <p className="font-roboto text-text/80 mb-6 leading-relaxed">{workshop.presenter.bio}</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-accent" />
                      <span className="font-roboto text-sm text-text/70">{workshop.presenter.experience}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {workshop.presenter.credentials.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/20 text-primary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Course Details Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Overview */}
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <BookOpen className="mr-3 h-6 w-6 text-primary" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-poppins font-semibold text-text mb-2">Target Audience</h4>
                  <p className="font-roboto text-text/80 text-sm">
                    {workshop.level === "Beginner"
                      ? "Perfect for newcomers to cybersecurity, career changers, students, and IT professionals looking to transition into security roles."
                      : workshop.level === "Advanced"
                        ? "Designed for experienced security professionals, penetration testers, and cybersecurity consultants looking to enhance their skills."
                        : "Ideal for cybersecurity professionals, SOC analysts, incident responders, and security team leads."}
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text mb-2">Learning Format</h4>
                  <p className="font-roboto text-text/80 text-sm">
                    Interactive workshop combining theoretical concepts with hands-on practical exercises. Includes live
                    demonstrations, real-world scenarios, and Q&A sessions with industry experts.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text mb-2">Certification</h4>
                  <p className="font-roboto text-text/80 text-sm">
                    Participants receive an official AlphaSploit completion certificate, which can be added to LinkedIn
                    profiles and professional portfolios to demonstrate continued learning and skill development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Requirements */}
            <Card className="bg-gradient-to-br from-gray-50 to-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-accent" />
                  Technical Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-poppins font-semibold text-text mb-2">System Requirements</h4>
                  <ul className="font-roboto text-text/80 text-sm space-y-1">
                    <li>• Computer with Windows, macOS, or Linux</li>
                    <li>• Minimum 8GB RAM (16GB recommended)</li>
                    <li>• Stable internet connection for virtual sessions</li>
                    <li>• Webcam and microphone for interaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text mb-2">Software Access</h4>
                  <p className="font-roboto text-text/80 text-sm">
                    All necessary tools and lab environments will be provided. No prior software installation required.
                    Access to cloud-based labs included for hands-on practice.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text mb-2">Materials Provided</h4>
                  <ul className="font-roboto text-text/80 text-sm space-y-1">
                    <li>• Digital workshop handbook</li>
                    <li>• Lab exercise guides</li>
                    <li>• Resource links and references</li>
                    <li>• Practice scenarios and datasets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-poppins font-semibold text-text mb-1">Date & Time</h3>
              <p className="font-roboto text-sm text-text/70">{workshop.date}</p>
              <p className="font-roboto text-sm text-text/70">{workshop.time}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-poppins font-semibold text-text mb-1">Duration</h3>
              <p className="font-roboto text-sm text-text/70">{workshop.duration}</p>
              <p className="font-roboto text-sm text-text/70">{workshop.type}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-poppins font-semibold text-text mb-1">Price</h3>
              <p className="font-roboto text-lg font-bold text-primary">{workshop.price}</p>
              {workshop.originalPrice && (
                <p className="font-roboto text-sm text-text/50 line-through">{workshop.originalPrice}</p>
              )}
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-poppins font-semibold text-text mb-1">Availability</h3>
              <p className="font-roboto text-sm text-accent font-medium">{workshop.spots}</p>
              <p className="font-roboto text-sm text-text/70">{workshop.level}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
          {/* Left Column - Workshop Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <Target className="mr-3 h-6 w-6 text-primary" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workshop.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-roboto text-text/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Workshop Agenda */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-primary" />
                  Workshop Agenda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workshop.agenda.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-primary text-white text-sm px-3 py-1 rounded-full font-medium flex-shrink-0">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-text">{item.topic}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <BookOpen className="mr-3 h-6 w-6 text-primary" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workshop.includes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-roboto text-text/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text">What Participants Say</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {workshop.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="font-roboto text-text/80 mb-3 italic">"{testimonial.content}"</blockquote>
                      <div>
                        <p className="font-poppins font-semibold text-text">{testimonial.name}</p>
                        <p className="font-roboto text-sm text-text/70">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Registration */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text text-center">Register Now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{workshop.price}</div>
                  {workshop.originalPrice && (
                    <div className="text-lg text-text/50 line-through mb-2">{workshop.originalPrice}</div>
                  )}
                  <div className="text-sm text-accent font-medium">{workshop.spots}</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text/70">Date:</span>
                    <span className="font-medium">{workshop.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text/70">Time:</span>
                    <span className="font-medium">{workshop.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text/70">Duration:</span>
                    <span className="font-medium">{workshop.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text/70">Format:</span>
                    <span className="font-medium">{workshop.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text/70">Level:</span>
                    <span className="font-medium">{workshop.level}</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <a href={workshop.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register via Google Form
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <div className="text-center">
                  <p className="text-xs text-text/60 mb-2">Secure registration through Google Forms</p>
                  <p className="text-xs text-text/60">Questions? Contact us for assistance</p>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-lg text-text flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Location Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-text">In-Person:</p>
                  <p className="text-text/70">{workshop.location}</p>
                </div>
                <div>
                  <p className="font-medium text-text">Virtual:</p>
                  <p className="text-text/70">{workshop.virtualLink}</p>
                </div>
                <div>
                  <p className="font-medium text-text">Prerequisites:</p>
                  <p className="text-text/70">{workshop.prerequisites}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Share Options Panel */}
      {showShareOptions && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-poppins font-bold text-lg text-text">Share this Workshop</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowShareOptions(false)}>
                ×
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button
                onClick={() => handleSocialShare("facebook")}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
                <span>Facebook</span>
              </Button>
              <Button
                onClick={() => handleSocialShare("twitter")}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Twitter className="h-4 w-4 text-blue-400" />
                <span>Twitter</span>
              </Button>
              <Button
                onClick={() => handleSocialShare("linkedin")}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-4 w-4 text-blue-700" />
                <span>LinkedIn</span>
              </Button>
              <Button
                onClick={() => handleSocialShare("email")}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Mail className="h-4 w-4 text-gray-600" />
                <span>Email</span>
              </Button>
              <Button onClick={handleCopyLink} variant="outline" className="flex items-center space-x-2">
                <Copy className="h-4 w-4 text-gray-600" />
                <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
