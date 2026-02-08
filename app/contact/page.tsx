import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { LINKEDIN_URL } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import ObfuscatedEmail from '@/components/ObfuscatedEmail'

export const metadata = generateSiteMetadata({
  title: 'Contact',
  description:
    'Get in touch to discuss SEO, analytics, or AI search optimization projects. Available for consulting, audits, and ongoing support.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="py-16 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Looking to improve your SEO, analytics, or AI search visibility? Let&apos;s discuss
              how I can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-lg glow-border">
              <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Other Ways to Connect</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 glass-card p-4 rounded-lg hover:glow-border transition-all duration-300">
                  <div className="p-3 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Email</h3>
                    <ObfuscatedEmail className="text-primary-400 hover:text-primary-300 transition-colors" />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4 glass-card p-4 rounded-lg hover:glow-border transition-all duration-300">
                  <div className="p-3 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">LinkedIn</h3>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 p-6 glass-card rounded-lg border border-gray-800">
                  <h3 className="font-semibold mb-2 text-white">Availability</h3>
                  <p className="text-gray-400 text-sm">
                    I&apos;m currently available for consulting projects, technical SEO audits,
                    and ongoing SEO/analytics support. Typical response time: 24-48 hours.
                  </p>
                </div>

                {/* Services */}
                <div className="p-6 glass-card rounded-lg glow-border">
                  <h3 className="font-semibold mb-3 text-white">Services I Offer</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Technical SEO audits & implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Programmatic SEO strategy & execution
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      GA4 & analytics setup & training
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      AI search optimization (GEO)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Custom dashboards & reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
