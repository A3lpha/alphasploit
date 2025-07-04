"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Eye, EyeOff, Lock, User, AlertCircle, CheckCircle } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (token) {
      router.push("/admin")
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Demo credentials - in production, this would be a real API call
    const validCredentials = [
      { email: "admin@alphasploit.com", password: "admin123", role: "super_admin" },
      { email: "manager@alphasploit.com", password: "manager123", role: "manager" },
      { email: "instructor@alphasploit.com", password: "instructor123", role: "instructor" },
    ]

    const user = validCredentials.find((cred) => cred.email === email && cred.password === password)

    if (user) {
      // Store authentication token and user info
      const authData = {
        token: `auth_${Date.now()}`,
        user: {
          email: user.email,
          role: user.role,
          name: user.email.split("@")[0].charAt(0).toUpperCase() + user.email.split("@")[0].slice(1),
          loginTime: new Date().toISOString(),
        },
      }

      localStorage.setItem("admin_token", authData.token)
      localStorage.setItem("admin_user", JSON.stringify(authData.user))

      if (rememberMe) {
        localStorage.setItem("admin_remember", "true")
      }

      // Redirect to admin dashboard
      router.push("/admin")
    } else {
      setError("Invalid email or password. Please check your credentials and try again.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="/images/alphasploit-logo.png" alt="AlphaSploit" className="h-12 w-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AlphaSploit Admin</h1>
          <p className="text-gray-600">Secure access to your cybersecurity platform</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl font-bold">Administrator Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300"
                  disabled={isLoading}
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me for 30 days
                </Label>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Sign In to Admin Panel
                  </>
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Demo Credentials:</h4>
              <div className="space-y-1 text-xs text-blue-800">
                <div>
                  <strong>Super Admin:</strong> admin@alphasploit.com / admin123
                </div>
                <div>
                  <strong>Manager:</strong> manager@alphasploit.com / manager123
                </div>
                <div>
                  <strong>Instructor:</strong> instructor@alphasploit.com / instructor123
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div className="mt-6 text-center space-y-2">
              <a href="#" className="text-sm text-primary hover:underline block">
                Forgot your password?
              </a>
              <a href="/" className="text-sm text-gray-600 hover:underline block">
                ← Back to main website
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
            <CheckCircle className="h-3 w-3" />
            <span>Secured with 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  )
}
