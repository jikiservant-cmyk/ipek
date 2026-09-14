"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Events", href: "/events" },
  { name: "Student Life", href: "/student-life" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-50 sticky top-0 bg-[#3E3E4E]/60 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Untitled (5).png"
              alt="Skyways Junior School Logo"
              width={50}
              height={50}
              className="group-hover:opacity-80 transition-opacity"
            />
            <div className="ml-4 flex flex-col items-start leading-tight">
              <span className="font-headline font-bold text-base text-white uppercase">SKYWAYS</span>
              <span className="font-headline font-medium text-[0.7rem] text-white/70 uppercase tracking-widest">JUNIOR SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Links & Mobile Menu Button */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.2em] transition-all hover:text-white/70 font-headline text-white whitespace-nowrap",
                    pathname === link.href ? "opacity-100" : "opacity-80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden ml-4 p-2 text-white"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-[#3E3E4E]/60 backdrop-blur-sm border-t border-white/5 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block text-xl font-medium uppercase tracking-widest text-white font-headline",
                pathname === link.href ? "opacity-100" : "opacity-60"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
