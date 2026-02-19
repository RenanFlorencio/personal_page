import { Briefcase } from 'lucide-react'
import Section from './Section'
import ExperienceCard from './ExperienceCard'
import { content } from '@/app/data/content'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" icon={Briefcase}>
      <div className="space-y-6 w-full">
        {content.experience.map((job, i) => (
          <ExperienceCard key={i} {...job} />
        ))}
      </div>
    </Section>
  )
}
