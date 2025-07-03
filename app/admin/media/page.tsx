"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ImageIcon,
  Upload,
  Search,
  Filter,
  Grid,
  List,
  Trash2,
  Edit,
  Eye,
  Download,
  Plus,
  Folder,
  File,
  Video,
  Music,
} from "lucide-react"

export default function MediaLibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const mediaItems = [
    {
      id: 1,
      name: "alphasploit-logo-new.png",
      type: "image",
      size: "45 KB",
      dimensions: "512x512",
      uploadDate: "2024-01-15",
      category: "logos",
      url: "/images/alphasploit-logo-new.png",
      thumbnail: "/images/alphasploit-logo-new.png",
    },
    {
      id: 2,
      name: "cybersecurity-hero.jpg",
      type: "image",
      size: "2.3 MB",
      dimensions: "1920x1080",
      uploadDate: "2024-01-14",
      category: "heroes",
      url: "/images/cybersecurity-hero.jpg",
      thumbnail: "/images/cybersecurity-hero.jpg",
    },
    {
      id: 3,
      name: "armored-wolf-warrior.jpg",
      type: "image",
      size: "1.8 MB",
      dimensions: "800x800",
      uploadDate: "2024-01-13",
      category: "testimonials",
      url: "/images/armored-wolf-warrior.jpg",
      thumbnail: "/images/armored-wolf-warrior.jpg",
    },
    {
      id: 4,
      name: "cartoon-hacker.jpg",
      type: "image",
      size: "1.2 MB",
      dimensions: "1024x768",
      uploadDate: "2024-01-12",
      category: "illustrations",
      url: "/images/cartoon-hacker.jpg",
      thumbnail: "/images/cartoon-hacker.jpg",
    },
    {
      id: 5,
      name: "hacker-setup.jpg",
      type: "image",
      size: "2.1 MB",
      dimensions: "1600x900",
      uploadDate: "2024-01-11",
      category: "backgrounds",
      url: "/images/hacker-setup.jpg",
      thumbnail: "/images/hacker-setup.jpg",
    },
    {
      id: 6,
      name: "ninja-warrior.jpg",
      type: "image",
      size: "1.5 MB",
      dimensions: "1200x800",
      uploadDate: "2024-01-10",
      category: "illustrations",
      url: "/images/ninja-warrior.jpg",
      thumbnail: "/images/ninja-warrior.jpg",
    },
  ]

  const categories = [
    { id: "all", name: "All Media", count: mediaItems.length },
    { id: "logos", name: "Logos", count: mediaItems.filter((item) => item.category === "logos").length },
    { id: "heroes", name: "Hero Images", count: mediaItems.filter((item) => item.category === "heroes").length },
    {
      id: "testimonials",
      name: "Testimonials",
      count: mediaItems.filter((item) => item.category === "testimonials").length,
    },
    {
      id: "illustrations",
      name: "Illustrations",
      count: mediaItems.filter((item) => item.category === "illustrations").length,
    },
    {
      id: "backgrounds",
      name: "Backgrounds",
      count: mediaItems.filter((item) => item.category === "backgrounds").length,
    },
  ]

  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return ImageIcon
      case "video":
        return Video
      case "audio":
        return Music
      default:
        return File
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Media Library
          </h1>
          <p className="text-gray-600">Manage all your website media files</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-accent border-accent/20 bg-accent/10">
            <ImageIcon className="w-3 h-3 mr-1" />
            {filteredItems.length} Files
          </Badge>
          <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <Upload className="h-4 w-4 mr-2" />
            Upload Media
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Card className="border-none shadow-wolf">
          <CardHeader>
            <CardTitle className="text-lg">Categories</CardTitle>
            <CardDescription>Filter by media type</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-l-4 border-primary"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Folder className="h-4 w-4" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Controls */}
          <Card className="border-none shadow-wolf">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search media files..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Grid/List */}
          <Card className="border-none shadow-wolf">
            <CardContent className="p-6">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredItems.map((item) => {
                    const FileIcon = getFileIcon(item.type)
                    return (
                      <div
                        key={item.id}
                        className="group relative bg-white border rounded-lg p-3 hover:shadow-wolf transition-all duration-200 cursor-pointer"
                      >
                        <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                          {item.type === "image" ? (
                            <img
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileIcon className="h-12 w-12 text-gray-400" />
                            </div>
                          )}
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-medium text-sm text-gray-900 truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.size}</p>
                          {item.dimensions && <p className="text-xs text-gray-500">{item.dimensions}</p>}
                        </div>

                        {/* Hover Actions */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="flex space-x-1">
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0 text-red-600">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="text-xs capitalize">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredItems.map((item) => {
                    const FileIcon = getFileIcon(item.type)
                    return (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 p-3 border rounded-lg hover:shadow-wolf transition-all duration-200 cursor-pointer group"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                          {item.type === "image" ? (
                            <img
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <FileIcon className="h-6 w-6 text-gray-400" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{item.size}</span>
                            {item.dimensions && <span>{item.dimensions}</span>}
                            <span>{item.uploadDate}</span>
                            <Badge variant="secondary" className="text-xs capitalize">
                              {item.category}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <ImageIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No media files found</h3>
                  <p className="text-gray-500 mb-4">
                    {searchTerm ? "Try adjusting your search terms" : "Upload your first media file to get started"}
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Media
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upload Area */}
          <Card className="border-none shadow-wolf">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5 text-primary" />
                Quick Upload
              </CardTitle>
              <CardDescription>Drag and drop files or click to browse</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors duration-200 cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Drop files here to upload</h3>
                <p className="text-gray-500 mb-4">Supports JPG, PNG, GIF, MP4, PDF up to 10MB</p>
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
