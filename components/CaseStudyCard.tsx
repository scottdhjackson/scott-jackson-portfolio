import Link from 'next/link'
import { format } from 'date-fns'
import type { CaseStudy } from '@/types/case-study'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { slug, frontmatter } = caseStudy

  return (
    <article className="group border-t border-white/10 pt-8 hover:border-white/30 transition-colors">
      <Link href={`/case-studies/${slug}`} className="block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Meta */}
          <div className="lg:col-span-3">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {frontmatter.client}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {frontmatter.industry}
              </div>
              <time dateTime={frontmatter.date} className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {format(new Date(frontmatter.date), 'yyyy')}
              </time>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9">
            {/* Title */}
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-gray-400 transition-colors leading-tight">
              {frontmatter.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-2xl">
              {frontmatter.description}
            </p>

            {/* Metrics */}
            {frontmatter.metrics && frontmatter.metrics.length > 0 && (
              <div className="flex flex-wrap gap-8">
                {frontmatter.metrics.slice(0, 3).map((metric, index) => (
                  <div key={index}>
                    <div className="text-xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.2em] text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
