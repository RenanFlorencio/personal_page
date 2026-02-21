'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { content } from '@/app/data/content'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4 min-w-0">
        <Link
          href="#hero"
          onClick={closeMenu}
          className="text-primary font-semibold text-lg hover:text-accent transition-colors duration-200 shrink-0 w-20 md:w-auto"
        >
          {content.hero.name.split(' ')[0]}
        </Link>

        {/* Desktop nav - centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-5 flex-wrap">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-600 hover:text-accent transition-colors duration-200 text-[15px]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* <a
href={content.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg bg-accent text-white hover:bg-accent-hover transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 shrink-0"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a> */}

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-slate-600 hover:bg-slate-100 hover:text-accent transition-colors flex items-center justify-center shrink-0"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="py-3 px-3 rounded-lg text-slate-600 hover:text-accent hover:bg-slate-50 transition-colors"
              >
                {label}
              </Link>
            ))}
            {/* <a
              href={content.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a> */}
          </div>
        </div>
      )}
    </nav>
  )
}
