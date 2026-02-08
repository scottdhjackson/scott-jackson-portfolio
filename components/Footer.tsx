import Link from 'next/link'
import { SITE_NAME, LINKEDIN_URL, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-6">
              {SITE_NAME}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              Data-informed SEO and analytics infrastructure for measurable growth.
              Based in the UK.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">
                Navigation
              </h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                    Performance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">
                Connect
              </h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
            &copy; {currentYear} All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  )
}
