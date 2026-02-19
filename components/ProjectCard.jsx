import ScrollReveal from './ScrollReveal'

export default function ProjectCard({ title, bullets, tech, link }) {
  return (
    <ScrollReveal>
      <article className="group rounded-xl border border-slate-200/80 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-accent/20 transition-all duration-300 hover:-translate-y-0.5 w-full min-h-[260px] flex flex-col box-border">
        <h3 className="text-xl font-semibold text-primary">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <ul className="mt-3 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-muted text-base leading-relaxed flex gap-2">
              <span className="text-accent shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {tech && tech.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </article>
    </ScrollReveal>
  )
}
