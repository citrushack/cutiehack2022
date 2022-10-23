import { SponsorsGrid } from '@/components/Sponsors'
import { ButtonLink } from '@/components/ButtonLink'

export default function Sponsors() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 justify-center items-center pt-10 md:pb-10 px-12 md:px-0">
      <div className="flex justify-between pb-4 items-center">
        <div className="inline bg-gradient-to-l from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        <h1 className="text-center text-3xl md:text-5xl font-baloo_medium px-4">
          Sponsors
        </h1>
        <div className="inline bg-gradient-to-r from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
      </div>
      <p className="mb-12 text-center">
        Thank you to all of those who made this hackathon possible!
      </p>
      {/* <ButtonLink
        primary
        link="/citrushack-2022-sponsorship-packet.pdf"
        label="Sponsor Us"
        external
      /> */}
      <SponsorsGrid />
    </section>
  )
}
