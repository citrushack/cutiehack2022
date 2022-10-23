import { MasterSchedule } from '@/components/Schedule/components'

export default function Schedule() {
  return (
    <section className="flex flex-col w-full h-full my-12 max-w-[72rem] justify-center items-center">
      <h1 className="text-center text-4xl font-baloo_semi_bold mb-16">
        Schedule (PST)
      </h1>
      <p className='font-baloo_semi_bold pb-20'>Schedule will be posted closer to Cutie Hack!</p>
      {/* TODO: uncomment once mariam says so with updated schedule*/}
      {/* <MasterSchedule /> */}
    </section>
  )
}
