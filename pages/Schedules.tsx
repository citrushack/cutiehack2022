import { Page } from '@/components/Page/Page'
import React from 'react'

export default function Schedules() {
  return (
    <Page>
        <section className="flex flex-col text-center">
            <h1>Schedule</h1>
            <h2>Schedule is in PST (Pacific Standard Time)</h2>
            <h3>Saturday, April 2</h3>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">Events
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      item1
                    </div>
                    <div className="flex flex-col">
                      item1
                    </div>
                  </div>
                </div> 
                <div className="flex flex-col w-full">Workshops
                  <div className="flex flex-col">
                    item2
                  </div>
                  <div className="flex flex-col">
                      item2
                  </div>
                </div> 
                <div className="flex flex-col w-full">Activities
                  <div className="flex flex-col">
                    item3
                  </div>
                  <div className="flex flex-col">
                      item3
                  </div>
                </div>
              </div>
        </section>
    </Page>
  )
}