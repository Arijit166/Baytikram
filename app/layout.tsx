import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Jadavpur Byatikrom | Experimental Theatre Group',
  description: 'Discover the world of experimental Bengali theatre with Jadavpur Byatikrom. Productions, gallery, and cultural initiatives.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8B1538',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#F5F1E8]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
