'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_NAME } from '@/lib/constants'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'EXPERTISE', href: '/expertise' },
  { name: 'PERFORMANCE', href: '/case-studies' },
  { name: 'ARCHIVE', href: '/archive' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/5">
      <nav className="container-custom py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-bold text-white hover:text-gray-400 transition-colors uppercase tracking-[0.3em]"
          >
            {SITE_NAME}
          </Link>

          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors relative ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-white" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
