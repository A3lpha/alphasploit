"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Shield,
  Bug,
  Network,
  AlertTriangle,
  Code,
  Terminal,
  Eye,
  ArrowRight,
} from "lucide-react"

export default function BlogPostPage() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  // This would normally come from an API or database
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to SQL Injection: From Basic to Advanced Techniques",
      excerpt:
        "Learn everything about SQL injection attacks, from basic union-based injections to advanced blind SQL injection techniques. This comprehensive guide covers detection, exploitation, and prevention methods.",
      content: `
# Complete Guide to SQL Injection: From Basic to Advanced Techniques

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
      content: `
# Advanced XSS Exploitation: Bypassing Modern Filters and WAFs

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
<ScRiPt>alert('XSS')</script>

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
Payload: \`<svg/onload=alert(document.domain)>\`

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
      content: `
# Network Penetration Testing: Complete OSCP-Style Methodology

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

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === postId)
    if (foundPost) {
      setPost(foundPost)

      // Find related posts (same category, excluding current post)
      const related = blogPosts.filter((p) => p.id !== postId && p.category === foundPost.category).slice(0, 3)
      setRelatedPosts(related)
    }
  }, [postId])

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Terminal className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
          <p className="text-gray-600 mb-4">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-orange-100 text-orange-800"
      case "Expert":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
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
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-gray-700">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className={getDifficultyColor(post.difficulty)}>{post.difficulty}</Badge>
            <Badge variant="outline">
              {getCategoryIcon(post.category)}
              <span className="ml-1 capitalize">{post.category.replace("-", " ")}</span>
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
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
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {post.image && (
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getDifficultyColor(relatedPost.difficulty)}>{relatedPost.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-blue-600">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm">{relatedPost.excerpt.substring(0, 100)}...</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/blog/${relatedPost.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
