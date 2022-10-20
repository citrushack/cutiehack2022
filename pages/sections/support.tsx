import { SupportCard } from '@/components/SupportCard'

export default function Support() {
  const cards = [
    {
      title: 'Mentors',
      description:
        'Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you’d like to help hackers throughout the day! Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you’d like to help hackers throughout the day!',
      buttonLabel: 'Apply',
      buttonLink: 'https://forms.gle/sGFM98Ap5GaCJaG6A',
    },
    {
      title: 'Volunteers',
      description:
        'Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you’d like to help hackers throughout the day! Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you’d like to help hackers throughout the day!',
      buttonLabel: 'Apply',
      buttonLink: 'https://forms.gle/sGFM98Ap5GaCJaG6A',
    },
    {
      title: 'Sponsors',
      description:
        'Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you’d like to help hackers throughout the day! Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you’d like to help hackers throughout the day!',
      buttonLabel: 'Sponsor',
      buttonLink: '/citrushack-2022-sponsorship-packet.pdf',
    },
  ]

  return (
    <section className="flex flex-col w-full h-full max-w-[60rem] my-12 lg:mt-0 justify-center items-center pt-10">
      <h1 className="text-center text-3xl md:text-5xl font-baloo_medium">
        Get Involved
      </h1>
      <p className="mb-10 text-center max-w-lg md:max-w-2xl">
        Not interested in hacking but still want to participate? Great! We would
        love to have you on board. Fill out the forms below if you&apos;d like
        to help hackers throughout the day.
      </p>
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 mb-12">
        {cards.map(({ title, description, buttonLabel, buttonLink }) => (
          <div className="flex-col space-y-3" key={title}>
            <div
              className={
                'flex justify-center bg-card rounded-md pt-3 pb-3 items-center ' +
                (title == 'Volunteers' ? 'bg-card' : 'bg-sub-secondary')
              }
            >
              <h3 className="text-text font-baloo_semi_bold">{title}</h3>
            </div>
            <SupportCard
              title={title}
              description={description}
              buttonLabel={buttonLabel}
              buttonLink={buttonLink}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
