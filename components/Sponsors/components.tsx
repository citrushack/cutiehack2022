import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface SponsorProps {
  /** Path to sponsor logo (e.g. /assets/sponsors/google-cloud.svg). */
  image: string
  /** Width of sponsor logo. */
  width: number
  /** Height of sponsor logo. */
  height: number
  /** Link to sponsor website. */
  link: string
  /** Decides whether to shrink the sponsor logo if it appears larger than others in the same tier. */
  shrink?: boolean
  /** Decides whether to shrink the sponsor logo even more if it still appears larger than others in the same tier. */
  tall?: boolean
}

/** Individual sponsor logo linked to sponsor website. */
export const Sponsor = ({
  image,
  width,
  height,
  link,
  shrink,
  tall,
}: SponsorProps) => (
  <div
    className={
      'flex items-center justify-center min-h-[5rem] w-20 md:w-64 ' +
      (shrink ? 'w-28 md:w-28' : '') +
      (tall ? ' w-32 md:w-28' : '')
    }
  >
    <motion.div>
      <a target="_blank" rel="noreferrer noopener" href={link}>
        <Image
          src={image}
          alt=""
          width={width}
          height={height}
          objectFit="contain"
          quality={1}
        />
      </a>
    </motion.div>
  </div>
  // <div>
  //   <motion.div
  //     whileHover={{ scale: 1.05 }}
  //     whileTap={{ scale: 0.995 }}
  //     className='w-full transform-gpu'
  //   >
  //     <a target='_blank' rel='noreferrer noopener' href={link}>
  //       <Image
  //         src={image}
  //         width={width}
  //         height={height}
  //         quality={50}
  //         priority={Boolean(true)}
  //         layout='responsive'
  //         objectFit='contain'
  //         alt=''
  //       />
  //     </a>
  //   </motion.div>
  // </div>
)

const sponsors = [
  {
    name: 'google cloud',
    image: '/assets/sponsors/google-cloud.svg',
    imageDark: '/assets/sponsors/google-cloud.svg',
    width: 2278,
    height: 1833,
    link: 'https://cloud.google.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'triad',
    image: '/assets/sponsors/triad-light.svg',
    imageDark: '/assets/sponsors/triad-dark.svg',
    width: 1789,
    height: 2201,
    link: 'https://www.triadmagnetics.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'redbull',
    image: '/assets/sponsors/redbull-black.svg',
    imageDark: '/assets/sponsors/redbull-white.svg',
    width: 225,
    height: 83,
    link: 'https://www.redbull.com/us-en/',
    shrink: null,
    tall: Boolean(true),
  },
  {
    name: 'wolfram',
    image: '/assets/sponsors/wolfram-light.svg',
    imageDark: '/assets/sponsors/wolfram-dark.svg',
    width: 3755,
    height: 2927,
    link: 'https://www.wolframalpha.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'sketch',
    image: '/assets/sponsors/sketch-light.svg',
    imageDark: '/assets/sponsors/sketch-dark.svg',
    width: 1407,
    height: 1288,
    link: 'https://sketch.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'interview cake',
    image: '/assets/sponsors/interview-cake-light.svg',
    imageDark: '/assets/sponsors/interview-cake-dark.svg',
    width: 1754,
    height: 1850,
    link: 'https://www.interviewcake.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'ACM',
    image: '/assets/sponsors/acm-light.svg',
    imageDark: '/assets/sponsors/acm-dark.svg',
    width: 910,
    height: 910,
    link: 'https://acmucr.org',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'IEEE',
    image: '/assets/sponsors/ieee-light.svg',
    imageDark: '/assets/sponsors/ieee-dark.svg',
    width: 745,
    height: 959,
    link: 'https://ieee.ucr.edu/',
    shrink: Boolean(true),
    tall: null,
  },
]

/** Grid of sponsors of all specified tiers. */
export function SponsorsGrid() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="grid gap-y-10 grid-cols-2 md:gap-20 gap-x-20">
      {sponsors.map(
        ({ name, link, width, height, shrink, tall, image, imageDark }) => (
          <div key={name} className="flex justify-center grid-cols-1">
            <Sponsor
              key={link}
              image={theme === 'light' ? image : imageDark}
              width={width}
              height={height}
              link={link}
              shrink={shrink}
              tall={tall}
            />
          </div>
        )
      )}
    </div>
  )
}
