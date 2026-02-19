export default function SkillGroup({ title, items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="w-full">
      <h4 className="text-base font-semibold text-primary mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const label = typeof item === 'string' ? item : `${item.lang} (${item.level})`
          return (
            <span
              key={label}
              className="px-3 py-1.5 text-base rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-colors duration-200"
            >
              {label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
