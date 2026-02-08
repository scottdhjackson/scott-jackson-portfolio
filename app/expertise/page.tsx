import Image from 'next/image'
import { Metadata } from 'next'
import { COMPANIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Me - Scott Jackson',
  description: 'Technical SEO strategist with 10 years of agency experience, specialising in Python programming and generative AI.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Headshot */}
      <section className="py-32 border-b border-white/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Round Headshot */}
            <div className="mb-12 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/SJ_headshot.jpg"
                  alt="Scott Jackson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tighter mb-8 text-white">
              About Me
            </h1>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-sm md:prose-base">
              <p className="text-gray-300 leading-relaxed mb-6">
                Hi, I’m Scott - a technical SEO strategist with over 10 years of agency experience.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I specialise in SEO strategy with a strong focus on Python-driven automation and the practical application of generative AI. My work sits at the intersection of technical SEO, data engineering, and scalable content systems, helping businesses move beyond manual optimisation and into repeatable, high-impact growth.

              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I work primarily across the travel and ecommerce sectors, bringing deep domain expertise to complex, large-scale websites. This includes extensive experience optimising product feeds for Google Merchant Centre, improving organic shopping performance, and designing data-led SEO strategies that deliver measurable commercial outcomes.

              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My approach combines solid technical fundamentals with modern tooling - from custom Python workflows and large-scale data analysis to AI-assisted content and feed optimisation. The result is SEO that is strategic, efficient, and built to scale, not just quick wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">
                Companies I&apos;ve Worked With
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
                {COMPANIES.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-16"
                  >
                    <div
                      className="w-[150px] h-16 bg-gradient-to-r from-primary-400 to-accent-400"
                      style={{
                        maskImage: `url(${company.logo})`,
                        WebkitMaskImage: `url(${company.logo})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
