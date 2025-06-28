"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target, Award, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t, language } = useLanguage()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const advantages =
    language === "so"
      ? [
          "Macallimiinta heerka warshadeed ee leh khibrad dhabta ah",
          "Tababar gacanta ku haya oo leh waxbarasho xaalado ku salaysan",
          "Manhaj casri ah oo lagu cusboonaysiiyo halisyada iyo farsamooyinka ugu dambeeyay",
          "Fasallo yaryar si loo helo dareenka gaarka ah iyo hagitaanka",
          "Deegaan makhadyo oo dhamaystiran oo lagu dhaqmo si ammaan ah",
          "Shahaadooyinka warshadeed iyo caawimada meelaynta shaqada",
          "Doorashooyin waxbarasho oo dabacsan oo ay ku jiraan tababarka online iyo kan shakhsi ahaaneed",
          "Taageero joogto ah iyo gelitaanka shabakadda ardayda hore",
        ]
      : [
          "Industry-leading instructors with real-world experience",
          "Hands-on training with practical, scenario-based learning",
          "Cutting-edge curriculum updated with latest threats and techniques",
          "Small class sizes for personalized attention and mentorship",
          "Comprehensive lab environments for safe practice",
          "Industry certifications and career placement assistance",
          "Flexible learning options including online and in-person training",
          "Continuous support and alumni network access",
        ]

  const stats = [
    { icon: Users, number: "5000+", label: t("about.stats.students") },
    { icon: Award, number: "95%", label: t("about.stats.placement") },
    { icon: Shield, number: "10+", label: t("about.stats.experience") },
    { icon: Target, number: "50+", label: t("about.stats.clients") },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section with Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img src="/images/cybersecurity-hero.jpg" alt="About AlphaSploit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">{t("about.page.title")}</h1>
            <p className="font-roboto text-xl text-white/90 max-w-3xl mx-auto">{t("about.page.description")}</p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="font-poppins font-bold text-3xl text-text mb-2">{stat.number}</div>
              <div className="font-roboto text-text/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Overview */}
        <section className="mb-20">
          <h2 className="font-poppins font-bold text-3xl text-text mb-8 text-center">{t("about.company.title")}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.company.p1")}</p>
            <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.company.p2")}</p>
            <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.company.p3")}</p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  {t("about.mission.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.mission.content")}</p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text flex items-center">
                  <Target className="h-6 w-6 text-accent mr-3" />
                  {t("about.vision.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-lg text-text/80 leading-relaxed">{t("about.vision.content")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="font-poppins font-bold text-3xl text-text mb-12 text-center">{t("about.why.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="font-roboto text-text/80 leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
