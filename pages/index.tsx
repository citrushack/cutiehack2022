import { Page } from '@/components/Page/Page'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Element } from 'react-scroll'
import Landing from '@/pages/sections/landing'
import Schedule from '@/pages/sections/schedule'
import About from '@/pages/sections/about'
import Tracks from '@/pages/sections/tracks'
import Support from '@/pages/sections/support'
import Sponsors from '@/pages/sections/sponsors'
import Staff from '@/pages/sections/staff'
import Faq from '@/pages/sections/faq'
import Footer from '@/components/Footer'

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <Element name="Home">
        <Landing />
      </Element>
      <Element name="Schedule">
        <Schedule />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Tracks">
        <Tracks />
      </Element>
      <Element name="Support">
        <Support />
      </Element>
      <Element name="Sponsors">
        <Sponsors />
      </Element>
      <Element name="Staff">
        <Staff />
      </Element>
      <Element name="FAQ">
        <Faq />
      </Element>
      <Footer />
    </Page>
  )
}

export default Home
