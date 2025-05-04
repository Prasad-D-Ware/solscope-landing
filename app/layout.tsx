import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolScope',
  description: 'A discord bot for Solana',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
