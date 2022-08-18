import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SponsorLogos from '@/components/Sponsors/SponsorLogos'
import SponsorMap from '@/components/Sponsors/SponsorMap'

export default function Sponsors() {
  return (
    <div>
      <div className="flex w-full justify-center items-center text-6xl font-bold font-Arial">
        <h1>Our Sponsors</h1>
      </div>
      <div className="flex w-full justify-center items-center py-8 text-lg font-light">
        <h2>Thank you to all of those who made this hackathon possible!</h2>
      </div>

      <div className="flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          style={{
            display: 'flex',
            width: '200px',
            height: '3rem',
            color: 'black',
            fontWeight: '650',
            backgroundColor: '#87bd08d4',
            borderRadius: '0.5rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Sponsor Us
        </motion.button>
      </div>

      <div className="flex flex-wrap h-screen gap-4 items-center justify-center md:gap-8">
        {SponsorLogos.map((sponsor) => {
          return (
            <SponsorMap
              image={sponsor.image}
              key={sponsor.logoKey}
              size_width={sponsor.size_width}
              size_height={sponsor.size_height}
            />
          )
        })}
      </div>
    </div>
  )
}
