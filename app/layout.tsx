import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HackHost - The Intelligent Platform for Effortless Hackathons',
  description: 'AI-powered co-pilot to launch, match, and support your event. Streamline every aspect of your hackathon with intelligent automation.',
  keywords: ['hackathon', 'AI', 'event management', 'team matching', 'automation'],
  authors: [{ name: 'HackHost Team' }],
  openGraph: {
    title: 'HackHost - The Intelligent Platform for Effortless Hackathons',
    description: 'AI-powered co-pilot to launch, match, and support your event.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackHost - The Intelligent Platform for Effortless Hackathons',
    description: 'AI-powered co-pilot to launch, match, and support your event.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
