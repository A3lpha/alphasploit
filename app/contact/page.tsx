"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { t, language } = useLanguage()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    const message =
      language === "so"
        ? "Mahadsanid fariintaada! Waxaan kugula soo noqon doonaa dhawaan."
        : "Thank you for your message! We will get back to you soon."
    alert(message)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      content: "info@alphasploit.com",
      link: "mailto:info@alphasploit.com",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "+252 61 234 5678",
      link: "tel:+25261234567",
    },
    {
      icon: MessageCircle,
      title: t("contact.whatsapp"),
      content: language === "so" ? "Nala sheekayso" : "Chat with us",
      link: "https://wa.me/25261234567",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      content: "Wadada Shaqaalaha, Mogadishu, Somalia",
      link: "#",
    },
  ]

  const businessHours =
    language === "so"
      ? [
          {
            title: "Sabti - Khamiis",
            hours: "8:00 AM - 5:00 PM EAT",
          },
          {
            title: "Jimce",
            hours: "2:00 PM - 6:00 PM EAT",
          },
          {
            title: "Ciidaha Dadweynaha",
            hours: "Xiran",
          },
        ]
      : [
          {
            title: "Saturday - Thursday",
            hours: "8:00 AM - 5:00 PM EAT",
          },
          {
            title: "Friday",
            hours: "2:00 PM - 6:00 PM EAT",
          },
          {
            title: "Public Holidays",
            hours: "Closed",
          },
        ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/cybersecurity-hero.jpg" alt="Contact AlphaSploit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">{t("contact.title")}</h1>
            <p className="font-roboto text-xl text-white/90 max-w-3xl mx-auto">{t("contact.description")}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="font-poppins font-bold text-2xl text-text">{t("contact.sendMessage")}</CardTitle>
              <CardDescription className="font-roboto text-text/70">{t("contact.formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-roboto font-medium text-text">
                      {t("contact.name")} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="font-roboto"
                      placeholder={language === "so" ? "Magacaaga buuxa" : "Your full name"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-roboto font-medium text-text">
                      {t("contact.email")} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="font-roboto"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-roboto font-medium text-text">
                    {t("contact.subject")} *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="font-roboto"
                    placeholder={language === "so" ? "Maxaan kaa caawin karnaa?" : "What can we help you with?"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-roboto font-medium text-text">
                    {t("contact.message")} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="font-roboto min-h-[120px]"
                    placeholder={
                      language === "so"
                        ? "Noo sheeg wax badan oo ku saabsan baahiyahaaga tababarka ama su'aalahaaga..."
                        : "Tell us more about your training needs or questions..."
                    }
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-roboto">
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-2xl text-text">{t("contact.getInTouch")}</CardTitle>
                <CardDescription className="font-roboto text-text/70">{t("contact.multipleWays")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-text mb-1">{info.title}</h3>
                      {info.link !== "#" ? (
                        <a href={info.link} className="font-roboto text-text/80 hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-roboto text-text/80">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-accent text-white border-none">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-poppins font-bold text-xl mb-2">
                  {language === "so" ? "Ma u baahan tahay caawimo degdeg ah?" : "Need Immediate Assistance?"}
                </h3>
                <p className="font-roboto mb-4 opacity-90">
                  {language === "so"
                    ? "Nala sheekayso WhatsApp si aad u hesho jawaabo degdeg ah su'aalahaaga."
                    : "Chat with us on WhatsApp for quick responses to your questions."}
                </p>
                <Button asChild variant="secondary" className="bg-white text-accent hover:bg-gray-100">
                  <a href="https://chat.whatsapp.com/IHCiZh69Kkz4KaNq2Qo3yj" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {language === "so" ? "Bilow Sheekada WhatsApp" : "Start WhatsApp Chat"}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gray-100 border-none">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="font-roboto text-gray-600">
                      {language === "so" ? "Khariidadda Isdhexgalka" : "Interactive Map"}
                    </p>
                    <p className="font-roboto text-sm text-gray-500">Wadada Shaqaalaha, Mogadishu</p>
                    <p className="font-roboto text-xs text-gray-400 mt-1">Somalia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="font-poppins font-bold text-2xl text-text mb-4">{t("contact.businessHours")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {businessHours.map((schedule, index) => (
                <div key={index}>
                  <h3 className="font-poppins font-semibold text-text mb-2">{schedule.title}</h3>
                  <p className="font-roboto text-text/70">{schedule.hours}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <p className="font-roboto text-sm text-text/70">
                <strong>{language === "so" ? "Fiiro gaar ah:" : "Note:"}</strong>{" "}
                {language === "so"
                  ? "Waxaan sidoo kale bixinnaa talo virtual ah iyo taageero online ah macaamiisha caalamiga ah ee waqtiyo kala duwan."
                  : "We also provide virtual consultations and online support for international clients across different time zones."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
