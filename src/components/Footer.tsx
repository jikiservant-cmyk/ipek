
'use client';

import * as React from "react";
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2B44] text-white pt-24 pb-12 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-4xl font-black uppercase tracking-tighter leading-[0.8] text-white group-hover:text-[#FFB800] transition-colors">
                SKYWAYS<br />JUNIOR SCHOOL
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-body text-lg">
              A mixed day & boarding school in Nansana, Kampala.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-lg font-bold">
              <li><Link href="/about" className="hover:text-[#FFB800] transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-[#FFB800] transition-colors">Academics</Link></li>
              <li><Link href="/student-life" className="hover:text-[#FFB800] transition-colors">Student Life</Link></li>
              <li><Link href="/events" className="hover:text-[#FFB800] transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FFB800] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFB800] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest">School Hours</h3>
            <ul className="space-y-4 text-white/60 font-body text-lg">
              <li>School Day: 8:00 AM - 3:00 PM</li>
              <li>Office Hours: 7:30 AM - 4:00 PM</li>
              <li>Clubs & Activities: 3:00 PM - 4:30 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#FFB800] mt-1 shrink-0" />
                <span className="text-white/60 text-lg">Nansana Town, behind Nansana Police Station, Kampala</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#FFB800] shrink-0" />
                <span className="text-white/60 text-lg">0704571046 / 074814454</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#FFB800] shrink-0" />
                <span className="text-white/60 text-lg">hello@skywaysjuniorschool.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center text-sm text-white/30 uppercase tracking-[0.2em]">
          <p>© {year} Skyways Junior School. Built with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
