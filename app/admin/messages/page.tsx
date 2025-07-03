"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  MoreHorizontal,
  Reply,
  Archive,
  Trash2,
  MessageSquare,
  Mail,
  Clock,
  Send,
  Star,
  StarOff,
} from "lucide-react"

export default function MessagesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [replyText, setReplyText] = useState("")

  const messages = [
    {
      id: 1,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@email.com",
      subject: "Question about Advanced Penetration Testing Workshop",
      message:
        "Assalamu alaikum, I'm interested in the Advanced Penetration Testing Workshop. Can you provide more details about the prerequisites and what tools we'll be using? Also, will there be hands-on labs? Jazakallahu khairan.",
      date: "2024-12-10",
      time: "2:30 PM",
      status: "unread",
      priority: "normal",
      starred: false,
      language: "en",
    },
    {
      id: 2,
      name: "Fatima Ali",
      email: "fatima.ali@email.com",
      subject: "Tababarka SOC Analyst - Su'aal",
      message:
        "Assalamu alaikum warahmatullahi wabarakatuh. Waxaan doonayaa inaan ka qayb qaato tababarka SOC Analyst. Ma jiraan shuruudo gaar ah? Waxaan ahay bilaabayaal cybersecurity-ga. Mahadsanid.",
      date: "2024-12-10",
      time: "11:15 AM",
      status: "replied",
      priority: "normal",
      starred: true,
      language: "so",
    },
    {
      id: 3,
      name: "Mohamed Omar",
      email: "mohamed.omar@email.com",
      subject: "Corporate Training Inquiry",
      message:
        "Good morning, I represent a technology company in Mogadishu with 50+ employees. We're interested in corporate cybersecurity training for our IT team. Could you provide information about custom training programs and pricing? We're particularly interested in incident response and network security.",
      date: "2024-12-09",
      time: "4:45 PM",
      status: "unread",
      priority: "high",
      starred: false,
      language: "en",
    },
    {
      id: 4,
      name: "Amina Abdi",
      email: "amina.abdi@email.com",
      subject: "Shahaado iyo Certification",
      message:
        "Assalamu alaikum. Waxaan dhammeeyay tababarka 'Cybersecurity for Beginners'. Goorma ayaan heli karaa shahaadada? Waxaan u baahanahay shahaadada shaqo cusub darteed. Mahadsanid.",
      date: "2024-12-09",
      time: "1:20 PM",
      status: "read",
      priority: "normal",
      starred: false,
      language: "so",
    },
    {
      id: 5,
      name: "Abdi Rahman",
      email: "abdi.rahman@email.com",
      subject: "Technical Issue with Virtual Workshop",
      message:
        "I'm experiencing connectivity issues during the virtual workshop sessions. The video keeps freezing and audio cuts out frequently. I'm using a stable internet connection. Could you please help resolve this? It's affecting my learning experience.",
      date: "2024-12-08",
      time: "6:30 PM",
      status: "replied",
      priority: "high",
      starred: true,
      language: "en",
    },
  ]

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || message.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-800"
      case "read":
        return "bg-blue-100 text-blue-800"
      case "replied":
        return "bg-green-100 text-green-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "normal":
        return "bg-blue-100 text-blue-800"
      case "low":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleReply = () => {
    // Handle reply logic here
    console.log("Replying to message:", selectedMessage?.id, "with:", replyText)
    setReplyText("")
    setSelectedMessage(null)
  }

  const toggleStar = (messageId: number) => {
    // Handle star toggle logic here
    console.log("Toggling star for message:", messageId)
  }

  const unreadCount = messages.filter((m) => m.status === "unread").length
  const highPriorityCount = messages.filter((m) => m.priority === "high").length
  const starredCount = messages.filter((m) => m.starred).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages Management</h1>
          <p className="text-gray-600">Manage customer inquiries and communications</p>
        </div>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Compose Message
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
              </div>
              <Mail className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-gray-900">{highPriorityCount}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Starred</p>
                <p className="text-2xl font-bold text-gray-900">{starredCount}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
          <CardDescription>Customer inquiries and support requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Status: {filterStatus === "all" ? "All" : filterStatus}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterStatus("all")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("unread")}>Unread</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("read")}>Read</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("replied")}>Replied</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("archived")}>Archived</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="w-[70px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => (
                  <TableRow key={message.id} className={message.status === "unread" ? "bg-blue-50" : ""}>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => toggleStar(message.id)} className="p-1">
                        {message.starred ? (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        ) : (
                          <StarOff className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{message.name}</div>
                        <div className="text-sm text-gray-500">{message.email}</div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {message.language === "so" ? "Somali" : "English"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs">
                        <div className={`font-medium ${message.status === "unread" ? "font-bold" : ""}`}>
                          {message.subject}
                        </div>
                        <div className="text-sm text-gray-500 truncate">{message.message}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{message.date}</div>
                        <div className="text-sm text-gray-500">{message.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(message.status)}>{message.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(message.priority)}>{message.priority}</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Reply className="h-4 w-4 mr-2" />
                                Reply
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Reply to {message.name}</DialogTitle>
                                <DialogDescription>Responding to: {message.subject}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                  <div className="text-sm font-medium mb-2">Original Message:</div>
                                  <div className="text-sm text-gray-700">{message.message}</div>
                                </div>
                                <Textarea
                                  placeholder={`Write your reply in ${message.language === "so" ? "Somali or English" : "English"}...`}
                                  value={replyText}
                                  onChange={(e) => setReplyText(e.target.value)}
                                  rows={6}
                                />
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline">Cancel</Button>
                                  <Button onClick={handleReply}>
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Reply
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuItem>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
