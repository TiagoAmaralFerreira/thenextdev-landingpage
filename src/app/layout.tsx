import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils'
import './globals.css';
import { ThemeProvider } from './_components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'The Next Dev - Full-stack Nexts.js 14',
  description: 'Curso Full-stack Nexts.js 14',
  keywords: [
    'Next.js',
    'Next.js 14',
    'React.js',
    'Tiago Amaral',
    'Curso Next.js',
    'JavaScript',
    'TypeScript',
    'Full-stack',
    'Tailwind CSS',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
