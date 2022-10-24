import { TeamGrid } from '@/components/Team/components'
import staffLineLeft from '../../public/assets/staffLineLeft.svg'
import staffLineRight from '../../public/assets/staffLineRight.svg'
import Image from 'next/image'

export default function Staff() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-24 max-w-[70rem] justify-center items-center bg-pattern bg-repeat pb-4">
      <div className="flex justify-between pb-4 items-center">
        {/* <Image
          src={staffLineLeft}
          alt="lineleft"
          className="inline"
          quality={1}
        /> */}
        <div className="inline bg-gradient-to-l from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        <span className="whitespace-nowrap px-4 text-5xl font-baloo_medium text-text">
          Staff
        </span>
        {/* <Image
          src={staffLineRight}
          alt="lineright"
          className="inline"
          quality={1}
        /> */}
        <div className="inline bg-gradient-to-r from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
      </div>
      <TeamGrid />
      <div className="pt-10 md:pt-20 flex flex-col justify-center">
        <div className="flex justify-between pb-4 items-center">
          <div className="inline bg-gradient-to-l from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
          <p className="text-text font-baloo_semi_bold text-center px-4">
            Committee Members
          </p>
          <div className="inline bg-gradient-to-r from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        </div>
        <div className="grid grid-cols-2 text-center text-sub font-baloo_regular">
          <div>
            <p className="text-text font-baloo_semi_bold">Web Development</p>
            <p>Valerie Wong</p>
            <p>Theo Fernandez</p>
            <p>Andrei Dimaano</p>
            <p>Raidah Fairooz</p>
            <p>Nicholas Chao</p>
          </div>
          <div>
            <p className="text-text font-baloo_semi_bold">Marketing</p>
            <p>Natalie Jung</p>
            <p>Elaine Lin</p>
          </div>
        </div>
      </div>
    </section>
  )
}
