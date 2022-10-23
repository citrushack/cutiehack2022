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
      'flex items-center justify-center min-h-[5rem] w-48 md:w-64 ' +
      (shrink ? 'w-28 md:w-28' : '') +
      (tall ? 'w-20 md:w-28' : '')
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
    name: 'redbull',
    image: '/assets/sponsors/redbull.svg',
    imageDark: '/assets/sponsors/redbull.svg',
    width: 380.2,
    height: 228.7,
    link: 'https://www.redbull.com/us-en/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'triad',
    image: '/assets/sponsors/triad.png',
    imageDark: '/assets/sponsors/triad.png',
    width: 371,
    height: 95,
    link: 'https://www.triadmagnetics.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'wolfram',
    image: '/assets/sponsors/wolfram.svg',
    imageDark: '/assets/sponsors/wolfram.svg',
    width: 334,
    height: 58,
    link: 'https://www.wolframalpha.com/',
    shrink: null,
    tall: null,
  },
  {
    name: 'google cloud',
    image: '/assets/sponsors/googlecloud.svg',
    imageDark: '/assets/sponsors/googlecloud.svg',
    width: 11682.8504,
    height: 2111.8095,
    link: 'https://cloud.google.com/',
    shrink: null,
    tall: null,
  },
  {
    name: 'sketch',
    image: '/assets/sponsors/sketch.svg',
    imageDark: '/assets/sponsors/sketch.svg',
    width: 200,
    height: 46,
    link: 'https://sketch.com/',
    shrink: Boolean(true),
    tall: null,
  },
  {
    name: 'interview cake',
    image: '/assets/sponsors/cake.png',
    imageDark: '/assets/sponsors/cake.svg',
    width: 525,
    height: 90,
    link: 'https://www.interviewcake.com/',
    shrink: null,
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
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20 mt-16">
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
