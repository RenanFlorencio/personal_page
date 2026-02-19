import { FileText } from 'lucide-react'
import Section from './Section'
import ScrollReveal from './ScrollReveal'
import { content } from '@/app/data/content'

export default function Publications() {
  return (
    <Section id="publications" title="Publications" icon={FileText}>
      <ul className="space-y-4 list-none p-0 m-0 w-full">
        {content.publications.map((item, i) => (
          <li key={i} className="w-full">
            <ScrollReveal>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-accent/20 transition-all duration-300 hover:-translate-y-0.5 w-full box-border">
                <p className="font-semibold text-primary text-lg">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="text-muted text-base mt-1">{item.where}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-base text-accent hover:underline font-medium"
                  >
                    Link / Repository
                  </a>
                )}
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
