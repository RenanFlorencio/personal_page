import { Code } from 'lucide-react'
import Section from './Section'
import SkillGroup from './SkillGroup'
import { content } from '@/app/data/content'

const { skills } = content

export default function Skills() {
  return (
    <Section id="skills" title="Skills" icon={Code}>
      <div className="space-y-6 w-full">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks & Libraries" items={skills.frameworks} />
        <SkillGroup title="Tools" items={skills.tools} />
        {skills.cloud?.length > 0 && (
          <SkillGroup title="Cloud" items={skills.cloud} />
        )}
        {skills.databases?.length > 0 && (
          <SkillGroup title="Databases" items={skills.databases} />
        )}
        <SkillGroup title="Languages (spoken)" items={skills.humanLanguages} />
      </div>
    </Section>
  )
}
