import ScrollReveal from './ScrollReveal'

export default function ExperienceCard({ company, role, location, dates, bullets }) {
  return (
    <ScrollReveal>
      <article className="group rounded-xl border border-slate-200/80 bg-white p-6 md:p-6 shadow-card hover:shadow-card-hover hover:border-accent/20 transition-all duration-300 hover:-translate-y-0.5 w-full box-border">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-primary">{company}</h3>
          <span className="text-base text-muted whitespace-nowrap">{dates}</span>
        </div>
        <p className="mt-1 font-medium text-accent text-lg">{role}</p>
        <p className="text-base text-muted">{location}</p>
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-muted text-base leading-relaxed flex gap-2">
              <span className="text-accent shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </ScrollReveal>
  )
}
