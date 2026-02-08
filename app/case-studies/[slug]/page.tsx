import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getCaseStudyBySlug, getCaseStudySlugs, getAllCaseStudies } from '@/lib/mdx'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/constants'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {}
  }

  return generateSiteMetadata({
    title: caseStudy.frontmatter.title,
    description: caseStudy.frontmatter.description,
    path: `/case-studies/${params.slug}`,
    type: 'article',
    publishedTime: caseStudy.frontmatter.date,
    tags: caseStudy.frontmatter.tags,
  })
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const { frontmatter, content } = caseStudy

  // Get previous and next case studies
  const allStudies = getAllCaseStudies()
  const currentIndex = allStudies.findIndex((study) => study.slug === params.slug)
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null

  // JSON-LD Schemas
  const articleSchema = getArticleSchema(caseStudy)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
    { name: frontmatter.title, url: `${SITE_URL}/case-studies/${params.slug}` },
  ])

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <article className="py-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Case Studies
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-white font-medium">
                {frontmatter.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12 max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>

            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <div>
                <strong>Client:</strong> {frontmatter.client}
              </div>
              <div>
                <strong>Industry:</strong> {frontmatter.industry}
              </div>
              <div>
                <time dateTime={frontmatter.date}>
                  {format(new Date(frontmatter.date), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              {frontmatter.description}
            </p>
          </header>

          {/* Key Metrics */}
          {frontmatter.metrics && frontmatter.metrics.length > 0 && (
            <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Key Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {frontmatter.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-4xl">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center">
              {prevStudy ? (
                <Link
                  href={`/case-studies/${prevStudy.slug}`}
                  className="group flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Previous</div>
                    <div className="font-medium">{prevStudy.frontmatter.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy ? (
                <Link
                  href={`/case-studies/${nextStudy.slug}`}
                  className="group flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline text-right"
                >
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Next</div>
                    <div className="font-medium">{nextStudy.frontmatter.title}</div>
                  </div>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18"
                  />
                </svg>
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
