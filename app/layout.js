import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://renanflorencio.github.io/personal_page'),
  title: 'Renan Florencio | Machine Learning & AI',
  description: 'Personal portfolio of Renan Matheus da Silva Florencio — B.S. Computer Engineering at Unicamp, research in ML, LLMs, and driver behavior. Purdue PONTES exchange.',
  openGraph: {
    title: 'Renan Florencio | Machine Learning & AI',
    description: 'Personal portfolio — Unicamp, Purdue research, ML & LLMs.',
    type: 'website',
    url: 'https://renanflorencio.github.io/personal_page',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Renan Florencio | Machine Learning & AI Portfolio Cover',
      },
    ],
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
