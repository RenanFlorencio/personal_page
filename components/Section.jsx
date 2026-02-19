import ScrollReveal from './ScrollReveal'

export default function Section({ id, title, subtitle, icon: Icon, children, className = '' }) {
  return (
    <section id={id} className={`py-6 md:py-8 px-4 md:px-6 max-w-6xl mx-auto box-border ${className}`}>
      <ScrollReveal>
        <div className="rounded-2xl border border-slate-200/80 bg-card-bg backdrop-blur-sm shadow-card overflow-hidden">
          <div className="p-6 md:p-8">
            {(title || subtitle) && (
              <header className="mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  {Icon && (
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                      <Icon className="w-5 h-5" />
                    </span>
                  )}
                  {title && (
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
                      {title}
                    </h2>
                  )}
                </div>
                {subtitle && (
                  <p className="mt-2 text-muted text-xl">{subtitle}</p>
                )}
              </header>
            )}
            {children}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
