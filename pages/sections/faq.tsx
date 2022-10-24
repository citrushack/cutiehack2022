import { FaqGrid } from '@/components/FaqAccordion/components'
import ExternalLink from '@/components/ExternalLink'

export default function Faq() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:mt-0 max-w-[60rem] items-center pt-5 pb-t bg-pattern bg-repeat">
      <div className="flex justify-between pb-4 items-center">
        <div className="inline bg-gradient-to-l from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        <h1 className="font-baloo_bold text-3xl md:text-5xl px-4">FAQ</h1>
        <div className="inline bg-gradient-to-r from-text to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
      </div>
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
