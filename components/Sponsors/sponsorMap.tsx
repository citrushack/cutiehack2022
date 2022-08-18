import React from 'react'
import Image from 'next/image'
import { MdHighQuality } from 'react-icons/md'
import { motion } from 'framer-motion'

//Notes: onClick add links to the images later

export default function SponsorMap({
  image,
  logoKey,
  size_width,
  size_height,
}) {
  return (
    <div key={logoKey}>
      <motion.div //image pop up
        whileHover={{ scale: 1.05 }}
      >
        <Image //sets the image properties
          src={image}
          width={size_width}
          height={size_height}
          quality={100}
          alt="placeholder" //text if image doesn't load
        />
      </motion.div>
    </div>
  )
}
