import { Page } from '@/components/Page/Page'
import React from 'react'

export default function Schedules() {
  return (
    <Page>
        <section className="flex flex-col text-center">
            <h1>Schedule</h1>
            <p>Schedule is in PST (Pacific Standard Time)</p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col">test</div>
              <div className="flex flex-col">test2</div>
              <div className="flex flex-col">test3</div>
            </div>
        </section>
    </Page>
  )
}