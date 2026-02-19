import Image from 'next/image'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { content } from '@/app/data/content'

export default function Hero() {
  const { name, headline, valueStatement, location, email, linkedin, github, imageUrl, coverImageUrl, coverImagePosition = 'center' } = content.hero
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const positionMap = { top: 'object-top', center: 'object-center', bottom: 'object-bottom', left: 'object-left', right: 'object-right' }
  const isCustomPosition = coverImagePosition && typeof coverImagePosition === 'string' && coverImagePosition.includes('%')
  const positionClass = isCustomPosition ? '' : (positionMap[coverImagePosition] || 'object-center')
  const positionStyle = isCustomPosition ? { objectPosition: coverImagePosition } : undefined
  return (
    <section id="hero" className="pt-0 pb-6 md:pb-8">
      {/* Cover strip - full width */}
      <div className="relative w-full h-36 md:h-80 overflow-hidden bg-gradient-to-br from-accent to-accent-hover">
        {coverImageUrl ? (
          <Image
            src={base + coverImageUrl}
            alt=""
            fill
            className={`object-cover ${!positionStyle ? positionClass : ''}`}
            style={positionStyle}
            sizes="100vw"
            priority
          />
        ) : null}
      </div>

      {/* Content: profile (overlapping) + text */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end gap-6 relative">
          {/* Profile photo - left, overlapping cover only */}
          {imageUrl ? (
            <div className="-mt-20 md:-mt-24 flex-shrink-0 z-10 order-first">
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-white shadow-card-hover">
                <Image
                  src={base + imageUrl}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 144px, 192px"
                  priority
                />
              </div>
            </div>
          ) : null}

          {/* Name and info - no box, clear space below cover */}
          <div className="flex-1 min-w-0 pt-8 md:pt-10">
            <h1 className="whitespace-nowrap text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary tracking-tight overflow-hidden text-ellipsis">
              {name}
            </h1>
            <p className="mt-2 md:mt-3 text-lg md:text-xl lg:text-2xl font-medium text-accent">{headline}</p>
            <p className="mt-2 md:mt-3 text-base md:text-lg text-muted max-w-2xl leading-relaxed">{valueStatement}</p>
            <div className="mt-2 flex items-center gap-2 text-muted">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-accent/80" />
              <span className="text-sm md:text-base">{location}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>Email</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium text-sm md:text-base"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium text-sm md:text-base"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
