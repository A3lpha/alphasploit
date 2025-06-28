import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Rocket, Users } from "lucide-react"

export function CourseTimeline() {
  const timeline = [
    {
      phase: "Phase 1",
      title: "Foundation & Content Creation",
      status: "completed",
      date: "2023-2024",
      description: "Launched YouTube channel, conducted 50+ workshops, built community of 1000+ subscribers",
      icon: CheckCircle,
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      status: "current",
      date: "Q4 2024",
      description: "Building online platform, structuring workshop content into courses, developing assessments",
      icon: Clock,
    },
    {
      phase: "Phase 3",
      title: "Beta Testing",
      status: "upcoming",
      date: "Q1 2025",
      description: "Limited beta release with workshop alumni and YouTube subscribers for feedback",
      icon: Users,
    },
    {
      phase: "Phase 4",
      title: "Public Launch",
      status: "upcoming",
      date: "Q2 2025",
      description: "Full platform launch with certification programs available to global audience",
      icon: Rocket,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Development Roadmap</Badge>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-text mb-6">Our Journey to Launch</h2>
          <p className="font-roboto text-xl text-text/80 max-w-3xl mx-auto">
            We're committed to transparency. Here's our roadmap to bringing you the best cybersecurity training
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                item.status === "completed"
                  ? "bg-green-50 border-green-200"
                  : item.status === "current"
                    ? "bg-primary/5 border-primary/20 ring-2 ring-primary/20"
                    : "bg-gray-50 border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    className={`text-xs ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "current"
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.phase}
                  </Badge>
                  <item.icon
                    className={`h-5 w-5 ${
                      item.status === "completed"
                        ? "text-green-500"
                        : item.status === "current"
                          ? "text-primary"
                          : "text-gray-400"
                    }`}
                  />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-text mb-2">{item.title}</h3>
                <p className="font-roboto text-sm text-text/70 mb-3">{item.description}</p>
                <div className="font-roboto text-xs text-text/60 font-medium">{item.date}</div>
                {item.status === "current" && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-roboto text-text/70 mb-6">
            Want to be part of our beta testing program? Join our waitlist for exclusive early access.
          </p>
        </div>
      </div>
    </section>
  )
}
