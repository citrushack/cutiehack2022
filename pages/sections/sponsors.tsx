import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import SponsorLogos from '@/components/Sponsors/sponsorLogos'
import SponsorMap from '@/components/Sponsors/sponsorMap'

export default function Sponsors() {
  const [IsMobile, setIsMobile] = useState(false)//hydration error?
  return (
    <div>
      <div className="flex w-full justify-center items-center text-6xl font-bold font-Arial">
      <h1>Our Sponsors</h1></div>
      <div className="flex w-full justify-center items-center py-8 text-lg font-light">
      <h2>Thank you to all of those who made this hackathon possible!</h2></div>
    
        <div>
          <motion.button 
          className="justify-center w-80 py-3 text-xl font-sans font-bold bg-lime-500 rounded-xl"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.995}}>
          Sponsor Us
          </motion.button>
        </div>

          <div className="flex col-span-4 justify-center items-center py-3.5">
            {SponsorLogos.map((sponsor) => {
            return (
            <SponsorMap
              image={sponsor.image}
              key={sponsor.logoKey}
            />
            )
            })}
          </div>
    </div>
  )}