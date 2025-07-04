"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Search,
  Calendar,
  Clock,
  User,
  Eye,
  ArrowRight,
  Terminal,
  Bug,
  Network,
  AlertTriangle,
  Code,
} from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "penetration-testing", name: "Penetration Testing", count: 8 },
    { id: "web-security", name: "Web Security", count: 6 },
    { id: "network-security", name: "Network Security", count: 5 },
    { id: "malware-analysis", name: "Malware Analysis", count: 3 },
    { id: "ctf-writeups", name: "CTF Writeups", count: 2 },
  ]

  // Blog post type for better DX (optional)
  interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    author: string
    date: string
    readTime: string
    views: number
    category: string
    tags: string[]
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert"
    image: string
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Complete Guide to SQL Injection: From Basic to Advanced Techniques",
      excerpt:
        "Learn everything about SQL injection attacks, from basic union-based injections to advanced blind SQL injection techniques. This comprehensive guide covers detection, exploitation, and prevention methods.",
      content: `# Complete Guide to SQL Injection: From Basic to Advanced Techniques

SQL Injection remains one of the most critical web application vulnerabilities. In this comprehensive writeup, we'll explore various SQL injection techniques and how to exploit them ethically.

## What is SQL Injection?

SQL Injection is a code injection technique that exploits vulnerabilities in an application's software when user input is not properly sanitized before being included in SQL queries.

## Types of SQL Injection

### 1. Union-Based SQL Injection
This is the most common type where we use the UNION operator to combine results from multiple SELECT statements.

**Example Payload:**
\`\`\`sql
' UNION SELECT 1,2,3,database(),version()--
\`\`\`

### 2. Boolean-Based Blind SQL Injection
When the application doesn't return database errors, we can use boolean logic to extract information.

**Example Payload:**
\`\`\`sql
' AND (SELECT SUBSTRING(database(),1,1))='a'--
\`\`\`

### 3. Time-Based Blind SQL Injection
Using time delays to determine if our injection was successful.

**Example Payload:**
\`\`\`sql
'; IF(1=1,SLEEP(5),0)--
\`\`\`

## Detection Techniques

1. **Manual Testing**: Try basic payloads like single quotes
2. **Automated Tools**: Use tools like SQLMap, Burp Suite
3. **Error Analysis**: Look for database error messages

## Exploitation Process

1. **Identify Injection Point**: Find vulnerable parameters
2. **Determine Database Type**: MySQL, PostgreSQL, MSSQL, etc.
3. **Extract Information**: Database names, tables, columns
4. **Dump Data**: Extract sensitive information

## Prevention Methods

- Use parameterized queries/prepared statements
- Input validation and sanitization
- Principle of least privilege
- Web Application Firewalls (WAF)

## Conclusion

SQL Injection is a serious vulnerability that can lead to complete database compromise. Always test your applications thoroughly and implement proper security measures.
      `,
      author: "Ahmed Hassan",
      date: "2024-01-15",
      readTime: "12 min read",
      views: 2847,
      category: "web-security",
      tags: ["SQL Injection", "Web Security", "Penetration Testing", "OWASP"],
      difficulty: "Intermediate",
      image: "/images/cybersecurity-hero.jpg",
    },
    {
      id: 2,
      title: "Advanced XSS Exploitation: Bypassing Modern Filters and WAFs",
      excerpt:
        "Discover advanced Cross-Site Scripting (XSS) techniques to bypass modern security filters, WAFs, and Content Security Policy (CSP) restrictions. Real-world examples included.",
      content: `# Advanced XSS Exploitation: Bypassing Modern Filters and WAFs

Cross-Site Scripting (XSS) attacks have evolved significantly. Modern applications implement various protection mechanisms, but skilled attackers can still find ways to bypass them.

## Understanding XSS Types

### 1. Reflected XSS
The malicious script is reflected off a web server, such as in an error message or search result.

### 2. Stored XSS
The malicious script is permanently stored on the target server, such as in a database or message forum.

### 3. DOM-based XSS
The vulnerability exists in client-side code rather than server-side code.

## Bypass Techniques

### Filter Evasion
\`\`\`javascript
// Basic payload
<script>alert('XSS')</script>

// Case variation
<ScRiPt>alert('XSS')</ScRiPt>

// HTML encoding
&lt;script&gt;alert('XSS')&lt;/script&gt;

// JavaScript events
<img src=x onerror=alert('XSS')>
\`\`\`

### WAF Bypass Methods
1. **Encoding Techniques**: URL, HTML, Unicode encoding
2. **Fragmentation**: Breaking payloads across multiple parameters
3. **Comment Insertion**: Using HTML/JavaScript comments
4. **Alternative Event Handlers**: Using less common events

### CSP Bypass
Content Security Policy can be bypassed using:
- JSONP endpoints
- Angular template injection
- Unsafe-inline exceptions

## Real-World Examples

### Example 1: Filter Bypass
Target: E-commerce search functionality
Payload: \`<Svg onload=alert(document.domain)>\`

### Example 2: WAF Evasion
Target: Contact form with ModSecurity
Payload: \`<img src=1 onerror=eval(atob('YWxlcnQoJ1hTUycpOw=='))>\`

## Impact and Exploitation

XSS can lead to:
- Session hijacking
- Credential theft
- Defacement
- Malware distribution
- Social engineering attacks

## Prevention Strategies

1. **Input Validation**: Whitelist approach
2. **Output Encoding**: Context-aware encoding
3. **Content Security Policy**: Strict CSP headers
4. **HTTPOnly Cookies**: Prevent JavaScript access
5. **Regular Security Testing**: Automated and manual testing

## Conclusion

XSS remains a significant threat despite modern protections. Understanding bypass techniques helps both attackers and defenders stay ahead of the curve.
      `,
      author: "Fatima Ali",
      date: "2024-01-10",
      readTime: "15 min read",
      views: 1923,
      category: "web-security",
      tags: ["XSS", "Web Security", "WAF Bypass", "CSP"],
      difficulty: "Advanced",
      image: "/images/hacker-setup.jpg",
    },
    {
      id: 3,
      title: "Network Penetration Testing: Complete OSCP-Style Methodology",
      excerpt:
        "Step-by-step network penetration testing methodology used in OSCP certification. Covers reconnaissance, enumeration, exploitation, and post-exploitation phases with practical examples.",
      content: `# Network Penetration Testing: Complete OSCP-Style Methodology

This writeup covers a comprehensive network penetration testing methodology that follows OSCP standards and real-world best practices.

## Phase 1: Information Gathering

### Passive Reconnaissance
- OSINT gathering
- DNS enumeration
- Social media reconnaissance
- Public database searches

### Active Reconnaissance
\`\`\`bash
# Network discovery
nmap -sn 192.168.1.0/24

# Port scanning
nmap -sS -sV -O -A target_ip

# Service enumeration
nmap --script vuln target_ip
\`\`\`

## Phase 2: Enumeration

### Service-Specific Enumeration

#### HTTP/HTTPS (Ports 80/443)
\`\`\`bash
# Directory enumeration
gobuster dir -u http://target -w /usr/share/wordlists/dirb/common.txt

# Technology identification
whatweb http://target

# Vulnerability scanning
nikto -h http://target
\`\`\`

#### SMB (Ports 139/445)
\`\`\`bash
# SMB enumeration
enum4linux target_ip
smbclient -L //target_ip
smbmap -H target_ip
\`\`\`

#### SSH (Port 22)
\`\`\`bash
# SSH enumeration
ssh-audit target_ip
nmap --script ssh-enum-algos target_ip
\`\`\`

## Phase 3: Vulnerability Assessment

### Manual Testing
- Configuration reviews
- Default credentials testing
- Logic flaw identification

### Automated Scanning
\`\`\`bash
# Nessus scanning
# OpenVAS scanning
# Custom Nmap scripts
nmap --script vuln,exploit target_ip
\`\`\`

## Phase 4: Exploitation

### Common Attack Vectors

#### 1. Web Application Attacks
- SQL Injection
- XSS
- File Upload vulnerabilities
- Directory traversal

#### 2. Network Service Attacks
- Buffer overflows
- Authentication bypass
- Privilege escalation

#### 3. Password Attacks
\`\`\`bash
# Hydra brute force
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://target_ip

# John the Ripper
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
\`\`\`

## Phase 5: Post-Exploitation

### Privilege Escalation

#### Linux Privilege Escalation
\`\`\`bash
# System enumeration
uname -a
cat /etc/passwd
sudo -l

# SUID binaries
find / -perm -4000 2>/dev/null

# Kernel exploits
searchsploit linux kernel
\`\`\`

#### Windows Privilege Escalation
\`\`\`powershell
# System information
systeminfo
whoami /priv

# Service enumeration
sc query

# Registry analysis
reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall
\`\`\`

### Persistence
- Creating backdoors
- Scheduled tasks
- Registry modifications
- Service installation

### Lateral Movement
- Pass-the-hash attacks
- Kerberoasting
- Golden ticket attacks
- Network pivoting

## Phase 6: Documentation

### Report Structure
1. Executive Summary
2. Technical Findings
3. Risk Assessment
4. Remediation Recommendations
5. Appendices

### Evidence Collection
- Screenshots
- Command outputs
- Proof-of-concept code
- Network diagrams

## Tools and Resources

### Essential Tools
- Nmap
- Burp Suite
- Metasploit
- Gobuster
- Hydra
- John the Ripper
- Searchsploit

### Useful Resources
- ExploitDB
- CVE Database
- OWASP Testing Guide
- NIST Cybersecurity Framework

## Conclusion

Network penetration testing requires a systematic approach combining automated tools with manual testing techniques. Practice on platforms like Hack The Box and TryHackMe to improve your skills.
      `,
      author: "Mohamed Omar",
      date: "2024-01-05",
      readTime: "20 min read",
      views: 3421,
      category: "penetration-testing",
      tags: ["OSCP", "Network Security", "Penetration Testing", "Methodology"],
      difficulty: "Advanced",
      image: "/images/ninja-warrior.jpg",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Advanced":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Expert":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "penetration-testing":
        return <Shield className="h-4 w-4" />
      case "web-security":
        return <Bug className="h-4 w-4" />
      case "network-security":
        return <Network className="h-4 w-4" />
      case "malware-analysis":
        return <AlertTriangle className="h-4 w-4" />
      case "ctf-writeups":
        return <Code className="h-4 w-4" />
      default:
        return <Terminal className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              📝 Knowledge Base
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity Blog & <span className="text-primary">Writeups</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              In-depth technical articles, penetration testing writeups, malware analysis, and cybersecurity research
              from our expert team.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                        selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(category.id)}
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["SQL Injection", "XSS", "OSCP", "Malware", "CTF", "SOC", "Network Security", "Web Security"].map(
                      (tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        >
                          {tag}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getDifficultyColor(post.difficulty)}>{post.difficulty}</Badge>
                          <Badge variant="outline">
                            {getCategoryIcon(post.category)}
                            <span className="ml-1 capitalize">{post.category.replace("-", " ")}</span>
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{post.tags.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        <Button asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Terminal className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
