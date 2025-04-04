import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Soo Kim</title>
        <link rel="icon" href="🪩" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" disableSystemTheme>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Soo Kim',  // This will appear in the browser tab
  icons: '🪩'       // This will be the favicon
}
