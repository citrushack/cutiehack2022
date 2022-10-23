import staffLineLeft from '../../public/assets/staffLineLeft.svg'
import staffLineRight from '../../public/assets/staffLineRight.svg'
import Image from 'next/image'
export default function Tracks() {
  return (
    <section className="flex flex-col w-full items-center pb-10 pt-40 md:pt-0 bg-pattern bg-repeat">
      <div className="flex justify-between pb-4 items-center">
        {/* <Image src={staffLineLeft} alt="lineleft" className="inline" /> */}
        <div className="inline bg-gradient-to-l from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        <span className="whitespace-nowrap px-12 text-3xl md:text-5xl font-baloo_semi_bold text-text">
          Tracks
        </span>
        <div className="inline bg-gradient-to-r from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        {/* <div className="inline bg-gradient-to-r from-text to-transparent w-full h-1 items-center rounded-md"></div> */}
        {/* <Image src={staffLineRight} alt="lineright" className="inline" /> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-y-5 md:gap-y-0">
        <div className="flex flex-col justify-center items-center max-w-[10rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-full transform-gpu">
          <Image
            src="/assets/plants.svg"
            width={200}
            height={200}
            quality={1}
            priority={Boolean(true)}
            objectFit="contain"
            alt="plants"
          />
          <p className="font-baloo_semi_bold text-text text-md md:text-2xl">
            Sustainability
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-[10rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-full transform-gpu">
          <Image
            src="/assets/lightbulb.svg"
            width={200}
            height={200}
            quality={1}
            priority={Boolean(true)}
            objectFit="contain"
            alt="lightbulb"
          />
          <p className="font-baloo_semi_bold text-text text-md md:text-2xl">
            Innovation
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-[10rem] md:max-w-[10rem] lg:max-w-[30rem] lg:w-5/12 xl:w-full transform-gpu">
          <Image
            src="/assets/laptop.svg"
            width={200}
            height={200}
            quality={1}
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
