import { Page } from '@/components/Page/Page'
import type { NextPage } from 'next'

import { Element } from 'react-scroll'
import Landing from '@/pages/sections/landing'
import Schedule from '@/pages/sections/schedule'
import About from '@/pages/sections/about'
import Tracks from '@/pages/sections/tracks'
import Support from '@/pages/sections/support'
import Sponsors from '@/pages/sections/sponsors'
import Staff from '@/pages/sections/staff'
import Faq from '@/pages/sections/faq'
import Footer from '@/components/Page/Footer'
import { Wave } from '@/components/Wave'

import desktopLamps from '../public/assets/desktopLamps.svg'
import mobileLamps from '../public/assets/mobileLamps.svg'
import mobileMountains from '../public/assets/mountains4.svg'
import desktopMountains from '../public/assets/mountains2.svg'

import Image from 'next/image'
import { motion } from 'framer-motion'
const Home: NextPage = () => {
  return (
    <Page title="Home">
      <Element
        name="Home"
        className="flex relative justify-center h-screen w-full bg-gradient-to-b from-from via-via to-to"
      >
        <span className="flex relative justify-center w-full items-center bg-pattern bg-repeat bg-contain">
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
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="self-end md:hidden absolute top-0 right-0"
          >
            <Image
              src={mobileLamps}
              alt=""
              placeholder="blur"
              blurDataURL="/assets/mobileLampsBlur.png"
            />
          </motion.span>
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="hidden md:flex self-end absolute top-0 right-0"
          >
            <Image
              src={desktopLamps}
              alt=""
              placeholder="blur"
              blurDataURL="/assets/desktopLampsBlur.png"
            />
          </motion.span>
          {/* <span className="absolute max-w-[10rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-full transform-gpu"></span> */}
          <span className="self-end md:hidden absolute right-0 bottom-0">
            <Image
              src={mobileMountains}
              alt=""
              placeholder="blur"
              blurDataURL="/assets/mountains4blur.png"
            />
          </span>
          <span className="hidden md:flex self-end absolute right-0 bottom-0">
            <Image
              src={desktopMountains}
              alt=""
              placeholder="blur"
              blurDataURL="/assets/mountain2blur.png"
            />
          </span>
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
