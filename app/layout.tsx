import { ResponsiveIndicator } from '@/components/devTools/ResponsiveIndicator'
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
        <ResponsiveIndicator />
        <VercelAnalytics />
      </body>
    </html>
  )
}

// TODO: VercelAnalytics with deploy
// TODO: dark mode: useLocalStorageState & setMode(mode)
// TODO: Toast
// TODO: SEO metadata
// TODO: fonts
