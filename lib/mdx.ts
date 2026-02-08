import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { CaseStudy, CaseStudyFrontmatter } from '@/types/case-study'

const CASE_STUDIES_PATH = path.join(process.cwd(), 'content', 'case-studies')

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_PATH)) {
    return []
  }

  const files = fs.readdirSync(CASE_STUDIES_PATH)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as CaseStudyFrontmatter,
      content,
    }
  } catch (error) {
    console.error(`Error loading case study: ${slug}`, error)
    return null
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs()
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })

  return caseStudies
}

export function getFeaturedCaseStudies(limit = 3): CaseStudy[] {
  const allStudies = getAllCaseStudies()
  return allStudies.filter((study) => study.frontmatter.featured).slice(0, limit)
}

export function getAllTags(): string[] {
  const allStudies = getAllCaseStudies()
  const tagsSet = new Set<string>()

  allStudies.forEach((study) => {
    study.frontmatter.tags.forEach((tag) => tagsSet.add(tag))
  })

  return Array.from(tagsSet).sort()
}
