import { Mail, Linkedin, Github } from 'lucide-react'
import { content } from '@/app/data/content'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm py-8 px-4 md:px-6 mt-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-base text-muted order-2 sm:order-1">
          © {currentYear} {content.hero.name}. All rights reserved.
        </p>
        <div className="flex items-center justify-center sm:justify-end gap-6 order-1 sm:order-2 flex-wrap">
          <a
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
