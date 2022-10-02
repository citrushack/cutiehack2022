import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
