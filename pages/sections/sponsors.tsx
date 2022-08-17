import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import sponsorLogos from '@/components/Sponsors/sponsorLogos'
import sponsorMap from '@/components/Sponsors/sponsorMap'

export default function Sponsors() {
  return (
    <div>
      <div><span className="flex w-full justify-center items-center text-6xl font-bold font-sans">
      <h1>Our Sponsors</h1></span></div>
      <div className="py-8 text-lg font-light"><h2>Thank you to all of those who made this hackathon possible!</h2></div>
      <motion.button 
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.995}}
      className="flex w-full py-3 justify-center items-center text-xl font-sans font-bold bg-lime-500 rounded-xl">
      Sponsor Us
      </motion.button>
      <div className="flex justify-center">
        {sponsorLogos.map((sponsorMap) => {
          return (
            <sponsorMap
              image={Sponsors.image}
            />
          )
        })}
      </div>
    </div>
  )
}
