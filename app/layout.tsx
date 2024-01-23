import Navbar from '@/components/nav/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

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
      <body>
        <Navbar></Navbar>
        <div className='pt-20 h-screen bg-custom'>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
