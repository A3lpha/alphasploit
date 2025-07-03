"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Globe, Mail, Shield, Bell, Palette, Database, Save, Upload } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "AlphaSploit",
    siteDescription: "Leading Cybersecurity Training Provider",
    contactEmail: "info@alphasploit.com",
    supportEmail: "support@alphasploit.com",
    phone: "+252 61 234 5678",
    address: "Wadada Shaqaalaha, Mogadishu, Somalia",
    defaultLanguage: "en",
    enableRegistrations: true,
    enableNotifications: true,
    enableAnalytics: true,
    maintenanceMode: false,
    maxWorkshopCapacity: 30,
    defaultWorkshopPrice: 199,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  })

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving settings:", settings)
    alert("Settings saved successfully!")
  }

  const handleInputChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your platform configuration and preferences</p>
        </div>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="localization">Localization</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Site Information
                </CardTitle>
                <CardDescription>Basic information about your platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) => handleInputChange("siteName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => handleInputChange("siteDescription", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logo">Site Logo</Label>
                  <div className="flex items-center space-x-4">
                    <img src="/images/alphasploit-logo.png" alt="Current Logo" className="h-12 w-auto" />
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Logo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
                <CardDescription>How users can reach you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => handleInputChange("supportEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={settings.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={settings.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Localization Settings */}
        <TabsContent value="localization">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Language & Localization
              </CardTitle>
              <CardDescription>Configure language and regional settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="defaultLanguage">Default Language</Label>
                  <Select
                    value={settings.defaultLanguage}
                    onValueChange={(value) => handleInputChange("defaultLanguage", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="so">Somali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="eat">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Standard Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Language Support</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">English</div>
                      <div className="text-sm text-gray-500">Primary language for the platform</div>
                    </div>
                    <Switch checked={true} disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Somali</div>
                      <div className="text-sm text-gray-500">Secondary language for local users</div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure how and when notifications are sent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">System Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-500">Send notifications via email</div>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">SMS Notifications</div>
                      <div className="text-sm text-gray-500">Send notifications via SMS</div>
                    </div>
                    <Switch
                      checked={settings.smsNotifications}
                      onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-gray-500">Send browser push notifications</div>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => handleInputChange("pushNotifications", checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Notification Types</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">New registrations</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Workshop completions</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Payment confirmations</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Contact form submissions</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">System alerts</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekly reports</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Authentication</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-500">Require 2FA for admin accounts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Session Timeout</div>
                      <div className="text-sm text-gray-500">Auto-logout after inactivity</div>
                    </div>
                    <Select defaultValue="30">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Data Protection</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Data Encryption</div>
                      <div className="text-sm text-gray-500">Encrypt sensitive user data</div>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Audit Logging</div>
                      <div className="text-sm text-gray-500">Log all admin actions</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">GDPR Compliance</div>
                      <div className="text-sm text-gray-500">Enable GDPR compliance features</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize the look and feel of your platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Theme</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border-2 border-primary rounded-lg p-4 cursor-pointer">
                    <div className="w-full h-20 bg-gradient-to-r from-primary to-accent rounded mb-2"></div>
                    <div className="text-sm font-medium text-center">Default</div>
                  </div>
                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-300">
                    <div className="w-full h-20 bg-gradient-to-r from-gray-800 to-gray-600 rounded mb-2"></div>
                    <div className="text-sm font-medium text-center">Dark</div>
                  </div>
                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-300">
                    <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
                    <div className="text-sm font-medium text-center">Blue</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Colors</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded border"></div>
                      <Input value="#6C5CE7" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Accent Color</Label>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-accent rounded border"></div>
                      <Input value="#00B894" className="flex-1" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  System Configuration
                </CardTitle>
                <CardDescription>Advanced system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Platform Settings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxCapacity">Max Workshop Capacity</Label>
                      <Input
                        id="maxCapacity"
                        type="number"
                        value={settings.maxWorkshopCapacity}
                        onChange={(e) => handleInputChange("maxWorkshopCapacity", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="defaultPrice">Default Workshop Price ($)</Label>
                      <Input
                        id="defaultPrice"
                        type="number"
                        value={settings.defaultWorkshopPrice}
                        onChange={(e) => handleInputChange("defaultWorkshopPrice", Number.parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">System Controls</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Enable Registrations</div>
                        <div className="text-sm text-gray-500">Allow new workshop registrations</div>
                      </div>
                      <Switch
                        checked={settings.enableRegistrations}
                        onCheckedChange={(checked) => handleInputChange("enableRegistrations", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Analytics Tracking</div>
                        <div className="text-sm text-gray-500">Enable user analytics and tracking</div>
                      </div>
                      <Switch
                        checked={settings.enableAnalytics}
                        onCheckedChange={(checked) => handleInputChange("enableAnalytics", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-red-600">Maintenance Mode</div>
                        <div className="text-sm text-gray-500">Put the site in maintenance mode</div>
                      </div>
                      <Switch
                        checked={settings.maintenanceMode}
                        onCheckedChange={(checked) => handleInputChange("maintenanceMode", checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backup & Export</CardTitle>
                <CardDescription>Manage your data backups and exports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Database Backup</div>
                    <div className="text-sm text-gray-500">Last backup: 2 hours ago</div>
                  </div>
                  <Button variant="outline">Create Backup</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Export User Data</div>
                    <div className="text-sm text-gray-500">Export all user data as CSV</div>
                  </div>
                  <Button variant="outline">Export Data</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">System Logs</div>
                    <div className="text-sm text-gray-500">Download system logs</div>
                  </div>
                  <Button variant="outline">Download Logs</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
