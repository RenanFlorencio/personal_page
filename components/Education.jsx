import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { content } from '@/app/data/content'

const { education } = content

export default function Education() {
  return (
    <Section id="education" title="Education" icon={GraduationCap}>
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-card w-full box-border">
        <h3 className="text-xl font-semibold text-primary">{education.degree}</h3>
        <p className="mt-1 text-accent text-lg font-medium">{education.school}</p>
        <p className="text-base text-muted">{education.location} · {education.dates}</p>
        <p className="mt-2 text-base text-muted">GPA: {education.gpa}</p>
      </div>
    </Section>
  )
}
