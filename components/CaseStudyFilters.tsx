'use client'

import { useState, useMemo } from 'react'
import type { CaseStudy } from '@/types/case-study'
import CaseStudyCard from './CaseStudyCard'

interface CaseStudyFiltersProps {
  caseStudies: CaseStudy[]
  allTags: string[]
}

export default function CaseStudyFilters({ caseStudies, allTags }: CaseStudyFiltersProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesTag =
        selectedTag === 'all' || study.frontmatter.tags.includes(selectedTag)

      const matchesSearch =
        searchQuery === '' ||
        study.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.frontmatter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.frontmatter.client.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesTag && matchesSearch
    })
  }, [caseStudies, selectedTag, searchQuery])

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div>
          <label htmlFor="search" className="sr-only">
            Search case studies
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search case studies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
          />
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedTag === 'all'
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                : 'glass-card border border-gray-800 text-gray-300 hover:border-primary-500/50'
            }`}
          >
            All ({caseStudies.length})
          </button>
          {allTags.map((tag) => {
            const count = caseStudies.filter((study) =>
              study.frontmatter.tags.includes(tag)
            ).length

            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                    : 'glass-card border border-gray-800 text-gray-300 hover:border-primary-500/50'
                }`}
              >
                {tag} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Results */}
      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 glass-card rounded-lg">
          <p className="text-gray-400">
            No case studies found matching your criteria.
          </p>
        </div>
      )}
    </div>
  )
}
