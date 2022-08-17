import React from 'react'
import Image from 'next/image'
import { MdHighQuality } from 'react-icons/md'
import { motion } from 'framer-motion'
//Notes: onClick add links to the images later

export default function SponsorMap({ image, imageKey }){
    return (
        <div key={imageKey}>
            <motion.div //image pop up
                whileHover={{scale: 1.05}}
            ></motion.div>
            <Image //sets the image properties 
                src={image}
                width={100}
                height={100}
                layout='responsive'
                objectFit='contain'
                quality={100}
                alt='placeholder' //text if image doesn't load
            ></Image>
        </div>
    )

}