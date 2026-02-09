import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, LINKEDIN_URL } from './constants'
import type { CaseStudy } from '@/types/case-study'

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: 'SEO, Data & AI/GEO Specialist',
    description: SITE_DESCRIPTION,
    sameAs: [LINKEDIN_URL],
    knowsAbout: [
      'Technical SEO',
      'Programmatic SEO',
      'Google Analytics',
      'Data Analysis',
      'AI Search Optimization',
      'Python',
      'SQL',
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/case-studies?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getArticleSchema(caseStudy: CaseStudy) {
  const { frontmatter, slug } = caseStudy

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
    },
    url: `${SITE_URL}/case-studies/${slug}`,
    keywords: frontmatter.tags.join(', '),
    articleSection: 'Work',
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
