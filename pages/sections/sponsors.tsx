import { SponsorsGrid } from '@/components/Sponsors'
import { ButtonLink } from '@/components/ButtonLink'

export default function Sponsors() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 justify-center items-center pt-10 md:pb-10 px-12 md:px-0">
      <h1 className="text-center text-3xl md:text-5xl font-baloo_medium">
        Our Sponsors
      </h1>
      <p className="mb-12 text-center">
        Thank you to all of those who made this hackathon possible!
      </p>
      <ButtonLink
        primary
        link="/citrushack-2022-sponsorship-packet.pdf"
        label="Sponsor Us"
        external
      />
      <SponsorsGrid />
    </section>
  )
}
