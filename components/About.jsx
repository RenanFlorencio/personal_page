import { User } from 'lucide-react'
import Section from './Section'
import { content } from '@/app/data/content'

export default function About() {
  return (
    <Section id="about" title="About" icon={User}>
      <div className="space-y-4 text-muted text-lg leading-relaxed">
        {content.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
