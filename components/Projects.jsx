import { FolderGit2 } from 'lucide-react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { content } from '@/app/data/content'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" icon={FolderGit2}>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 w-full">
        {content.projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  )
}
