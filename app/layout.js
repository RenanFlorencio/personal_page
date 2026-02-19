import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Renan Florencio | Computer Engineering & Research',
  description: 'Personal portfolio of Renan Matheus da Silva Florencio — B.S. Computer Engineering at Unicamp, research in ML, LLMs, and driver behavior. Purdue PONTES exchange.',
  openGraph: {
    title: 'Renan Florencio | Computer Engineering & Research',
    description: 'Personal portfolio — Unicamp, Purdue research, ML & LLMs.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0369a1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
