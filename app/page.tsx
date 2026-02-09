import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getFeaturedCaseStudies } from '@/lib/mdx'
import CaseStudyCard from '@/components/CaseStudyCard'
import EmailButton from '@/components/EmailButton'
import {
  SITE_NAME,
  SITE_TAGLINE,
  PROOF_POINTS,
  SERVICES,
  SKILLS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Scott Jackson - SEO. Data. AI',
}

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies(3)

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-6xl">
            {/* Main Headline */}
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter mb-12">
              <div className="text-primary-400">SEO.</div>
              <div className="text-accent-400">DATA.</div>
              <div className="text-green-400">AI.</div>
            </h1>

            {/* Supporting Text */}
            <div className="max-w-2xl mb-16">
              <p className="text-sm text-gray-400 leading-relaxed mb-8 tracking-wide">
                Implementing systematic frameworks for technical SEO, programmatic content deployment,
                analytics infrastructure, and AI-powered search optimisation. Data-informed execution
                at scale.
              </p>
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                SCOTT JACKSON / SEO + DATA + AI
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies" className="btn-primary">
                View Work
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] mb-8">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Core Systems
                </span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {PROOF_POINTS.map((point, index) => (
                  <div
                    key={index}
                    className="border-l border-white/10 pl-6 py-2 hover:border-white/30 transition-colors"
                  >
                    <p className="text-sm text-gray-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-32 border-t border-white/10">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xs uppercase tracking-[0.3em]">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Selected Work
                </span>
              </h2>
              <Link
                href="/case-studies"
                className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-12">
              {featuredCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} caseStudy={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="py-32 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] mb-8">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {SERVICES.map((service, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-sm font-medium text-white uppercase tracking-wider">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-32 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] mb-8">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {SKILLS.map((skill, index) => (
                  <div
                    key={index}
                    className="text-xs text-gray-400 uppercase tracking-wider hover:text-white transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tighter mb-8">
              <span className="text-white">READY TO</span>
              <br />
              <span className="text-white">OPTIMISE</span>
            </h2>
            <p className="text-sm text-gray-400 mb-12 max-w-xl leading-relaxed">
              Available for consulting engagements, technical audits, and implementation support.
              Response time: 24-48 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <EmailButton className="btn-secondary">
                Email Direct
              </EmailButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
