import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicki Sims Hair',
  description: 'Everything you need to know about the work of Nicki Sims, independent hair stylist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className=''>
        <Navbar></Navbar>
        <div className='pt-20 h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
