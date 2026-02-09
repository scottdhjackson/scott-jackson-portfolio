import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generateSiteMetadata({
  title: 'Side Projects',
  description:
    'Exploring new technologies and solving real-world problems through side projects. From time tracking apps to event management platforms.',
  path: '/side-projects',
})

const projects = [
  {
    name: 'The Ultra Run Collective',
    description:
      'An event management platform for ultra running events. Starting with basic event registration and user signup, with plans to expand into more sophisticated event management features as requirements evolve.',
    status: 'In Progress',
    tags: ['Event Management', 'Registration', 'Sports'],
    tech: ['Next.js', 'TypeScript', 'Stripe'],
  },
  {
    name: 'Moggle',
    description:
      'A time tracking and task management application built for internal workflow optimization. Streamlines project time allocation and task prioritization across teams.',
    status: 'Active',
    tags: ['Productivity', 'Internal Tools', 'Time Tracking'],
    tech: ['React', 'Supabase', 'TypeScript'],
  },
  {
    name: 'Pubswith.com',
    description:
      'A data-driven discovery platform built during COVID-19 that aggregated pub information and specific features (outdoor heaters, Sky Sports, fireplaces, etc.). No longer active but provided valuable experience in data aggregation and user-centric feature filtering.',
    status: 'Archived',
    tags: ['Data Aggregation', 'COVID-19 Project', 'Discovery'],
    tech: ['Next.js', 'API Integration', 'Database Design'],
  },
]

const statusColors = {
  Active: 'bg-green-500/10 text-green-400 border-green-500/20',
  Archived: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  'In Progress': 'bg-accent-500/10 text-accent-400 border-accent-500/20',
}

export default function SideProjectsPage() {
  return (
    <div className="py-16 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Side Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Personal projects exploring new technologies, solving real-world problems, and
            experimenting with different approaches to development. Each project teaches
            something new.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        statusColors[project.status as keyof typeof statusColors]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="border-t border-white/10 pt-4">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 text-gray-400 bg-white/5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-white">
              Have a Project Idea?
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Always interested in collaborating on interesting projects or discussing new
              ideas. If you have something in mind, let&apos;s talk.
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
