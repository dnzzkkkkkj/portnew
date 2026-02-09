import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'dnzz dev | Front-end Developer',
  description: 'Desenvolvedor Front-end especializado em JavaScript, TypeScript, Next.js, HTML e CSS',
  icons: {
    icon: [
      {
        url: '/icon-sol.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-lua.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-dnzz.png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
