import Header from '@/components/header '
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer '
import { Metadata } from 'next'
import configuration from '@/configuration '
import ProgressBar from '@/components/progressBar '

const inter = Inter({ subsets: ['latin'] })

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: {
    default: configuration.site.name,
    template: `%s | ${configuration.site.siteName}`,
  },
  description: configuration.site.description,
  icons: {
    apple: '/images/favicon/apple-touch-icon.png',
    icon: [
      '/images/favicon/favicon-16x16.png',
      '/images/favicon/favicon-32x32.png',
    ],
    shortcut: '/images/favicon/favicon.ico',
  },
  manifest: '/images/favicon/site.webmanifest',

  openGraph: {
    type: 'article',
    title: configuration.site.name,
    description: configuration.site.description,
  },
  twitter: {
    card: 'summary_large_image',
    description: configuration.site.description,
    title: configuration.site.name,
    creator: configuration.site.twitterHandle,
  },
}

// eslint-disable-next-line import/no-unused-modules
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    name: configuration.site.name,
    url: configuration.site.siteUrl,
    logo: `${configuration.site.siteUrl}/images/favicon/favicon-32x32.png`,
    '@context': 'https://schema.org',
    '@type': 'Organization', // change to person for Personal websites
  }

  return (
    <html lang='en'>
      <head>
        <script
          key='ld:json'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <ProgressBar />
        <main className='flex flex-1 flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
