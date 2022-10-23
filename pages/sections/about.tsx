import staffLineLeft from '../../public/assets/staffLineLeft.svg'
import staffLineRight from '../../public/assets/staffLineRight.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <section className="grid grid-cols-3 w-full justify-center pt-10 bg-pattern bg-repeat bg-contain">
      <div className="flex w-full col-span-3 md:col-span-2 justify-center pt-20">
        <div className="flex flex-col max-w-xl lg:max-w-3xl xl:max-w-3xl px-10">
          <span className="flex whitespace-nowrap items-center">
            <p className="text-5xl font-baloo_semi_bold text-text">About Us</p>
            {/* <Image src={staffLineRight} alt="lineright" /> */}
            <div className="inline bg-gradient-to-r from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
          </span>
          <p className="text-text font-baloo_regular text-lg md:text-xl z-50">
            Cutie Hack is a virtual 12-hour, beginner-oriented hackathon hosted
            by students at the University of California, Riverside. Hackers are
            challenged with creating a cool project within the timeframe to demo
            in order to win awesome prizes. Cutie Hack will also be hosting
            informative workshops, fun games, and industry networking.
            <br></br>
            <br></br>
            While this hackathon is created around beginners, we welcome anyone
            from any highschool or college no matter your experience level. Come
            on out and see what you can make!
          </p>
        </div>
      </div>
      <div className="flex absolute opacity-20 md:opacity-100 md:static z-10 flex-col">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="lg:self-end max lg:w-10/12"
          // className="lg:self-end max-w-[350rem] lg:max-w-[80rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu"
        >
          <Image
            src="/assets/aboutuslamps.svg"
            width={558}
            height={500}
            quality={1}
            priority={Boolean(true)}
            objectFit="contain"
            alt="lamps"
          />
        </motion.div>
        {/* <div className="lg:self-end max-w-[30rem] lg:max-w-[80rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu"> */}
        <div className="lg:self-end lg:w-10/12">
          <Image
            src="/assets/hand2.svg"
            width={615}
            height={600}
            quality={1}
            priority={Boolean(true)}
            objectFit="contain"
            alt="hand"
          />
        </div>
      </div>
    </section>
  )
}
