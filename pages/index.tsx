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
import { Wave } from '@/components/Wave'

import LandingLamps from '../public/assets/landingLamps.svg'
import mountains from '../public/assets/mountains.svg'
import Image from 'next/image'
import { useTheme } from 'next-themes'
const Home: NextPage = () => {
  const { theme } = useTheme()

  return (
    <Page title="Home">
      <Element
        name="Home"
        className="flex relative justify-center h-screen w-full bg-gradient-to-b from-from via-via to-to"
      >
        <span className="flex relative justify-center w-full items-center bg-[url('/assets/landingLamps.svg'),_url('/assets/mountains2.svg')] bg-[position:top_right,bottom_right] bg-contain bg-no-repeat">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1570"
            preserveAspectRatio="none"
            className="absolute w-full z-10"
          >
            <path
              id="Intersection_2"
              data-name="Intersection 2"
              d="M388.7,1984.514v-1570H878.047c26.8,129.023,635.56,272.686,517.893,435.38-141.711,195.942,82.015,226.021-24.206,342.492s-12.447,189.469,165.009,224,288.031,203.674,540.044,156.1c113.729-21.47,172,51.341,222.341,124.153q4.831,6.987,9.575,13.947v273.923Z"
              transform="translate(-388.702 -414.513)"
              fill="#fff"
            />
          </svg> */}

          <svg
            viewBox="0 0 1920 1300"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute w-full top-0 z-10"
          >
            <path
              d="M0 1570V0H489.347C516.147 129.023 1124.91 272.686 1007.24 435.38C865.529 631.322 1089.25 661.401 983.034 777.872C876.813 894.343 970.587 967.341 1148.04 1001.87C1325.5 1036.4 1436.07 1205.55 1688.09 1157.97C1801.82 1136.5 1860.09 1209.31 1910.43 1282.12C1913.65 1286.78 1916.84 1291.43 1920 1296.07V1569.99L0 1570Z"
              fill={'var(--primary)'}
            />
          </svg>
          {/* <span className="absolute transform-gpu top-0 right-0">
            <Image src={LandingLamps} alt="lamps" />
          </span> */}
          {/* <span className="absolute right-0 bottom-0 z-0 w-full">
            <Image src={mountains} alt="mountains" />
          </span> */}
          {/* <div className="absolute bottom-0 lg:self-end max-w-[30rem] lg:max-w-[100rem] lg:w-5/12 xl:w-7/12 2xl:w-7/12 transform-gpu">
            <Image
              src={mountains}
              width={615}
              height={600}
              quality={50}
              priority={Boolean(true)}
              objectFit="contain"
              alt="hand"
            />
          </div> */}
          <Landing />
        </span>
      </Element>
      <Element name="Schedule">
        <Schedule />
      </Element>
      <Wave type={4} bgColor="#FFFFFF" fillColor="from" />
      <div className="flex flex-col justify-center w-full bg-gradient-to-b from-from via-via to-to">
        <Element name="About">
          <About />
        </Element>
        <Element name="Tracks">
          <Tracks />
        </Element>
      </div>
      <Wave type={5} bgColor="#FFFFFF" fillColor="via2" />
      <Element
        name="Support"
        className="flex justify-center w-full bg-gradient-to-b from-accent to-card"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
          <Support />
        </span>
      </Element>
      <Element name="Sponsors">
        <Sponsors />
      </Element>
      <Wave type={2} bgColor="#FFFFFF" fillColor="from" />
      <Element
        name="Staff"
        className="flex justify-center w-full bg-gradient-to-b from-from via-via to-to"
      >
        <span className="flex justify-center px-4 w-full">
          <Staff />
        </span>
      </Element>
      <Wave type={3} bgColor="#FFFFFF" fillColor="via2" />
      <Element
        name="FAQ"
        className="flex justify-center px-4 w-full bg-gradient-to-b"
      >
        <Faq />
      </Element>
      <Wave type={1} bgColor="#FFFFFF" fillColor="from" />
      <span className="flex relative w-full bg-gradient-to-b from-from to-to">
        {/* <Wave type={1} bgColor="bg-primary" fillColor="wave-from" /> */}
        <Footer />
      </span>
    </Page>
  )
}

export default Home
