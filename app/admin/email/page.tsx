"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, Users, Plus, Edit, Trash2, Eye, Copy, Download } from "lucide-react"

export default function EmailManagementPage() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
  })

  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailContent, setEmailContent] = useState("")

  const emailTemplates = [
    {
      id: 1,
      name: "Workshop Registration Confirmation",
      subject: "Welcome to {{workshop_name}} - Registration Confirmed",
      content:
        "Dear {{user_name}},\n\nThank you for registering for {{workshop_name}}. We're excited to have you join us!\n\nWorkshop Details:\n- Date: {{workshop_date}}\n- Time: {{workshop_time}}\n- Location: {{workshop_location}}\n\nWhat to bring:\n- Laptop with internet connection\n- Notebook for taking notes\n- Enthusiasm to learn!\n\nIf you have any questions, please don't hesitate to contact us.\n\nBest regards,\nThe AlphaSploit Team",
      category: "registration",
      lastUsed: "2024-01-15",
      timesUsed: 45,
    },
    {
      id: 2,
      name: "Workshop Reminder",
      subject: "Reminder: {{workshop_name}} starts tomorrow",
      content:
        "Hi {{user_name}},\n\nThis is a friendly reminder that {{workshop_name}} starts tomorrow at {{workshop_time}}.\n\nLocation: {{workshop_location}}\n\nRemember to bring:\n- Your laptop\n- Notebook\n- Any materials we mentioned in the registration email\n\nWe're looking forward to seeing you there!\n\nBest regards,\nThe AlphaSploit Team",
      category: "reminder",
      lastUsed: "2024-01-14",
      timesUsed: 32,
    },
    {
      id: 3,
      name: "Certificate Ready",
      subject: "Your {{workshop_name}} Certificate is Ready",
      content:
        "Congratulations {{user_name}}!\n\nYour certificate for completing {{workshop_name}} is now ready for download.\n\nYou can download your certificate by clicking the link below:\n{{certificate_link}}\n\nThank you for participating in our workshop. We hope you found it valuable and informative.\n\nKeep learning and stay secure!\n\nBest regards,\nThe AlphaSploit Team",
      category: "certificate",
      lastUsed: "2024-01-13",
      timesUsed: 28,
    },
    {
      id: 4,
      name: "Welcome Email",
      subject: "Welcome to AlphaSploit - Your Cybersecurity Journey Begins",
      content:
        "Welcome {{user_name}}!\n\nWe're excited to have you join the AlphaSploit community. You've taken the first step towards mastering cybersecurity.\n\nHere's what you can expect:\n- Expert-led workshops and training\n- Hands-on practical exercises\n- Industry-recognized certifications\n- A supportive learning community\n\nTo get started:\n1. Complete your profile setup\n2. Browse our available workshops\n3. Join our community forum\n\nIf you have any questions, our support team is here to help.\n\nWelcome aboard!\n\nThe AlphaSploit Team",
      category: "welcome",
      lastUsed: "2024-01-12",
      timesUsed: 156,
    },
  ]

  const emailCampaigns = [
    {
      id: 1,
      name: "January Workshop Promotion",
      subject: "New Year, New Skills - 30% Off All Workshops",
      recipients: 1247,
      sent: 1247,
      opened: 892,
      clicked: 234,
      status: "completed",
      sentDate: "2024-01-10",
      description: "Promotional campaign for January workshops with special discount offer",
    },
    {
      id: 2,
      name: "SOC Analyst Course Launch",
      subject: "Master SOC Analysis - New Course Available",
      recipients: 856,
      sent: 856,
      opened: 645,
      clicked: 178,
      status: "completed",
      sentDate: "2024-01-08",
      description: "Launch announcement for the new SOC Analyst certification course",
    },
    {
      id: 3,
      name: "Weekly Newsletter #4",
      subject: "Cybersecurity News & Tips - Week 4",
      recipients: 2134,
      sent: 0,
      opened: 0,
      clicked: 0,
      status: "scheduled",
      sentDate: "2024-01-20",
      description: "Weekly newsletter with latest cybersecurity news and practical tips",
    },
  ]

  const subscribers = [
    {
      id: 1,
      email: "ahmed.hassan@email.com",
      name: "Ahmed Hassan",
      status: "active",
      subscribed: "2024-01-15",
      tags: ["student", "penetration-testing"],
      location: "Mogadishu, Somalia",
      lastActivity: "2024-01-15",
    },
    {
      id: 2,
      email: "fatima.ali@email.com",
      name: "Fatima Ali",
      status: "active",
      subscribed: "2024-01-14",
      tags: ["student", "soc-analyst"],
      location: "Hargeisa, Somalia",
      lastActivity: "2024-01-14",
    },
    {
      id: 3,
      email: "mohamed.omar@email.com",
      name: "Mohamed Omar",
      status: "unsubscribed",
      subscribed: "2024-01-10",
      tags: ["corporate"],
      location: "Nairobi, Kenya",
      lastActivity: "2024-01-12",
    },
  ]

  const handleSendEmail = () => {
    console.log("Sending email:", emailData)
    alert("Email sent successfully!")
    setEmailData({ to: "", subject: "", message: "" })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Email Management</h1>
          <p className="text-muted-foreground">
            Send emails, manage campaigns, templates, and subscribers for your cybersecurity platform
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Subscribers</p>
                <p className="text-2xl font-bold">2,134</p>
                <p className="text-xs text-muted-foreground">Active email subscribers</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Emails Sent</p>
                <p className="text-2xl font-bold">15,420</p>
                <p className="text-xs text-muted-foreground">Total emails delivered</p>
              </div>
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Rate</p>
                <p className="text-2xl font-bold">68.5%</p>
                <p className="text-xs text-muted-foreground">Average email open rate</p>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Click Rate</p>
                <p className="text-2xl font-bold">24.3%</p>
                <p className="text-xs text-muted-foreground">Average click-through rate</p>
              </div>
              <Send className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="compose" className="space-y-6">
        <TabsList>
          <TabsTrigger value="compose">Compose Email</TabsTrigger>
          <TabsTrigger value="templates">Email Templates</TabsTrigger>
          <TabsTrigger value="campaigns">Email Campaigns</TabsTrigger>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
          <TabsTrigger value="settings">SMTP Settings</TabsTrigger>
        </TabsList>

        {/* Compose Email */}
        <TabsContent value="compose">
          <Card>
            <CardHeader>
              <CardTitle>Compose Email</CardTitle>
              <CardDescription>Create and send emails to your subscribers or specific recipients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="template">Use Template (Optional)</Label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template to start with" />
                    </SelectTrigger>
                    <SelectContent>
                      {emailTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id.toString()}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipients">Recipients</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select who to send to" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subscribers (2,134)</SelectItem>
                      <SelectItem value="students">Students Only (1,856)</SelectItem>
                      <SelectItem value="corporate">Corporate (278)</SelectItem>
                      <SelectItem value="custom">Custom Email Address</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject Line</Label>
                <Input
                  id="subject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Enter a compelling subject line"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Email Content</Label>
                <Textarea
                  id="content"
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Write your email content here. You can use variables like {{user_name}}, {{workshop_name}}, etc."
                  rows={12}
                />
                <p className="text-xs text-muted-foreground">
                  Tip: Use variables like {`{{user_name}}`}, {`{{workshop_name}}`}, {`{{workshop_date}}`} to personalize
                  emails
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Email
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">Schedule for Later</Button>
                  <Button onClick={handleSendEmail}>
                    <Send className="h-4 w-4 mr-2" />
                    Send Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Templates */}
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Pre-built email templates for common communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emailTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{template.name}</h4>
                        <p className="text-sm text-muted-foreground">{template.subject}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span>Used {template.timesUsed} times</span>
                          <span>Last used: {template.lastUsed}</span>
                          <Badge variant="outline">{template.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                          {template.content.substring(0, 100)}...
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" title="Preview Template">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Copy Template">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Edit Template">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Delete Template">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Campaigns */}
        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <CardTitle>Email Campaigns</CardTitle>
              <CardDescription>Track performance of your email marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign Details</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Delivery</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{campaign.name}</div>
                          <div className="text-sm text-muted-foreground">{campaign.subject}</div>
                          <div className="text-xs text-muted-foreground mt-1">{campaign.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-center">
                          <div className="font-medium">{campaign.recipients.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">targeted</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-center">
                          <div className="font-medium">{campaign.sent.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">sent</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {campaign.opened > 0 ? (
                          <div className="text-center">
                            <div className="font-medium">{campaign.opened.toLocaleString()} opened</div>
                            <div className="text-sm text-muted-foreground">
                              {((campaign.opened / campaign.sent) * 100).toFixed(1)}% open rate
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {campaign.clicked.toLocaleString()} clicked (
                              {((campaign.clicked / campaign.sent) * 100).toFixed(1)}%)
                            </div>
                          </div>
                        ) : (
                          <div className="text-center text-muted-foreground">
                            <div>Not sent yet</div>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {campaign.status === "scheduled"
                            ? `Scheduled: ${campaign.sentDate}`
                            : `Sent: ${campaign.sentDate}`}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" title="View Details">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Download Report">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subscribers */}
        <TabsContent value="subscribers">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Send Quick Email</CardTitle>
                <CardDescription>Send a quick email to a specific subscriber</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Recipient email address"
                  value={emailData.to}
                  onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                />
                <Input
                  placeholder="Email subject"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                />
                <Textarea
                  placeholder="Email message"
                  rows={6}
                  value={emailData.message}
                  onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                />
                <Button onClick={handleSendEmail} className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscriber Management</CardTitle>
                <CardDescription>Manage your email subscribers ({subscribers.length} total)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium">{subscriber.name}</div>
                          <div className="text-sm text-muted-foreground">{subscriber.email}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {subscriber.location} • Subscribed: {subscriber.subscribed}
                          </div>
                          <div className="flex space-x-1 mt-2">
                            {subscriber.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge
                            className={
                              subscriber.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }
                          >
                            {subscriber.status}
                          </Badge>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" title="Edit Subscriber">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" title="Remove Subscriber">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Subscriber
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>SMTP Email Settings</CardTitle>
              <CardDescription>Configure your email server settings for sending emails</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">SMTP Server Configuration</h4>
                  <div className="space-y-2">
                    <Label>SMTP Server Host</Label>
                    <Input placeholder="smtp.gmail.com" />
                    <p className="text-xs text-muted-foreground">Your email provider's SMTP server address</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Port</Label>
                    <Input placeholder="587" />
                    <p className="text-xs text-muted-foreground">Usually 587 for TLS or 465 for SSL</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Username</Label>
                    <Input placeholder="your-email@gmail.com" />
                    <p className="text-xs text-muted-foreground">Your email address</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <Input type="password" placeholder="Your app password" />
                    <p className="text-xs text-muted-foreground">
                      Use app password for Gmail, not your regular password
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Default Email Settings</h4>
                  <div className="space-y-2">
                    <Label>From Name</Label>
                    <Input placeholder="AlphaSploit Team" />
                    <p className="text-xs text-muted-foreground">Name that appears as sender</p>
                  </div>
                  <div className="space-y-2">
                    <Label>From Email</Label>
                    <Input placeholder="noreply@alphasploit.com" />
                    <p className="text-xs text-muted-foreground">Email address that appears as sender</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Reply To</Label>
                    <Input placeholder="support@alphasploit.com" />
                    <p className="text-xs text-muted-foreground">Where replies will be sent</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Unsubscribe URL</Label>
                    <Input placeholder="https://alphasploit.com/unsubscribe" />
                    <p className="text-xs text-muted-foreground">Link for users to unsubscribe</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Test Email Connection</Button>
                  <Button>Save SMTP Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
