"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Target, Zap, ArrowRight, CheckCircle, Star, Globe, Network, Eye } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { CourseTimeline } from "@/components/course-timeline"
import { YouTubeWorkshops } from "@/components/youtube-workshops"

export default function HomePage() {
  const { t } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const stats = [
    { icon: Users, label: t("home.stats.students"), value: "1,200+" },
    { icon: Award, label: t("home.stats.courses"), value: "25+" },
    { icon: Globe, label: t("home.stats.countries"), value: "15+" },
    { icon: Star, label: t("home.stats.rating"), value: "4.9/5" },
  ]

  const services = [
    {
      icon: Shield,
      title: t("home.services.penetration.title"),
      description: t("home.services.penetration.description"),
      features: [
        t("home.services.penetration.features.0"),
        t("home.services.penetration.features.1"),
        t("home.services.penetration.features.2"),
      ],
      badge: t("home.services.penetration.badge"),
    },
    {
      icon: Eye,
      title: t("home.services.soc.title"),
      description: t("home.services.soc.description"),
      features: [
        t("home.services.soc.features.0"),
        t("home.services.soc.features.1"),
        t("home.services.soc.features.2"),
      ],
      badge: t("home.services.soc.badge"),
    },
    {
      icon: Network,
      title: t("home.services.redteam.title"),
      description: t("home.services.redteam.description"),
      features: [
        t("home.services.redteam.features.0"),
        t("home.services.redteam.features.1"),
        t("home.services.redteam.features.2"),
      ],
      badge: t("home.services.redteam.badge"),
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: t("home.testimonials.0.role"),
      content: t("home.testimonials.0.content"),
      rating: 5,
      image: "/images/armored-wolf-warrior.jpg",
    },
    {
      name: "Fatima Ali",
      role: t("home.testimonials.1.role"),
      content: t("home.testimonials.1.content"),
      rating: 5,
      image: "/images/armored-wolf-warrior.jpg",
    },
    {
      name: "Mohamed Omar",
      role: t("home.testimonials.2.role"),
      content: t("home.testimonials.2.content"),
      rating: 5,
      image: "/images/armored-wolf-warrior.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2">
                  🚀 {t("home.hero.badge")}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t("home.hero.title.part1")}
                  <br />
                  <span className="text-primary">{t("home.hero.title.part2")}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{t("home.hero.description")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/workshops">
                    <Zap className="mr-2 h-5 w-5" />
                    {t("home.hero.cta.primary")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">{t("home.hero.cta.secondary")}</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/cybersecurity-hero.jpg"
                alt="Cybersecurity Training"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t("home.services.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.services.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {service.badge}
                  </Badge>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      {t("home.services.cta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t("home.timeline.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.timeline.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.timeline.description")}</p>
          </div>
          <CourseTimeline />
        </div>
      </section>

      {/* YouTube Workshops */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t("home.youtube.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.youtube.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.youtube.description")}</p>
          </div>
          <YouTubeWorkshops />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t("home.testimonials.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.testimonials.title")}</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < testimonials[currentTestimonial].rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
            <p className="text-xl mb-8 opacity-90">{t("home.cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/workshops">
                  <Target className="mr-2 h-5 w-5" />
                  {t("home.cta.primary")}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">{t("home.cta.secondary")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/images/alphasploit-logo-new.png" alt="AlphaSploit Logo" className="h-10 w-auto" />
                <div className="font-bold text-xl">AlphaSploit</div>
              </div>
              <p className="text-muted-foreground">{t("footer.description")}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.services.title")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    {t("footer.services.penetration")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    {t("footer.services.soc")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    {t("footer.services.redteam")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    {t("footer.services.consulting")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.company.title")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    {t("footer.company.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/workshops" className="hover:text-foreground transition-colors">
                    {t("footer.company.workshops")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    {t("footer.company.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.contact.title")}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{t("footer.contact.email")}: info@alphasploit.com</p>
                <p>{t("footer.contact.phone")}: +252 61 234 5678</p>
                <p>{t("footer.contact.address")}: Wadada Shaqaalaha, Mogadishu, Somalia</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-muted-foreground">© 2024 AlphaSploit. {t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
