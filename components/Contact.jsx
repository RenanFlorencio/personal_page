import { Mail, Linkedin, Github } from 'lucide-react'
import Section from './Section'
import { content } from '@/app/data/content'

const { contact } = content

export default function Contact() {
  return (
    <Section id="contact" title="Contact" icon={Mail}>
      <p className="text-muted text-lg mb-6">
        Get in touch via email or connect on LinkedIn and GitHub.
      </p>
      <div className="flex flex-wrap gap-4 items-stretch">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center justify-center gap-2 min-w-[140px] px-5 py-3 rounded-xl bg-accent text-white font-medium text-lg hover:bg-accent-hover transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
        >
          <Mail className="w-5 h-5 shrink-0" />
          <span>Email</span>
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-w-[140px] px-5 py-3 rounded-xl border-2 border-slate-200 text-primary font-medium text-lg hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
        >
          <Linkedin className="w-5 h-5 shrink-0" />
          <span>LinkedIn</span>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-w-[140px] px-5 py-3 rounded-xl border-2 border-slate-200 text-primary font-medium text-lg hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
        >
          <Github className="w-5 h-5 shrink-0" />
          <span>GitHub</span>
        </a>
      </div>
    </Section>
  )
}
