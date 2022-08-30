import React from 'react'
import { Page } from '@/components/Page/Page'

export default function Support() {
  return (
    <Page>
      <section className="text-center">
        <h1>Get Involved</h1>
        <h2>
          Not interested in hacking but still want to participate? Great! We
          would love to have you on board. Fill out the forms below if you'd
          like to help hackers throughout the day.
        </h2>
        <p className="text-left">
          <p className="font-medium">Mentors</p>
          <p>
            Mentors are in charge of helping the hackers with new technologies
            and working through any bugs or obstacles they encounter. We
            recommend this position if you are well versed in a particular stack
            to offer the best guidance.
          </p>
        </p>
        <p className="text-left">
          <p className="font-medium">Volunteers</p>
          <p>
            Volunteers help out with the majority of day-of event tasks
            including, but not limited to, matching hackers to mentors, helping
            hackers find teams, hosting activities, and answering general
            questions.
          </p>
        </p>
        <p className="text-left">
          <p className="font-medium">Sponsors</p>
          <p>
            Sponsors are companies/individuals that want to help Cutie Hack and
            Citrus Hack come to life! If you are interested in contributing,
            please don't hesitate to contact us!
          </p>
        </p>
        <div>
          <a href="https://www.google.com/">
            <button className="p-4">mentors</button>
          </a>
          <a href="https://www.cutiehack.io/">
            <button className="p-4">volunteers</button>
          </a>
          <a href="https://www.citrushack.com/">
            <button className="p-4">sponsor us</button>
          </a>
        </div>
      </section>
    </Page>
  )
}
