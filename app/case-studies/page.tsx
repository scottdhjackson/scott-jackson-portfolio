import { getAllCaseStudies, getAllTags } from '@/lib/mdx'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import CaseStudyFilters from '@/components/CaseStudyFilters'

export const metadata = generateSiteMetadata({
  title: 'Case Studies',
  description:
    'Explore real-world SEO, analytics, and AI search optimization case studies. See how I've helped businesses improve their search visibility, traffic, and conversions.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies()
  const allTags = getAllTags()

  return (
    <div className="py-16 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Real-world examples of how I've helped businesses improve their SEO, analytics,
            and AI search visibility. Each case study includes the challenge, approach, and
            measurable results.
          </p>
        </div>

        {/* Filters and Case Studies */}
        {caseStudies.length > 0 ? (
          <CaseStudyFilters caseStudies={caseStudies} allTags={allTags} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No case studies available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
