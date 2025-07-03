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
import { Shield, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Key, Download, RefreshCw } from "lucide-react"

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [loginNotifications, setLoginNotifications] = useState(true)
  const [ipWhitelist, setIpWhitelist] = useState(false)

  const securityAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Multiple Failed Login Attempts",
      description:
        "5 failed login attempts detected from IP address 192.168.1.100 in the last 10 minutes. This could indicate a brute force attack attempt.",
      timestamp: "2024-01-15 14:30:22",
      severity: "medium",
      status: "active",
      location: "Unknown Location",
    },
    {
      id: 2,
      type: "info",
      title: "New Admin Login from Different Location",
      description:
        "Admin user successfully logged in from a new location (Mogadishu, Somalia). If this wasn't you, please secure your account immediately.",
      timestamp: "2024-01-15 09:15:10",
      severity: "low",
      status: "resolved",
      location: "Mogadishu, Somalia",
    },
    {
      id: 3,
      type: "critical",
      title: "Suspicious Database Query Pattern",
      description:
        "Unusual database query pattern detected that could indicate SQL injection attempt. Queries have been blocked and logged for review.",
      timestamp: "2024-01-14 23:45:33",
      severity: "high",
      status: "investigating",
      location: "Multiple IPs",
    },
  ]

  const loginLogs = [
    {
      id: 1,
      user: "admin@alphasploit.com",
      ip: "192.168.1.50",
      location: "Mogadishu, Somalia",
      userAgent: "Chrome 120.0.0.0 on Windows 10",
      timestamp: "2024-01-15 14:30:22",
      status: "success",
      sessionDuration: "2h 15m",
    },
    {
      id: 2,
      user: "admin@alphasploit.com",
      ip: "192.168.1.100",
      location: "Unknown Location",
      userAgent: "Firefox 121.0.0.0 on Linux",
      timestamp: "2024-01-15 14:25:15",
      status: "failed",
      sessionDuration: "N/A",
    },
    {
      id: 3,
      user: "admin@alphasploit.com",
      ip: "192.168.1.50",
      location: "Mogadishu, Somalia",
      userAgent: "Chrome 120.0.0.0 on Windows 10",
      timestamp: "2024-01-15 09:15:10",
      status: "success",
      sessionDuration: "4h 32m",
    },
  ]

  const systemHealth = {
    ssl: { status: "active", expires: "2024-12-15", issuer: "Let's Encrypt" },
    firewall: { status: "active", rules: 45, blocked: 247 },
    backups: { status: "active", lastBackup: "2024-01-15 02:00:00", size: "2.4 GB" },
    updates: { status: "pending", available: 3, critical: 1 },
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Security Center</h1>
          <p className="text-muted-foreground">
            Monitor security threats, manage access controls, and configure security settings for your platform
          </p>
        </div>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Security Status
        </Button>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">SSL Certificate</p>
                <p className="text-lg font-bold text-green-600">Active & Valid</p>
                <p className="text-xs text-muted-foreground">Expires: {systemHealth.ssl.expires}</p>
                <p className="text-xs text-muted-foreground">Issuer: {systemHealth.ssl.issuer}</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Firewall Protection</p>
                <p className="text-lg font-bold text-green-600">Active</p>
                <p className="text-xs text-muted-foreground">{systemHealth.firewall.rules} rules active</p>
                <p className="text-xs text-muted-foreground">{systemHealth.firewall.blocked} attacks blocked</p>
              </div>
              <Lock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Backup Status</p>
                <p className="text-lg font-bold text-green-600">Up to Date</p>
                <p className="text-xs text-muted-foreground">Last: {systemHealth.backups.lastBackup}</p>
                <p className="text-xs text-muted-foreground">Size: {systemHealth.backups.size}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">System Updates</p>
                <p className="text-lg font-bold text-yellow-600">Updates Pending</p>
                <p className="text-xs text-muted-foreground">{systemHealth.updates.available} available</p>
                <p className="text-xs text-muted-foreground">{systemHealth.updates.critical} critical</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="alerts">Security Alerts</TabsTrigger>
          <TabsTrigger value="logs">Login Activity</TabsTrigger>
          <TabsTrigger value="settings">Security Settings</TabsTrigger>
          <TabsTrigger value="monitoring">Real-time Monitoring</TabsTrigger>
        </TabsList>

        {/* Security Alerts */}
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Security Alerts & Threats</CardTitle>
              <CardDescription>
                Recent security events, threats, and suspicious activities detected on your platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {alert.type === "critical" && <XCircle className="h-5 w-5 text-red-600" />}
                          {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                          {alert.type === "info" && <CheckCircle className="h-5 w-5 text-blue-600" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{alert.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>Time: {alert.timestamp}</span>
                            <span>Location: {alert.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getSeverityColor(alert.severity)}>{alert.severity} priority</Badge>
                        <Badge variant="outline">{alert.status}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Security Report
                </Button>
                <Button variant="outline">View All Alerts</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Login Logs */}
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Login Activity Logs</CardTitle>
              <CardDescription>
                Track all login attempts, successful sessions, and authentication events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User Account</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Device & Browser</TableHead>
                    <TableHead>Login Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Session</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loginLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell>{log.ip}</TableCell>
                      <TableCell>{log.location}</TableCell>
                      <TableCell className="max-w-32 truncate" title={log.userAgent}>
                        {log.userAgent}
                      </TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(log.status)}>
                          {log.status === "success" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {log.status === "failed" && <XCircle className="h-3 w-3 mr-1" />}
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{log.sessionDuration}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end space-x-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Login Logs
                </Button>
                <Button variant="outline">View All Logs</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="settings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Authentication & Access Control</CardTitle>
                <CardDescription>Configure login security and access restrictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                  </div>
                  <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Login Notifications</Label>
                    <p className="text-sm text-muted-foreground">Email alerts for new login attempts</p>
                  </div>
                  <Switch checked={loginNotifications} onCheckedChange={setLoginNotifications} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">IP Address Whitelist</Label>
                    <p className="text-sm text-muted-foreground">Restrict admin access to specific IP addresses</p>
                  </div>
                  <Switch checked={ipWhitelist} onCheckedChange={setIpWhitelist} />
                </div>

                <div className="space-y-2">
                  <Label>Session Timeout (minutes)</Label>
                  <Input type="number" defaultValue="30" />
                  <p className="text-xs text-muted-foreground">Automatically log out inactive users</p>
                </div>

                <div className="space-y-2">
                  <Label>Maximum Failed Login Attempts</Label>
                  <Input type="number" defaultValue="5" />
                  <p className="text-xs text-muted-foreground">Block IP after this many failed attempts</p>
                </div>

                <div className="space-y-2">
                  <Label>Account Lockout Duration (minutes)</Label>
                  <Input type="number" defaultValue="15" />
                  <p className="text-xs text-muted-foreground">How long to block suspicious IPs</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password Security Policy</CardTitle>
                <CardDescription>Set password requirements and security rules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Minimum Password Length</Label>
                  <Input type="number" defaultValue="8" />
                  <p className="text-xs text-muted-foreground">Minimum number of characters required</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">Password Requirements</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require uppercase letters (A-Z)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require lowercase letters (a-z)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require numbers (0-9)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require special characters (!@#$%)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Password Expiry (days)</Label>
                  <Input type="number" defaultValue="90" />
                  <p className="text-xs text-muted-foreground">Force password change after this period</p>
                </div>

                <div className="space-y-2">
                  <Label>Password History</Label>
                  <Input type="number" defaultValue="5" />
                  <p className="text-xs text-muted-foreground">Prevent reusing last N passwords</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>API Security & Access Keys</CardTitle>
              <CardDescription>Manage API keys and programmatic access to your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Admin API Key</h4>
                    <p className="text-sm text-muted-foreground">
                      Full administrative access to all platform functions
                    </p>
                    <p className="text-xs text-muted-foreground">Created: 2024-01-01 • Last used: 2024-01-15</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" title="View API Key">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" title="Regenerate Key">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Public API Key</h4>
                    <p className="text-sm text-muted-foreground">Read-only access to public data and content</p>
                    <p className="text-xs text-muted-foreground">Created: 2024-01-10 • Last used: 2024-01-14</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" title="View API Key">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" title="Regenerate Key">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button>
                  <Key className="h-4 w-4 mr-2" />
                  Generate New API Key
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Security Settings</Button>
          </div>
        </TabsContent>

        {/* Monitoring */}
        <TabsContent value="monitoring">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Security Monitoring</CardTitle>
                <CardDescription>Live monitoring of security systems and threat detection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Intrusion Detection System</span>
                    <p className="text-xs text-muted-foreground">Monitoring for unauthorized access attempts</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">DDoS Protection</span>
                    <p className="text-xs text-muted-foreground">
                      Protection against distributed denial of service attacks
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Malware Scanning</span>
                    <p className="text-xs text-muted-foreground">Real-time scanning of uploaded files and content</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">File Integrity Monitoring</span>
                    <p className="text-xs text-muted-foreground">Detecting unauthorized changes to system files</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Metrics (Last 30 Days)</CardTitle>
                <CardDescription>Key security statistics and threat intelligence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Blocked Attack Attempts</span>
                    <p className="text-xs text-muted-foreground">Malicious requests blocked by firewall</p>
                  </div>
                  <span className="font-bold text-lg">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Failed Login Attempts</span>
                    <p className="text-xs text-muted-foreground">Unsuccessful authentication attempts</p>
                  </div>
                  <span className="font-bold text-lg">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Suspicious IPs Blocked</span>
                    <p className="text-xs text-muted-foreground">IP addresses added to blocklist</p>
                  </div>
                  <span className="font-bold text-lg">34</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Security Scans Performed</span>
                    <p className="text-xs text-muted-foreground">Automated security checks completed</p>
                  </div>
                  <span className="font-bold text-lg">720</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Vulnerabilities Found</span>
                    <p className="text-xs text-muted-foreground">Security issues identified and resolved</p>
                  </div>
                  <span className="font-bold text-lg">3</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Security Recommendations</CardTitle>
              <CardDescription>Suggested actions to improve your platform security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 border rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium">Update System Components</h4>
                    <p className="text-sm text-muted-foreground">
                      3 security updates are available, including 1 critical update. Install updates to patch known
                      vulnerabilities.
                    </p>
                  </div>
                  <Button size="sm">Update Now</Button>
                </div>
                <div className="flex items-start space-x-3 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium">Enable Rate Limiting</h4>
                    <p className="text-sm text-muted-foreground">
                      Configure rate limiting to prevent API abuse and brute force attacks on login endpoints.
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Configure
                  </Button>
                </div>
                <div className="flex items-start space-x-3 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium">SSL Certificate Renewal</h4>
                    <p className="text-sm text-muted-foreground">
                      Your SSL certificate is valid and will auto-renew in 11 months. No action required.
                    </p>
                  </div>
                  <Badge variant="outline">Good</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
