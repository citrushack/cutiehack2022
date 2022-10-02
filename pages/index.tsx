import { Page } from '@/components/Page/Page'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Element } from 'react-scroll'
import Landing from '@/pages/sections/landing'

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <Element
        name="Home"
        className="w-full bg-gradient-to-b from-accent via-accent-secondary to-primary "
      >
        <span className="flex w-full justify-center bg-[url('/assets/lamps.svg'),_url('/assets/mountains.svg')] bg-[position:top,bottom] bg-contain bg-repeat-x">
          <Landing />
        </span>
      </Element>
    </Page>
  )
}
export default Home
