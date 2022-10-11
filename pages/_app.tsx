import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { UserBar } from '@/components/UserBar/UserBar'
import Nav from '@/components/Page/Nav'
import { MLHBanner } from '@/components/MLHBanner'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider enableSystem={false}>
        <MLHBanner />
        <Nav />
        <Component {...pageProps} />
        <UserBar />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
