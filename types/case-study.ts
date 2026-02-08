export interface CaseStudyFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  client: string
  industry: string
  metrics: Array<{
    label: string
    value: string
  }>
  featured: boolean
}

export interface CaseStudy {
  slug: string
  frontmatter: CaseStudyFrontmatter
  content: string
}
