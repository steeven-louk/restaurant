import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Notification from '@/components/Notification'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Best Restaurant ever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
