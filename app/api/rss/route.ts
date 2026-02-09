import { getAllCaseStudies } from '@/lib/mdx'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export async function GET() {
  const caseStudies = getAllCaseStudies()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} - Work</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/rss" rel="self" type="application/rss+xml"/>
    ${caseStudies
      .map(
        (study) => `
    <item>
      <title>${escapeXml(study.frontmatter.title)}</title>
      <link>${SITE_URL}/case-studies/${study.slug}</link>
      <description>${escapeXml(study.frontmatter.description)}</description>
      <pubDate>${new Date(study.frontmatter.date).toUTCString()}</pubDate>
      <guid>${SITE_URL}/case-studies/${study.slug}</guid>
      ${study.frontmatter.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
