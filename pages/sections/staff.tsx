import { TeamGrid } from '@/components/Team/components'
import staffLineLeft from '../../public/assets/staffLineLeft.svg'
import staffLineRight from '../../public/assets/staffLineRight.svg'
import Image from 'next/image'

export default function Staff() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-24 max-w-[70rem] justify-center items-center bg-pattern bg-repeat bg-contain pb-4">
      <div className="flex justify-between pb-4">
        <Image
          src={staffLineLeft}
          alt="lineleft"
          className="inline"
          quality={1}
        />
        <span className="whitespace-nowrap px-12 text-5xl font-baloo_medium text-text">
          Staff
        </span>
        <Image
          src={staffLineRight}
          alt="lineright"
          className="inline"
          quality={1}
        />
      </div>
      <TeamGrid />
      <div className="pt-10 md:pt-20 flex flex-col justify-center">
        <p className="text-text font-baloo_semi_bold text-center pb-4">Committee Members</p>
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
