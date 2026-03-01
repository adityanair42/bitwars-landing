"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const links = [
  { label: "Speaker", href: "#speaker" },
  { label: "Prize", href: "#prize" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Team", href: "#team" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#151415]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="relative w-16 h-16">
          <Image src="/ieee-logo.png" alt="IEEE Computer Society" fill className="object-contain" priority />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-space-mono text-xs text-white/50 hover:text-[#D2F65A] transition-colors duration-200 tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
