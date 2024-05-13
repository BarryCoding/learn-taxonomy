import '@/styles/globals.css'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='min-h-screen'>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
