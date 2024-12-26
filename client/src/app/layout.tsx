'use client'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
