import { NextThemeProvider } from '@/components/NextThemeProvider'
import { ResponsiveIndicator } from '@/components/devTools/ResponsiveIndicator'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <NextThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ResponsiveIndicator />
        </NextThemeProvider>

        <VercelAnalytics />
      </body>
    </html>
  )
}

// TODO: VercelAnalytics with deploy
// TODO: Toast
// TODO: SEO metadata

// LEARN: fonts setup with css variables
