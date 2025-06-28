"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Target, Users, BookOpen, Code, Lock, Eye, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t, language } = useLanguage()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const coreServices = [
    {
      icon: Shield,
      title: t("service.ethicalHacking.title"),
      description: t("service.ethicalHacking.description"),
      features:
        language === "so"
          ? [
              "Imtixaanka Dhaqdhaqaaqa Barnaamijyada Shabakada",
              "Qiimaynta Amniga Shabakada",
              "Imtixaanka Amniga Wireless",
              "Wacyigalinta Injineernimada Bulshada",
              "Qorista Warbixinta iyo Isgaarsiinta",
            ]
          : [
              "Web Application Penetration Testing",
              "Network Security Assessment",
              "Wireless Security Testing",
              "Social Engineering Awareness",
              "Report Writing and Communication",
            ],
    },
    {
      icon: Target,
      title: t("service.socAnalyst.title"),
      description: t("service.socAnalyst.description"),
      features:
        language === "so"
          ? [
              "Qalabka SIEM iyo Falanqaynta Diiwaanka",
              "Farsamooyinka Ugaarsiga Halista",
              "Habdhaqameedyada Jawaabta Dhacdada",
              "Aasaasaha Falanqaynta Malware",
              "Isku xirka Dhacdooyinka Amniga",
            ]
          : [
              "SIEM Tools and Log Analysis",
              "Threat Hunting Techniques",
              "Incident Response Procedures",
              "Malware Analysis Fundamentals",
              "Security Event Correlation",
            ],
    },
    {
      icon: Users,
      title: t("service.redTeaming.title"),
      description: t("service.redTeaming.description"),
      features:
        language === "so"
          ? [
              "Jilitaanka Halista Joogtada ah ee Horumarsan",
              "Kaabayaasha Xakamaynta iyo Kontoroolka",
              "Farsamooyinka Dhaqdhaqaaqa Dhinacyada",
              "Habdhaqameedyada Kor u qaadista Xuquuqda",
              "Isgaarsiinta Kanaalka Qarsoodi ah",
            ]
          : [
              "Advanced Persistent Threat Simulation",
              "Command and Control Infrastructure",
              "Lateral Movement Techniques",
              "Privilege Escalation Methods",
              "Covert Channel Communication",
            ],
    },
    {
      icon: BookOpen,
      title: t("service.workshops.title"),
      description: t("service.workshops.description"),
      features:
        language === "so"
          ? [
              "Dhaqamada Fiican ee Amniga Daruuraha",
              "Qiimaynta Amniga IoT",
              "Amniga Barnaamijyada Mobilada",
              "Amniga Lacagta Cryptocurrency iyo Blockchain",
              "Tixgalinta Amniga AI/ML",
            ]
          : [
              "Cloud Security Best Practices",
              "IoT Security Assessment",
              "Mobile Application Security",
              "Cryptocurrency and Blockchain Security",
              "AI/ML Security Considerations",
            ],
    },
  ]

  const additionalServices = [
    {
      icon: Code,
      title: language === "so" ? "Dib u eegista Koodhka Ammaan" : "Secure Code Review",
      description:
        language === "so"
          ? "Baro sida loo aqoonsado oo loo daaweeyaa nuglaanta amniga ee koodhka isha ah ee luuqadaha barnaamijyada kala duwan."
          : "Learn to identify and remediate security vulnerabilities in source code across multiple programming languages.",
    },
    {
      icon: Lock,
      title: language === "so" ? "Sirta & PKI" : "Cryptography & PKI",
      description:
        language === "so"
          ? "Qoto dheer ku gal mabaadi'da sirta, hirgelinta, iyo maaraynta kaabayaasha furaha dadweynaha."
          : "Deep dive into cryptographic principles, implementation, and public key infrastructure management.",
    },
    {
      icon: Eye,
      title: language === "so" ? "Baadhista Dijital" : "Digital Forensics",
      description:
        language === "so"
          ? "Tababar dhamaystiran oo ku saabsan ururinta caddaymaha dijital, falanqaynta, iyo soo bandhigida dacwadaha sharciga."
          : "Comprehensive training in digital evidence collection, analysis, and presentation for legal proceedings.",
    },
    {
      icon: Zap,
      title: language === "so" ? "Jawaabta Dhacdada" : "Incident Response",
      description:
        language === "so"
          ? "Ku takhasuus wareegga jawaabta dhacdada laga bilaabo ogaanshaha iyo xakameynta ilaa soo kabashada iyo casharrada la bartay."
          : "Master the incident response lifecycle from detection and containment to recovery and lessons learned.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section with Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img src="/images/cybersecurity-hero.jpg" alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">{t("services.page.title")}</h1>
            <p className="font-roboto text-xl text-white/90 max-w-3xl mx-auto">{t("services.page.description")}</p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Services */}
        <section className="mb-20">
          <h2 className="font-poppins font-bold text-3xl text-text mb-12 text-center">{t("services.core.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-poppins font-semibold text-2xl text-text">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="font-roboto text-text/70 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-poppins font-semibold text-text mb-3">
                    {language === "so" ? "Mawduucyada Muhiimka ah:" : "Key Topics:"}
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-roboto text-text/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="font-poppins font-bold text-3xl text-text mb-12 text-center">
            {t("services.specialized.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gray-50 hover:shadow-md transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-poppins font-semibold text-lg text-text">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-roboto text-text/70 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Training Formats */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h2 className="font-poppins font-bold text-3xl text-text mb-8 text-center">
              {t("services.formats.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-poppins font-semibold text-xl text-text mb-3">
                    {t("services.formats.inPerson")}
                  </h3>
                  <p className="font-roboto text-text/70">{t("services.formats.inPersonDesc")}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-poppins font-semibold text-xl text-text mb-3">{t("services.formats.virtual")}</h3>
                  <p className="font-roboto text-text/70">{t("services.formats.virtualDesc")}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-poppins font-semibold text-xl text-text mb-3">
                    {t("services.formats.corporate")}
                  </h3>
                  <p className="font-roboto text-text/70">{t("services.formats.corporateDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-poppins font-bold text-3xl text-text mb-6">{t("services.cta.title")}</h2>
          <p className="font-roboto text-lg text-text/80 mb-8 max-w-2xl mx-auto">{t("services.cta.description")}</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            <Link href="/contact">{t("services.cta.button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
