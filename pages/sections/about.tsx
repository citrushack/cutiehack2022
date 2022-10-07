import staffLineLeft from '../../public/assets/staffLineLeft.svg'
import staffLineRight from '../../public/assets/staffLineRight.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <section className="grid grid-cols-3 w-full justify-center pt-10 pb-10">
      <div className="flex w-full col-span-2 justify-center">
        <div className="flex flex-col max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl px-20">
          <span className="flex whitespace-nowrap items-center">
            <p className="text-5xl font-baloo_semi_bold text-text">About Us</p>
            <Image src={staffLineRight} alt="lineright" />
          </span>
          <p className="text-text font-baloo_regular">
            Cutie Hack is a virtual 12-hour, beginner-oriented hackathon hosted
            by studnets at the University of California, Riverside. Hackers are
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
      <div className="flex flex-col">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="lg:self-end max-w-[350rem] lg:max-w-[80rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu"
        >
          <Image
            src="/assets/aboutuslamps.svg"
            width={558}
            height={500}
            quality={50}
            priority={Boolean(true)}
            objectFit="contain"
            alt="lamps"
          />
        </motion.div>
        <div className="lg:self-end max-w-[30rem] lg:max-w-[80rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu">
          <Image
            src="/assets/hand2.svg"
            width={615}
            height={600}
            quality={50}
            priority={Boolean(true)}
            objectFit="contain"
            alt="hand"
          />
        </div>
      </div>
      <div className="flex col-span-3 justify-center pb-4 px-20 items-center w-full pt-10">
        <Image src={staffLineLeft} alt="lineleft" className="inline" />
        <span className="whitespace-nowrap px-12 text-3xl md:text-5xl font-baloo_medium text-text">
          Tracks
        </span>
        <Image src={staffLineRight} alt="lineright" className="inline" />
      </div>
      <div className="flex col-span-3 justify-center px-20 gap-20 md:gap-32">
        <div className="flex flex-col justify-center items-center max-w-[4rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu">
          <Image
            src="/assets/plants.svg"
            width={200}
            height={200}
            quality={50}
            priority={Boolean(true)}
            objectFit="contain"
            alt="plants"
          />
          <p className="font-baloo_semi_bold text-text text-md md:text-2xl">
            Sustainability
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-[4rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu">
          <Image
            src="/assets/lightbulb.svg"
            width={200}
            height={200}
            quality={50}
            priority={Boolean(true)}
            objectFit="contain"
            alt="lightbulb"
          />
          <p className="font-baloo_semi_bold text-text text-md md:text-2xl">
            Innovation
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-[4rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-1/2 2xl:w-7/12 transform-gpu">
          <Image
            src="/assets/laptop.svg"
            width={200}
            height={200}
            quality={50}
            priority={Boolean(true)}
            objectFit="contain"
            alt="laptop"
          />
          <p className="font-baloo_semi_bold text-text text-md md:text-2xl">
            Optimization
          </p>
        </div>
      </div>
    </section>
  )
}
