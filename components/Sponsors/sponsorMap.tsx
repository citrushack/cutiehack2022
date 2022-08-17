import React from 'react'
import Image from 'next/image'
import { MdHighQuality } from 'react-icons/md'
import { motion } from 'framer-motion'
//Notes: onClick add links to the images later

export default function sponsorMap({ image }){
    return (
        <div>
            <motion.div //image pop up
                whileHover={{scale: 1.05}}
            ></motion.div>
            <Image //sets the image shape 
                src={image}
                width={750}
                height={750}
                layout='responsive'
                objectFit='contain'
                quality={100}
                alt='placeholder' //text if image doesn't load
            ></Image>
        </div>
    )

}