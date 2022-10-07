import { FaqGrid } from '@/components/FaqAccordion/components'
import ExternalLink from '@/components/ExternalLink'

export default function Faq() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:mt-0 max-w-[60rem] items-center pt-5 pb-t">
      <h1 className="font-baloo_bold text-3xl md:text-5xl">FAQ</h1>
      <p className="text-center">
        If you still can&apos;t find an answer to your question, feel free to
        email us at{' '}
        <span className="text-buttons">
          <ExternalLink
            name="citrushack@gmail.com"
            link="mailto:citrushack@gmail.com"
          />
        </span>
        .
      </p>
      <FaqGrid />
    </section>
  )
}
