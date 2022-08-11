import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { UserBar } from '@/components/UserBar/UserBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
      <UserBar />
    </SessionProvider>
  )
}

export default MyApp
