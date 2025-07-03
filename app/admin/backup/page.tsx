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
import {
  Database,
  Download,
  Upload,
  RefreshCw,
  Calendar,
  HardDrive,
  Cloud,
  CheckCircle,
  XCircle,
  Clock,
  Settings,
  Play,
  Pause,
} from "lucide-react"

export default function BackupPage() {
  const [autoBackup, setAutoBackup] = useState(true)
  const [cloudBackup, setCloudBackup] = useState(true)
  const [encryptBackups, setEncryptBackups] = useState(true)
  const [isCreatingBackup, setIsCreatingBackup] = useState(false)

  const backupHistory = [
    {
      id: 1,
      type: "Full System Backup",
      size: "2.4 GB",
      status: "completed",
      startTime: "2024-01-15 02:00:00",
      endTime: "2024-01-15 02:45:32",
      location: "AWS S3 + Local Storage",
      retention: "30 days",
      description: "Complete backup including database, files, and configurations",
    },
    {
      id: 2,
      type: "Database Only",
      size: "156 MB",
      status: "completed",
      startTime: "2024-01-14 02:00:00",
      endTime: "2024-01-14 02:03:21",
      location: "Local Storage",
      retention: "7 days",
      description: "Database backup with user data and workshop information",
    },
    {
      id: 3,
      type: "Full System Backup",
      size: "2.3 GB",
      status: "failed",
      startTime: "2024-01-13 02:00:00",
      endTime: "2024-01-13 02:15:45",
      location: "AWS S3",
      retention: "30 days",
      description: "Backup failed due to network connectivity issues",
    },
    {
      id: 4,
      type: "Files Only",
      size: "1.8 GB",
      status: "completed",
      startTime: "2024-01-12 02:00:00",
      endTime: "2024-01-12 02:32:18",
      location: "Google Drive",
      retention: "14 days",
      description: "Media files and uploaded content backup",
    },
  ]

  const scheduledBackups = [
    {
      id: 1,
      name: "Daily Database Backup",
      type: "Database Only",
      schedule: "Daily at 2:00 AM",
      destination: "Local Storage + AWS S3",
      status: "active",
      nextRun: "2024-01-16 02:00:00",
      description: "Automated daily backup of all database content",
    },
    {
      id: 2,
      name: "Weekly Full System Backup",
      type: "Full System Backup",
      schedule: "Weekly on Sunday at 1:00 AM",
      destination: "AWS S3",
      status: "active",
      nextRun: "2024-01-21 01:00:00",
      description: "Complete system backup including all files and database",
    },
    {
      id: 3,
      name: "Monthly Archive Backup",
      type: "Full System Backup",
      schedule: "Monthly on 1st at 12:00 AM",
      destination: "Google Drive",
      status: "paused",
      nextRun: "2024-02-01 00:00:00",
      description: "Long-term archive backup for compliance and disaster recovery",
    },
  ]

  const storageLocations = [
    {
      name: "Local Storage",
      type: "local",
      available: "45.2 GB",
      used: "12.8 GB",
      status: "healthy",
      description: "Server local storage for quick backup access",
    },
    {
      name: "AWS S3",
      type: "cloud",
      available: "Unlimited",
      used: "8.4 GB",
      status: "healthy",
      description: "Amazon S3 cloud storage for secure offsite backups",
    },
    {
      name: "Google Drive",
      type: "cloud",
      available: "13.2 GB",
      used: "6.8 GB",
      status: "warning",
      description: "Google Drive storage - approaching capacity limit",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "failed":
        return "bg-red-100 text-red-800"
      case "running":
        return "bg-blue-100 text-blue-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStorageStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "text-green-600"
      case "warning":
        return "text-yellow-600"
      case "error":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const handleCreateBackup = () => {
    setIsCreatingBackup(true)
    setTimeout(() => {
      setIsCreatingBackup(false)
      alert("Backup created successfully!")
    }, 3000)
  }

  const handleRestoreBackup = (backupId: number) => {
    if (confirm("Are you sure you want to restore this backup? This will overwrite current data.")) {
      alert(`Restoring backup ${backupId}...`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Backup & Recovery</h1>
          <p className="text-muted-foreground">
            Create, schedule, and manage data backups. Restore your platform from previous backup points when needed.
          </p>
        </div>
        <Button onClick={handleCreateBackup} disabled={isCreatingBackup}>
          <Database className="h-4 w-4 mr-2" />
          {isCreatingBackup ? "Creating Backup..." : "Create Backup Now"}
        </Button>
      </div>

      {/* Storage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storageLocations.map((location, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{location.name}</p>
                  <p className="text-lg font-bold">{location.used}</p>
                  <p className="text-xs text-muted-foreground">of {location.available} used</p>
                  <p className="text-xs text-muted-foreground mt-1">{location.description}</p>
                </div>
                <div className="flex flex-col items-center">
                  {location.type === "cloud" ? (
                    <Cloud className={`h-8 w-8 ${getStorageStatusColor(location.status)}`} />
                  ) : (
                    <HardDrive className={`h-8 w-8 ${getStorageStatusColor(location.status)}`} />
                  )}
                  <Badge className={getStatusColor(location.status)} variant="outline">
                    {location.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="history" className="space-y-6">
        <TabsList>
          <TabsTrigger value="history">Backup History</TabsTrigger>
          <TabsTrigger value="schedule">Scheduled Backups</TabsTrigger>
          <TabsTrigger value="settings">Backup Settings</TabsTrigger>
          <TabsTrigger value="restore">Restore Data</TabsTrigger>
        </TabsList>

        {/* Backup History */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Backup History</CardTitle>
              <CardDescription>
                View all backup operations, their status, and download or restore from previous backups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Backup Details</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Storage Location</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {backupHistory.map((backup) => (
                    <TableRow key={backup.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{backup.type}</div>
                          <div className="text-sm text-muted-foreground">{backup.description}</div>
                          <div className="text-xs text-muted-foreground">Retention: {backup.retention}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{backup.size}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(backup.status)}>
                          {backup.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {backup.status === "failed" && <XCircle className="h-3 w-3 mr-1" />}
                          {backup.status === "running" && <Clock className="h-3 w-3 mr-1" />}
                          {backup.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{backup.startTime}</TableCell>
                      <TableCell>
                        {backup.endTime &&
                          `${Math.round(
                            (new Date(backup.endTime).getTime() - new Date(backup.startTime).getTime()) / 60000,
                          )}m`}
                      </TableCell>
                      <TableCell>{backup.location}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {backup.status === "completed" && (
                            <>
                              <Button variant="ghost" size="sm" title="Download Backup">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRestoreBackup(backup.id)}
                                title="Restore from Backup"
                              >
                                <RefreshCw className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Scheduled Backups */}
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Backup Jobs</CardTitle>
              <CardDescription>Manage automated backup schedules to ensure regular data protection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledBackups.map((schedule) => (
                  <div key={schedule.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{schedule.name}</h4>
                        <p className="text-sm text-muted-foreground">{schedule.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {schedule.schedule}
                          </span>
                          <span>Next run: {schedule.nextRun}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Type: {schedule.type} • Destination: {schedule.destination}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(schedule.status)}>{schedule.status}</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          title={schedule.status === "active" ? "Pause Schedule" : "Resume Schedule"}
                        >
                          {schedule.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="sm" title="Edit Schedule">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Create New Backup Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Backup Settings */}
        <TabsContent value="settings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Backup Configuration</CardTitle>
                <CardDescription>Configure general backup settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Automatic Backups</Label>
                    <p className="text-sm text-muted-foreground">Enable scheduled automatic backups</p>
                  </div>
                  <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Cloud Storage Backup</Label>
                    <p className="text-sm text-muted-foreground">
                      Store backups in cloud storage for offsite protection
                    </p>
                  </div>
                  <Switch checked={cloudBackup} onCheckedChange={setCloudBackup} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Encrypt Backup Files</Label>
                    <p className="text-sm text-muted-foreground">Encrypt backup files for enhanced security</p>
                  </div>
                  <Switch checked={encryptBackups} onCheckedChange={setEncryptBackups} />
                </div>

                <div className="space-y-2">
                  <Label>Default Retention Period</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    How long to keep backup files before automatic deletion
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Backup Compression Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Compression (Fastest)</SelectItem>
                      <SelectItem value="low">Low Compression</SelectItem>
                      <SelectItem value="medium">Medium Compression (Recommended)</SelectItem>
                      <SelectItem value="high">High Compression (Smallest Size)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Higher compression saves space but takes longer</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storage Configuration</CardTitle>
                <CardDescription>Configure backup storage locations and cloud services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">AWS S3 Configuration</h4>
                  <div className="space-y-2">
                    <Label>S3 Bucket Name</Label>
                    <Input placeholder="alphasploit-backups" />
                    <p className="text-xs text-muted-foreground">Your S3 bucket for storing backups</p>
                  </div>
                  <div className="space-y-2">
                    <Label>AWS Access Key ID</Label>
                    <Input placeholder="Your AWS Access Key" />
                  </div>
                  <div className="space-y-2">
                    <Label>AWS Secret Access Key</Label>
                    <Input type="password" placeholder="Your AWS Secret Key" />
                  </div>
                  <div className="space-y-2">
                    <Label>AWS Region</Label>
                    <Select defaultValue="us-east-1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                        <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                        <SelectItem value="eu-west-1">Europe (Ireland)</SelectItem>
                        <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Google Drive Configuration</h4>
                  <div className="space-y-2">
                    <Label>Service Account Key File</Label>
                    <Input type="file" accept=".json" />
                    <p className="text-xs text-muted-foreground">Upload your Google Cloud service account JSON file</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Google Drive Folder ID</Label>
                    <Input placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms" />
                    <p className="text-xs text-muted-foreground">ID of the folder where backups will be stored</p>
                  </div>
                </div>

                <Button>Test Storage Connection</Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Backup Settings</Button>
          </div>
        </TabsContent>

        {/* Restore */}
        <TabsContent value="restore">
          <Card>
            <CardHeader>
              <CardTitle>Restore Data from Backup</CardTitle>
              <CardDescription>
                Restore your platform data from a previous backup point or upload a backup file
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Upload Backup File</h3>
                <p className="text-gray-500 mb-4">Select a backup file from your computer to restore</p>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Backup File
                </Button>
                <p className="text-xs text-muted-foreground mt-2">Supported formats: .zip, .tar.gz, .sql</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Or restore from existing backup:</h4>
                <div className="space-y-3">
                  {backupHistory
                    .filter((backup) => backup.status === "completed")
                    .map((backup) => (
                      <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{backup.type}</div>
                          <div className="text-sm text-muted-foreground">{backup.description}</div>
                          <div className="text-sm text-muted-foreground">
                            {backup.startTime} • {backup.size} • {backup.location}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-green-100 text-green-800">Available</Badge>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" onClick={() => handleRestoreBackup(backup.id)}>
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Restore
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important Warning</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>Restoring a backup will completely overwrite all current data including:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>All user accounts and workshop registrations</li>
                        <li>Website content and media files</li>
                        <li>System settings and configurations</li>
                        <li>Email templates and subscriber lists</li>
                      </ul>
                      <p className="mt-2 font-medium">
                        Make sure to create a current backup before proceeding. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
