"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FileText, Home, Info, Briefcase, Phone, Save, Plus, Edit, Trash2, Eye, Globe, Star } from "lucide-react"

export default function ContentManagerPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isEditing, setIsEditing] = useState(false)

  // Hero Section Content
  const [heroContent, setHeroContent] = useState({
    badge: "🚀 Leading Cybersecurity Training Provider",
    title: {
      part1: "Master Cybersecurity",
      part2: "With AlphaSploit",
    },
    description:
      "Transform your career with our comprehensive cybersecurity training programs. Learn from industry experts and gain hands-on experience in ethical hacking, SOC analysis, and red teaming.",
    primaryCTA: "Start Learning Today",
    secondaryCTA: "Learn More About Us",
    stats: [
      { label: "Students Trained", value: "1,200+", icon: "Users" },
      { label: "Training Courses", value: "25+", icon: "Award" },
      { label: "Countries Reached", value: "15+", icon: "Globe" },
      { label: "Success Rate", value: "4.9/5", icon: "Star" },
    ],
  })

  // Services Content
  const [servicesContent, setServicesContent] = useState({
    badge: "Our Expertise",
    title: "Comprehensive Training Programs",
    description:
      "We offer specialized cybersecurity training programs designed to meet industry demands and prepare you for real-world challenges.",
    services: [
      {
        title: "Penetration Testing",
        description:
          "Learn advanced penetration testing techniques and methodologies used by professional ethical hackers.",
        badge: "Advanced",
        features: [
          "Web Application Security Testing",
          "Network Penetration Testing",
          "Mobile Application Security",
          "Social Engineering Techniques",
        ],
      },
      {
        title: "SOC Analyst Training",
        description:
          "Master the skills needed to become a Security Operations Center analyst and defend against cyber threats.",
        badge: "Professional",
        features: [
          "Threat Detection & Analysis",
          "Incident Response Procedures",
          "SIEM Tools & Technologies",
          "Malware Analysis Basics",
        ],
      },
      {
        title: "Red Team Operations",
        description:
          "Advanced training in red team tactics, techniques, and procedures for comprehensive security assessments.",
        badge: "Expert",
        features: [
          "Advanced Persistent Threats",
          "Command & Control Systems",
          "Lateral Movement Techniques",
          "Evasion & Anti-Forensics",
        ],
      },
    ],
  })

  // About Content
  const [aboutContent, setAboutContent] = useState({
    title: "About AlphaSploit",
    subtitle: "Leading the Future of Cybersecurity Education",
    description:
      "AlphaSploit is a premier cybersecurity training company dedicated to providing world-class education and hands-on experience in the field of information security.",
    mission:
      "To empower individuals and organizations with the knowledge and skills needed to defend against evolving cyber threats.",
    vision:
      "To be the global leader in cybersecurity education, creating a safer digital world through expert training and education.",
    values: [
      "Excellence in Education",
      "Hands-on Learning",
      "Industry Relevance",
      "Ethical Practices",
      "Continuous Innovation",
    ],
  })

  // Contact Information
  const [contactContent, setContactContent] = useState({
    title: "Get In Touch",
    description:
      "Ready to start your cybersecurity journey? Contact us today to learn more about our training programs.",
    locations: [
      {
        country: "Somalia",
        address: "Wadada Shaqaalaha, Mogadishu, Somalia",
        phone: "+252 61 234 5678",
        email: "info@alphasploit.com",
        hours: "Sunday - Thursday: 8:00 AM - 6:00 PM",
      },
    ],
    socialMedia: {
      facebook: "https://facebook.com/alphasploit",
      twitter: "https://twitter.com/alphasploit",
      linkedin: "https://linkedin.com/company/alphasploit",
      youtube: "https://youtube.com/alphasploit",
    },
  })

  const handleSave = (section: string) => {
    // Handle save logic here
    console.log(`Saving ${section} content`)
    alert(`${section} content saved successfully!`)
    setIsEditing(false)
  }

  const contentSections = [
    { id: "hero", label: "Hero Section", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "about", label: "About Us", icon: Info },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "footer", label: "Footer", icon: Globe },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Content Manager
          </h1>
          <p className="text-gray-600">Manage all website content from one central location</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-accent border-accent/20 bg-accent/10">
            <FileText className="w-3 h-3 mr-1" />
            Content Management
          </Badge>
          <Button
            onClick={() => handleSave(activeSection)}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <Card className="border-none shadow-wolf">
          <CardHeader>
            <CardTitle className="text-lg">Content Sections</CardTitle>
            <CardDescription>Select a section to edit</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {contentSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-l-4 border-primary"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Editor */}
        <div className="lg:col-span-3 space-y-6">
          {/* Hero Section */}
          {activeSection === "hero" && (
            <Card className="border-none shadow-wolf">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-5 w-5 text-primary" />
                  Hero Section
                </CardTitle>
                <CardDescription>Manage the main hero section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-badge">Hero Badge</Label>
                    <Input
                      id="hero-badge"
                      value={heroContent.badge}
                      onChange={(e) => setHeroContent({ ...heroContent, badge: e.target.value })}
                      placeholder="Enter hero badge text"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hero-title-1">Title Part 1</Label>
                      <Input
                        id="hero-title-1"
                        value={heroContent.title.part1}
                        onChange={(e) =>
                          setHeroContent({
                            ...heroContent,
                            title: { ...heroContent.title, part1: e.target.value },
                          })
                        }
                        placeholder="First part of title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-title-2">Title Part 2</Label>
                      <Input
                        id="hero-title-2"
                        value={heroContent.title.part2}
                        onChange={(e) =>
                          setHeroContent({
                            ...heroContent,
                            title: { ...heroContent.title, part2: e.target.value },
                          })
                        }
                        placeholder="Second part of title"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hero-description">Description</Label>
                    <Textarea
                      id="hero-description"
                      value={heroContent.description}
                      onChange={(e) => setHeroContent({ ...heroContent, description: e.target.value })}
                      placeholder="Hero section description"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-cta">Primary CTA Button</Label>
                      <Input
                        id="primary-cta"
                        value={heroContent.primaryCTA}
                        onChange={(e) => setHeroContent({ ...heroContent, primaryCTA: e.target.value })}
                        placeholder="Primary button text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-cta">Secondary CTA Button</Label>
                      <Input
                        id="secondary-cta"
                        value={heroContent.secondaryCTA}
                        onChange={(e) => setHeroContent({ ...heroContent, secondaryCTA: e.target.value })}
                        placeholder="Secondary button text"
                      />
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Statistics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {heroContent.stats.map((stat, index) => (
                        <div key={index} className="p-4 border rounded-lg space-y-2">
                          <div className="flex items-center justify-between">
                            <Label>Stat {index + 1}</Label>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                          <Input
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...heroContent.stats]
                              newStats[index].label = e.target.value
                              setHeroContent({ ...heroContent, stats: newStats })
                            }}
                            placeholder="Stat label"
                          />
                          <Input
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...heroContent.stats]
                              newStats[index].value = e.target.value
                              setHeroContent({ ...heroContent, stats: newStats })
                            }}
                            placeholder="Stat value"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Services Section */}
          {activeSection === "services" && (
            <Card className="border-none shadow-wolf">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-primary" />
                  Services Section
                </CardTitle>
                <CardDescription>Manage your service offerings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="services-badge">Services Badge</Label>
                    <Input
                      id="services-badge"
                      value={servicesContent.badge}
                      onChange={(e) => setServicesContent({ ...servicesContent, badge: e.target.value })}
                      placeholder="Services section badge"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services-title">Section Title</Label>
                    <Input
                      id="services-title"
                      value={servicesContent.title}
                      onChange={(e) => setServicesContent({ ...servicesContent, title: e.target.value })}
                      placeholder="Services section title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services-description">Section Description</Label>
                    <Textarea
                      id="services-description"
                      value={servicesContent.description}
                      onChange={(e) => setServicesContent({ ...servicesContent, description: e.target.value })}
                      placeholder="Services section description"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Individual Services */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">Service Items</h4>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Service
                    </Button>
                  </div>

                  {servicesContent.services.map((service, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Service {index + 1}</CardTitle>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Service Title</Label>
                            <Input
                              value={service.title}
                              onChange={(e) => {
                                const newServices = [...servicesContent.services]
                                newServices[index].title = e.target.value
                                setServicesContent({ ...servicesContent, services: newServices })
                              }}
                              placeholder="Service title"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Badge</Label>
                            <Input
                              value={service.badge}
                              onChange={(e) => {
                                const newServices = [...servicesContent.services]
                                newServices[index].badge = e.target.value
                                setServicesContent({ ...servicesContent, services: newServices })
                              }}
                              placeholder="Service badge"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            value={service.description}
                            onChange={(e) => {
                              const newServices = [...servicesContent.services]
                              newServices[index].description = e.target.value
                              setServicesContent({ ...servicesContent, services: newServices })
                            }}
                            placeholder="Service description"
                            rows={3}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Features (one per line)</Label>
                          <Textarea
                            value={service.features.join("\n")}
                            onChange={(e) => {
                              const newServices = [...servicesContent.services]
                              newServices[index].features = e.target.value.split("\n").filter((f) => f.trim())
                              setServicesContent({ ...servicesContent, services: newServices })
                            }}
                            placeholder="Enter features, one per line"
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <Card className="border-none shadow-wolf">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-primary" />
                  About Us Section
                </CardTitle>
                <CardDescription>Manage your company information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="about-title">Page Title</Label>
                    <Input
                      id="about-title"
                      value={aboutContent.title}
                      onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
                      placeholder="About page title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about-subtitle">Subtitle</Label>
                    <Input
                      id="about-subtitle"
                      value={aboutContent.subtitle}
                      onChange={(e) => setAboutContent({ ...aboutContent, subtitle: e.target.value })}
                      placeholder="About page subtitle"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about-description">Description</Label>
                    <Textarea
                      id="about-description"
                      value={aboutContent.description}
                      onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })}
                      placeholder="Company description"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about-mission">Mission Statement</Label>
                    <Textarea
                      id="about-mission"
                      value={aboutContent.mission}
                      onChange={(e) => setAboutContent({ ...aboutContent, mission: e.target.value })}
                      placeholder="Company mission"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about-vision">Vision Statement</Label>
                    <Textarea
                      id="about-vision"
                      value={aboutContent.vision}
                      onChange={(e) => setAboutContent({ ...aboutContent, vision: e.target.value })}
                      placeholder="Company vision"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about-values">Company Values (one per line)</Label>
                    <Textarea
                      id="about-values"
                      value={aboutContent.values.join("\n")}
                      onChange={(e) =>
                        setAboutContent({
                          ...aboutContent,
                          values: e.target.value.split("\n").filter((v) => v.trim()),
                        })
                      }
                      placeholder="Enter company values, one per line"
                      rows={5}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <Card className="border-none shadow-wolf">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>Manage contact details and locations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-title">Section Title</Label>
                    <Input
                      id="contact-title"
                      value={contactContent.title}
                      onChange={(e) => setContactContent({ ...contactContent, title: e.target.value })}
                      placeholder="Contact section title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-description">Description</Label>
                    <Textarea
                      id="contact-description"
                      value={contactContent.description}
                      onChange={(e) => setContactContent({ ...contactContent, description: e.target.value })}
                      placeholder="Contact section description"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Location Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Location Information</h4>
                  {contactContent.locations.map((location, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Location {index + 1}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Country</Label>
                            <Input
                              value={location.country}
                              onChange={(e) => {
                                const newLocations = [...contactContent.locations]
                                newLocations[index].country = e.target.value
                                setContactContent({ ...contactContent, locations: newLocations })
                              }}
                              placeholder="Country"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Phone</Label>
                            <Input
                              value={location.phone}
                              onChange={(e) => {
                                const newLocations = [...contactContent.locations]
                                newLocations[index].phone = e.target.value
                                setContactContent({ ...contactContent, locations: newLocations })
                              }}
                              placeholder="Phone number"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Address</Label>
                          <Textarea
                            value={location.address}
                            onChange={(e) => {
                              const newLocations = [...contactContent.locations]
                              newLocations[index].address = e.target.value
                              setContactContent({ ...contactContent, locations: newLocations })
                            }}
                            placeholder="Full address"
                            rows={2}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Email</Label>
                            <Input
                              value={location.email}
                              onChange={(e) => {
                                const newLocations = [...contactContent.locations]
                                newLocations[index].email = e.target.value
                                setContactContent({ ...contactContent, locations: newLocations })
                              }}
                              placeholder="Email address"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Business Hours</Label>
                            <Input
                              value={location.hours}
                              onChange={(e) => {
                                const newLocations = [...contactContent.locations]
                                newLocations[index].hours = e.target.value
                                setContactContent({ ...contactContent, locations: newLocations })
                              }}
                              placeholder="Business hours"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Media */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Social Media Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Facebook</Label>
                      <Input
                        value={contactContent.socialMedia.facebook}
                        onChange={(e) =>
                          setContactContent({
                            ...contactContent,
                            socialMedia: { ...contactContent.socialMedia, facebook: e.target.value },
                          })
                        }
                        placeholder="Facebook URL"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Twitter</Label>
                      <Input
                        value={contactContent.socialMedia.twitter}
                        onChange={(e) =>
                          setContactContent({
                            ...contactContent,
                            socialMedia: { ...contactContent.socialMedia, twitter: e.target.value },
                          })
                        }
                        placeholder="Twitter URL"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>LinkedIn</Label>
                      <Input
                        value={contactContent.socialMedia.linkedin}
                        onChange={(e) =>
                          setContactContent({
                            ...contactContent,
                            socialMedia: { ...contactContent.socialMedia, linkedin: e.target.value },
                          })
                        }
                        placeholder="LinkedIn URL"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>YouTube</Label>
                      <Input
                        value={contactContent.socialMedia.youtube}
                        onChange={(e) =>
                          setContactContent({
                            ...contactContent,
                            socialMedia: { ...contactContent.socialMedia, youtube: e.target.value },
                          })
                        }
                        placeholder="YouTube URL"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other sections can be added here */}
          {activeSection === "testimonials" && (
            <Card className="border-none shadow-wolf">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  Testimonials
                </CardTitle>
                <CardDescription>Manage customer testimonials and reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Testimonials Management</h3>
                  <p className="text-gray-500 mb-4">Add, edit, and manage customer testimonials</p>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Testimonial
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "footer" && (
            <Card className="border-none shadow-wolf">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" />
                  Footer Content
                </CardTitle>
                <CardDescription>Manage footer links and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Globe className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Footer Management</h3>
                  <p className="text-gray-500 mb-4">Customize footer content and links</p>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Footer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
