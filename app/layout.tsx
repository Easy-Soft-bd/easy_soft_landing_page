import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Easy Soft - Smart Digital Solutions',
  description: 'We help businesses build powerful websites, automate workflows, and create scalable digital systems.',
  openGraph: {
    title: 'Easy Soft - Smart Digital Solutions',
    description: 'We help businesses build powerful websites, automate workflows, and create scalable digital systems.',
    url: 'https://easysoft.agency',
    siteName: 'Easy Soft',
    locale: 'en_US',
    type: 'website',
  },
};

import { BackgroundPattern } from '@/components/ui/background-pattern';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased text-brand-text bg-brand-dark selection:bg-brand-primary selection:text-white" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundPattern />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
