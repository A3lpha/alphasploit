import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AlphaSploit - Cybersecurity Training Excellence",
  description:
    "Professional cybersecurity training company specializing in ethical hacking, SOC analyst training, red teaming, and cybersecurity workshops.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>

          {/* Footer with Copyright */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <img src="/images/alphasploit-logo-new.png" alt="AlphaSploit Logo" className="h-10 w-auto" />
                    <div>
                      <div className="font-bold text-xl">AlphaSploit</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Cybersecurity Training</div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 max-w-md">
                    Leading cybersecurity training company providing world-class education in ethical hacking,
                    penetration testing, and security operations.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>&copy; 2024 AlphaSploit. All rights reserved.</p>
                    <p className="mt-1">Designed and developed with ❤️ by the AlphaSploit team.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="/about" className="hover:text-white transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="hover:text-white transition-colors">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/workshops" className="hover:text-white transition-colors">
                        Workshops
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="hover:text-white transition-colors">
                        Blog & Writeups
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:text-white transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Legal</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="/privacy" className="hover:text-white transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="hover:text-white transition-colors">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="/disclaimer" className="hover:text-white transition-colors">
                        Disclaimer
                      </a>
                    </li>
                    <li>
                      <a href="/cookies" className="hover:text-white transition-colors">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p className="text-sm">
                  This website and its content are for educational purposes only. All techniques and tools discussed
                  should only be used in authorized environments.
                </p>
                <p className="text-xs mt-2">
                  AlphaSploit promotes ethical hacking and responsible disclosure practices.
                </p>
              </div>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
