import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { UserBar } from '@/components/UserBar/UserBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserBar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
