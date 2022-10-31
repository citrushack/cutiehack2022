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
        <div className="inline bg-gradient-to-l from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        <h1 className="whitespace-nowrap px-4 text-5xl font-baloo_bold text-opposite">
          Staff
        </h1>
        {/* <Image
          src={staffLineRight}
          alt="lineright"
          className="inline"
          quality={1}
        /> */}
        <div className="inline bg-gradient-to-r from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
      </div>
      <TeamGrid />
      <div className="pt-10 md:pt-20 flex flex-col justify-center">
        <div className="flex justify-center pb-4 items-center">
          <div className="inline bg-gradient-to-l from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
          <p className="text-opposite text-xl font-baloo_semi_bold text-center px-4">
            Committee Members
          </p>
          <div className="inline bg-gradient-to-r from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 text-center text-sub font-baloo_regular justify-center gap-y-4">
          <div>
            <p className="text-opposite font-baloo_semi_bold">
              Web Development
            </p>
            <p>Thomas Li</p>
            <p>Valerie Wong</p>
            <p>Theo Fernandez</p>
            <p>Andrei Dimaano</p>
            <p>Raidah Fairooz</p>
            <p>Nicholas Chao</p>
          </div>
          <div>
            <p className="text-opposite font-baloo_semi_bold">Operations</p>
            <p>Westin Montano</p>
            <p>Adhithi Narayana Murthy</p>
            <p>Eliot Lee</p>
            <p>Ronit Bhushan</p>
          </div>
          <div>
            <div className="pb-4 md:hidden">
              <p className="text-opposite font-baloo_semi_bold">
                Quality Assurance
              </p>
              <p>Paulian Le</p>
            </div>
            <p className="text-opposite font-baloo_semi_bold">Marketing</p>
            <p>Natalie Jung</p>
            <p>Elaine Lin</p>
          </div>
          <div>
            <p className="text-opposite font-baloo_semi_bold">Sponsorship</p>
            <p>Ryan Wong</p>
            <p>Nolan Chu</p>
            <p>Jasmita Yechuri</p>
            <p>Freddy Song</p>
            <p>Iliyan Alibhai</p>
            <p>Ethan Tran</p>
            <p>Eliot Lee</p>
            <p>Skyler Saltos</p>
          </div>
          <div className="hidden md:block">
            <p className="text-opposite font-baloo_semi_bold">
              Quality Assurance
            </p>
            <p>Paulian Le</p>
          </div>
        </div>
      </div>
    </section>
  )
}
