import React from 'react'
import { MentorDescription } from './MentorDescription'
import { VolunteersDescription } from './VolunteersDescription'
import { SponsorsDescription } from './SponsorsDescription'

export default function Support() {
  return (
    <section className="text-center">
      <h1>Get Involved</h1>
      <h2>
        Not interested in hacking but still want to participate? Great! We would
        love to have you on board. Fill out the forms below if you'd like to
        help hackers throughout the day.
      </h2>
      <p className="text-left">
        <p className="font-medium">Mentors</p>
        <p>{MentorDescription}</p>
      </p>
      <p className="text-left">
        <p className="font-medium">Volunteers</p>
        <p>{VolunteersDescription}</p>
      </p>
      <p className="text-left">
        <p className="font-medium">Sponsors</p>
        <p>{SponsorsDescription}</p>
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
  )
}
