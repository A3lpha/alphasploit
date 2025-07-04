"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Target,
  Users,
  BookOpen,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Globe,
  ChevronLeft,
  ChevronRight,
  Play,
  Zap,
  Lock,
  Eye,
  Code,
  Mail,
} from "lucide-react"
import { YouTubeWorkshops } from "@/components/youtube-workshops"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    satisfaction: 0,
  })
  const { t, language } = useLanguage()

  // Animated counter effect
  useEffect(() => {
    const targets = { students: 0, courses: 4, instructors: 3, satisfaction: 0 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    const counters = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(counters[Object.keys(targets).indexOf(key)])
        }
        setStats((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)
    })

    return () => counters.forEach(clearInterval)
  }, [])

  const services = [
    {
      icon: Shield,
      title: t("service.ethicalHacking.title"),
      description: t("service.ethicalHacking.description"),
      features:
        language === "so"
          ? [
              "Imtixaanka Barnaamijyada Shabakada",
              "Amniga Shabakada",
              "Imtixaanka Amniga Wireless",
              "Injineernimada Bulshada",
            ]
          : ["Web App Testing", "Network Security", "Wireless Testing", "Social Engineering"],
      color: "from-blue-500 to-purple-600",
      popular: true,
    },
    {
      icon: Target,
      title: t("service.socAnalyst.title"),
      description: t("service.socAnalyst.description"),
      features:
        language === "so"
          ? ["Qalabka SIEM", "Ugaarsiga Halista", "Jawaabta Dhacdada", "Falanqaynta Malware"]
          : ["SIEM Tools", "Threat Hunting", "Incident Response", "Malware Analysis"],
      color: "from-green-500 to-teal-600",
      popular: false,
    },
    {
      icon: Users,
      title: t("service.redTeaming.title"),
      description: t("service.redTeaming.description"),
      features:
        language === "so"
          ? ["Jilitaanka APT", "Kaabayaasha C&C", "Dhaqdhaqaaqa Dhinacyada", "Kor u qaadista Xuquuqda"]
          : ["APT Simulation", "C&C Infrastructure", "Lateral Movement", "Privilege Escalation"],
      color: "from-red-500 to-pink-600",
      popular: false,
    },
    {
      icon: BookOpen,
      title: t("service.workshops.title"),
      description: t("service.workshops.description"),
      features:
        language === "so"
          ? ["Amniga Daruuraha", "Amniga IoT", "Amniga Mobilada", "Amniga AI/ML"]
          : ["Cloud Security", "IoT Security", "Mobile Security", "AI/ML Security"],
      color: "from-orange-500 to-yellow-600",
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "James Wilson",
      role: language === "so" ? "Takhasuska Amniga IT" : "IT Security Specialist",
      content:
        language === "so"
          ? "Waxaan ka qayb galay tababarka hacking anshaxa leh ee AlphaSploit bishii la soo dhaafay waxayna ahayd mid cajiib ah! Habka gacanta ku haya iyo xaaladaha dhabta ah ayaa ahaa wixii aan u baahnaa. Ma sugayn karo in aaladooda online-ka ay bilaabato."
          : "I attended AlphaSploit's ethical hacking workshop last month and it was incredible! The hands-on approach and real-world scenarios were exactly what I needed. Can't wait for their online platform to launch.",
      rating: 5,
      image: "/images/armored-wolf-warrior.jpg",
      company: "TechSolutions Inc",
    },
    {
      name: "Maria Garcia",
      role: language === "so" ? "Ardayga Amniga Teknoolajiyada" : "Cybersecurity Student",
      content:
        language === "so"
          ? "Waxaan la socdaa kanaalka YouTube ee AlphaSploit muddo bilo ah. Casharradoodu waa kuwo cad, wax ku ool ah, waxayna had iyo jeer la socdaan halisyada ugu dambeeyay. Waan ku faraxsanahay inaan arko iyagoo bilaabaya aalad tababar oo dhamaystiran!"
          : "I've been following AlphaSploit's YouTube channel for months. Their tutorials are clear, practical, and always up-to-date with the latest threats. Excited to see them launching a full training platform!",
      rating: 5,
      image: "/images/armored-wolf-warrior.jpg",
      company: language === "so" ? "Ardayga Jaamacadda" : "University Student",
    },
    {
      name: "Alex Thompson",
      role: language === "so" ? "Aasaasaha & Macallinka Hogaaminta" : "Founder & Lead Instructor",
      content:
        language === "so"
          ? "Ka dib markaan qabanay 50+ tababar oo aan dhisnay bulsho YouTube ah oo 1000+ macmiil ah, waxaan diyaar u nahay inaan ballaarino habkayaga tababarka la xaqiijiyay. Aaladdayada online-ka ee habaysan ayaa ka dhigi doonta tababarka khibradda leh mid la heli karo adduunka oo dhan."
          : "After conducting 50+ workshops and building a YouTube community of 1000+ subscribers, we're ready to scale our proven training methodology. Our structured online platform will make expert cybersecurity training accessible worldwide.",
      rating: 5,
      image: "/images/armored-wolf-warrior.jpg",
      company: "AlphaSploit",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: language === "so" ? "Taariikh La Xaqiijiyay" : "Proven Track Record",
      description: language === "so" ? "50+ tababar oo guul leh oo la qabtay" : "50+ successful workshops conducted",
    },
    {
      icon: TrendingUp,
      title: language === "so" ? "Bulsho Kordhaysa" : "Growing Community",
      description:
        language === "so" ? "1000+ macmiilayaasha YouTube oo sii kordhaya" : "1000+ YouTube subscribers and growing",
    },
    {
      icon: Globe,
      title: language === "so" ? "Gaadh Caalami ah" : "Global Reach",
      description: language === "so" ? "Ardayaal ka yimid wadammo badan" : "Students from multiple countries",
    },
    {
      icon: CheckCircle,
      title: language === "so" ? "Macluumaad Khibrad leh" : "Expert Content",
      description:
        language === "so" ? "Macluumaad waxbarasho oo joogto ah oo YouTube" : "Regular YouTube educational content",
    },
  ]

  const specializations = [
    {
      icon: Code,
      title: language === "so" ? "Koodhka Ammaan" : "Secure Coding",
      count: language === "so" ? "12 Cutub" : "12 Modules",
    },
    {
      icon: Lock,
      title: language === "so" ? "Sirta" : "Cryptography",
      count: language === "so" ? "8 Cutub" : "8 Modules",
    },
    {
      icon: Eye,
      title: language === "so" ? "Baadhista Dijital" : "Digital Forensics",
      count: language === "so" ? "15 Cutub" : "15 Modules",
    },
    {
      icon: Zap,
      title: language === "so" ? "Jawaabta Dhacdada" : "Incident Response",
      count: language === "so" ? "10 Cutub" : "10 Modules",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/cybersecurity-hero.jpg"
            alt="Cybersecurity Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              {t("hero.badge")}
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="font-poppins font-medium text-2xl md:text-3xl text-primary mb-8 animate-pulse">
              {t("hero.subtitle")}
            </p>
            <p className="font-roboto text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#newsletter">
                  <Play className="mr-2 h-6 w-6" />
                  {t("hero.getEarlyAccess")}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-xl px-10 py-4 rounded-full bg-white/80 backdrop-blur-sm text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  <Shield className="mr-2 h-6 w-6" />
                  {t("hero.joinWaitlist")}
                </Link>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">50+</div>
                <div className="font-roboto text-white/80">{t("hero.workshopsConducted")}</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-4xl md:text-5xl text-accent mb-2">{stats.courses}</div>
                <div className="font-roboto text-white/80">{t("hero.coursesInDevelopment")}</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">1000+</div>
                <div className="font-roboto text-white/80">{t("hero.youtubeSubscribers")}</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-4xl md:text-5xl text-accent mb-2">
                  {language === "so" ? "Caalami" : "Global"}
                </div>
                <div className="font-roboto text-white/80">{t("hero.globalCommunity")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About AlphaSploit Section - Enhanced */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">{t("about.badge")}</Badge>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-text mb-8">
                {t("about.title")}
                <span className="text-primary">{t("about.titleHighlight")}</span>
              </h2>
              <div className="space-y-6">
                <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.description1")}</p>
                <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.description2")}</p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-accent hover:bg-accent/90 rounded-full px-8">
                  <Link href="/about">
                    {t("about.learnMore")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-text mb-2">{achievement.title}</h3>
                    <p className="font-roboto text-sm text-text/70">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">{t("services.badge")}</Badge>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-text mb-6">{t("services.title")}</h2>
            <p className="font-roboto text-xl text-text/80 max-w-3xl mx-auto">{t("services.description")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-none overflow-hidden"
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-2">
                    <span className="font-poppins font-semibold text-sm">{t("services.mostPopular")}</span>
                  </div>
                )}
                <CardHeader className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div className="relative flex items-start space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-xl shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-poppins font-bold text-2xl text-text mb-3">{service.title}</CardTitle>
                      <CardDescription className="font-roboto text-text/70 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="font-roboto text-sm text-text/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-full"
                  >
                    <Link href="/contact">{t("services.contactForTraining")}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-poppins font-bold text-2xl text-text mb-8 text-center">
              {t("services.additionalSpecializations")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <spec.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-poppins font-semibold text-text mb-1">{spec.title}</h4>
                  <p className="font-roboto text-sm text-text/60">{spec.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube & Workshops Section */}
      <YouTubeWorkshops />

      {/* Enhanced Testimonials Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">{t("testimonials.badge")}</Badge>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-text mb-6">{t("testimonials.title")}</h2>
            <p className="font-roboto text-xl text-text/80 max-w-3xl mx-auto">{t("testimonials.description")}</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-roboto text-xl text-text/80 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <div>
                    <p className="font-poppins font-bold text-lg text-text">{testimonials[currentTestimonial].name}</p>
                    <p className="font-roboto text-text/70">{testimonials[currentTestimonial].role}</p>
                    <p className="font-roboto text-sm text-primary font-semibold">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section
        id="newsletter"
        className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
              {t("newsletter.badge")}
            </Badge>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
              {t("newsletter.title")}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                {t("newsletter.titleHighlight")}
              </span>
            </h2>
            <p className="font-roboto text-xl text-gray-300 mb-12 leading-relaxed">{t("newsletter.description")}</p>

            {/* Newsletter Form */}
            <div className="max-w-2xl mx-auto">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const email = (e.target as HTMLFormElement).email.value
                  if (email) {
                    const message =
                      language === "so"
                        ? `Mahadsanid inaad ku diiwaan gashay ${email}! Waxaad heli doontaa email-kayaga soo dhaweynta dhawaan.`
                        : `Thank you for subscribing with ${email}! You'll receive our welcome email shortly.`
                    alert(message)
                    ;(e.target as HTMLFormElement).reset()
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("newsletter.placeholder")}
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  {t("newsletter.subscribe")}
                </Button>
              </form>

              {/* Newsletter Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">{t("newsletter.threatIntel")}</h3>
                    <p className="font-roboto text-sm text-gray-400">{t("newsletter.threatIntelDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/20 rounded-lg backdrop-blur-sm">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">{t("newsletter.trainingTips")}</h3>
                    <p className="font-roboto text-sm text-gray-400">{t("newsletter.trainingTipsDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">{t("newsletter.exclusiveOffers")}</h3>
                    <p className="font-roboto text-sm text-gray-400">{t("newsletter.exclusiveOffersDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
