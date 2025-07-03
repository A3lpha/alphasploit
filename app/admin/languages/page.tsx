"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Download, Upload, Save, RefreshCw, CheckCircle, AlertCircle, Languages } from "lucide-react"

export default function LanguagesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedKey, setSelectedKey] = useState("")
  const [newKey, setNewKey] = useState("")
  const [newValue, setNewValue] = useState("")

  const languages = [
    {
      code: "en",
      name: "English",
      nativeName: "English",
      status: "active",
      progress: 100,
      lastUpdated: "2024-01-15",
      isDefault: true,
      description: "Primary language for the platform",
    },
    {
      code: "so",
      name: "Somali",
      nativeName: "Soomaali",
      status: "active",
      progress: 95,
      lastUpdated: "2024-01-14",
      isDefault: false,
      description: "Main local language for Somalia region",
    },
    {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
      status: "draft",
      progress: 45,
      lastUpdated: "2024-01-10",
      isDefault: false,
      description: "Arabic language support for Middle East users",
    },
    {
      code: "sw",
      name: "Swahili",
      nativeName: "Kiswahili",
      status: "draft",
      progress: 20,
      lastUpdated: "2024-01-08",
      isDefault: false,
      description: "East African language for Kenya, Tanzania users",
    },
  ]

  const translationKeys = [
    {
      key: "nav.home",
      en: "Home",
      so: "Guriga",
      ar: "الرئيسية",
      sw: "Nyumbani",
      category: "navigation",
      description: "Main navigation home link",
    },
    {
      key: "nav.about",
      en: "About",
      so: "Ku saabsan",
      ar: "حول",
      sw: "Kuhusu",
      category: "navigation",
      description: "About us page navigation link",
    },
    {
      key: "nav.services",
      en: "Services",
      so: "Adeegyada",
      ar: "الخدمات",
      sw: "Huduma",
      category: "navigation",
      description: "Services page navigation link",
    },
    {
      key: "nav.workshops",
      en: "Workshops",
      so: "Tababarada",
      ar: "ورش العمل",
      sw: "Warsha",
      category: "navigation",
      description: "Workshops page navigation link",
    },
    {
      key: "nav.contact",
      en: "Contact",
      so: "Xiriir",
      ar: "اتصل",
      sw: "Wasiliana",
      category: "navigation",
      description: "Contact page navigation link",
    },
    {
      key: "hero.title",
      en: "Master Cybersecurity With AlphaSploit",
      so: "Ku takhasuska Amniga Teknoolajiyada AlphaSploit",
      ar: "إتقان الأمن السيبراني مع AlphaSploit",
      sw: "Ujuzi wa Usalama wa Mtandao na AlphaSploit",
      category: "hero",
      description: "Main hero section title",
    },
    {
      key: "hero.description",
      en: "Transform your career with our comprehensive cybersecurity training programs.",
      so: "Bedel shaqadaada barnaamijyada tababarka amniga teknoolajiyada oo dhamaystiran.",
      ar: "حول مسيرتك المهنية مع برامج التدريب الشاملة للأمن السيبراني.",
      sw: "Badilisha kazi yako na mipango yetu kamili ya mafunzo ya usalama wa mtandao.",
      category: "hero",
      description: "Hero section description text",
    },
    {
      key: "button.learn_more",
      en: "Learn More",
      so: "Baro wax dheeraad ah",
      ar: "اعرف المزيد",
      sw: "Jifunze Zaidi",
      category: "buttons",
      description: "Learn more button text",
    },
    {
      key: "button.get_started",
      en: "Get Started",
      so: "Bilow",
      ar: "ابدأ",
      sw: "Anza",
      category: "buttons",
      description: "Get started button text",
    },
  ]

  const categories = ["navigation", "hero", "buttons", "forms", "content", "footer"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-green-500"
    if (progress >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const handleAddTranslation = () => {
    if (newKey && newValue) {
      alert(`Added translation: ${newKey} = ${newValue}`)
      setNewKey("")
      setNewValue("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Language Management</h1>
          <p className="text-muted-foreground">
            Manage translations, add new languages, and configure multi-language support for your platform
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Translations
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Language
          </Button>
        </div>
      </div>

      {/* Language Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {languages.map((lang) => (
          <Card key={lang.code}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{lang.name}</h3>
                  <p className="text-sm text-muted-foreground">{lang.nativeName}</p>
                  <p className="text-xs text-muted-foreground mt-1">{lang.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge className={getStatusColor(lang.status)}>{lang.status}</Badge>
                  {lang.isDefault && <Badge variant="outline">Default</Badge>}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Translation Progress</span>
                  <span>{lang.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(lang.progress)}`}
                    style={{ width: `${lang.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">Last updated: {lang.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="translations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="translations">Translation Editor</TabsTrigger>
          <TabsTrigger value="import-export">Import/Export</TabsTrigger>
          <TabsTrigger value="settings">Language Settings</TabsTrigger>
        </TabsList>

        {/* Translations */}
        <TabsContent value="translations">
          <Card>
            <CardHeader>
              <CardTitle>Translation Editor</CardTitle>
              <CardDescription>Edit and manage translations for different languages and content areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <Label>Target Language</Label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name} ({lang.nativeName})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label>Content Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label>Search Translations</Label>
                  <Input placeholder="Search translation keys..." />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Translation Key</TableHead>
                    <TableHead>English (Source)</TableHead>
                    <TableHead>{languages.find((l) => l.code === selectedLanguage)?.name}</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {translationKeys.map((item) => (
                    <TableRow key={item.key}>
                      <TableCell>
                        <div>
                          <div className="font-mono text-sm">{item.key}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>{item.en}</TableCell>
                      <TableCell>
                        <Input
                          value={item[selectedLanguage as keyof typeof item] || ""}
                          placeholder="Enter translation..."
                          className="min-w-0"
                        />
                      </TableCell>
                      <TableCell>
                        {item[selectedLanguage as keyof typeof item] ? (
                          <CheckCircle className="h-4 w-4 text-green-600" title="Translated" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-600" title="Missing Translation" />
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" title="Edit Translation">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Save Translation">
                            <Save className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 border-t pt-6">
                <h4 className="font-medium mb-4">Add New Translation Key</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Translation key (e.g., button.save)"
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                  />
                  <Input placeholder="English text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                  <Button onClick={handleAddTranslation}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Translation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Import/Export */}
        <TabsContent value="import-export">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Import Translations</CardTitle>
                <CardDescription>Import translations from external files (JSON, CSV, or Excel)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Upload Translation File</h3>
                  <p className="text-gray-500 mb-4">Supports JSON, CSV, and Excel (XLSX) formats</p>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Translation File
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">Maximum file size: 10MB</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Target Language</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language to import to" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name} ({lang.nativeName})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">Import Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Label>Overwrite existing translations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Validate translations before import</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Create backup before import</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Translations
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Translations</CardTitle>
                <CardDescription>Export translations for external editing or backup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Languages to Export</Label>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {languages.map((lang) => (
                        <div key={lang.code} className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">
                            {lang.name} ({lang.nativeName}) - {lang.progress}% complete
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Export Format</Label>
                    <Select defaultValue="json">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="json">JSON (Recommended)</SelectItem>
                        <SelectItem value="csv">CSV (Comma Separated)</SelectItem>
                        <SelectItem value="xlsx">Excel (XLSX)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Content Categories</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">Export Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Label>Include empty translations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Include translation descriptions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Label>Include metadata (last updated, status)</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Export Translations
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings */}
        <TabsContent value="settings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Language Configuration</CardTitle>
                <CardDescription>Configure default language behavior and user preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Default Platform Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages
                        .filter((lang) => lang.status === "active")
                        .map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name} ({lang.nativeName})
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Language shown to new visitors</p>
                </div>

                <div className="space-y-2">
                  <Label>Fallback Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages
                        .filter((lang) => lang.status === "active")
                        .map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name} ({lang.nativeName})
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Used when translation is missing</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Auto-detect User Language</Label>
                    <p className="text-sm text-muted-foreground">Detect language from browser settings</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Show Language Switcher</Label>
                    <p className="text-sm text-muted-foreground">Display language selector in navigation</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">RTL Text Support</Label>
                    <p className="text-sm text-muted-foreground">Enable right-to-left text direction for Arabic</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Remember User Choice</Label>
                    <p className="text-sm text-muted-foreground">Save selected language in browser</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Translation Tools & Automation</CardTitle>
                <CardDescription>Tools to help manage and automate translation workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Sync Missing Translation Keys
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Scan your codebase and add any missing translation keys across all languages
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Languages className="h-4 w-4 mr-2" />
                    Auto-translate Missing Content
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Use machine translation to fill missing translations (requires API key)
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Validate All Translations
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Check for missing translations, formatting issues, and inconsistencies
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Google Translate API Key</Label>
                  <Input type="password" placeholder="Enter your Google Translate API key" />
                  <p className="text-xs text-muted-foreground">
                    Required for auto-translation features. Get your key from Google Cloud Console.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Translation Quality Threshold</Label>
                  <Select defaultValue="high">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Fast, less accurate)</SelectItem>
                      <SelectItem value="medium">Medium (Balanced)</SelectItem>
                      <SelectItem value="high">High (Slower, more accurate)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Higher quality takes longer but produces better translations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Language Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
