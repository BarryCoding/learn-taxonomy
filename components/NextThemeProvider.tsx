'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect, useState } from 'react'

export const NextThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // Ensure that the component renders the same content server-side as it does during the initial client-side render to prevent a hydration mismatch.
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient && <ThemeProvider {...props}>{children}</ThemeProvider>
}

// isClient to get rid of hydration warnings
