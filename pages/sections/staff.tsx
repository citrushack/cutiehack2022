import { TeamGrid } from '@/components/Team/components'
import staffLineLeft from '../../public/assets/staffLineLeft.svg'
import staffLineRight from '../../public/assets/staffLineRight.svg'
import Image from 'next/image'

export default function Staff() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-24 max-w-[70rem] justify-center items-center bg-pattern bg-repeat bg-contain pb-4">
      <div className="flex justify-between pb-4">
        <Image src={staffLineLeft} alt="lineleft" className="inline" />
        <span className="whitespace-nowrap px-12 text-5xl font-baloo_medium text-text">
          Staff
        </span>
        <Image src={staffLineRight} alt="lineright" className="inline" />
      </div>
      <TeamGrid />
      <div className="pt-20 flex flex-col justify-center">
        <p className="text-text">Committee Members</p>
        <div className="flex flex-col text-center text-sub">
          <p>Valerie Wong</p>
          <p>Theo Fernandez</p>
          <p>Andrei Dimaano</p>
          <p>Raidah Fairooz</p>
          <p>Nicholas Chao</p>
        </div>
      </div>
    </section>
  )
}
