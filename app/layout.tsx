import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedGrid from '@/components/AnimatedGrid'
import PageLoader from '@/components/PageLoader'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { getPersonSchema, getWebSiteSchema } from '@/lib/schema'
import { SITE_NAME } from '@/lib/constants'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = generateSiteMetadata({
  title: SITE_NAME,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = getPersonSchema()
  const websiteSchema = getWebSiteSchema()

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={robotoMono.className}>
        <PageLoader />
        <div className="flex flex-col min-h-screen animate-fade-in">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
