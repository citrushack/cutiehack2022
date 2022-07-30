import { Page } from '@/components/Page/Page'
import React from 'react'

export default function Schedules() {
  return (
    <Page>
        <section className="flex flex-col text-center w-full px-12">
            <h1>Schedule</h1>
            <h2>Schedule is in PST (Pacific Standard Time)</h2>
            <h3>Saturday, April 2</h3>
              <div className="flex flex-row gap-5 px-12 my-6">
                <div className="flex flex-col w-full gap-5">
                  <div className="flex flex-col">Events</div>
                    <div className="flex items-center gap-5">
                    <div className="flex flex-col w-full text-left">7 - 8 AM</div>
                    <div className="flex flex-col w-full text-left">
                      <div>Check-In</div>
                      <div>Hybrid</div>
                      <div>(In Person @ MSE 116)</div>
                    </div>
                  </div> 
                </div>
                <div className="flex flex-col w-full gap-5">
                  <div className="flex flex-col">Workshops</div>
                    <div className="flex items-center gap-5">
                    <div className="flex flex-col w-full text-left">9:30 - 10 AM</div>
                    <div className="flex flex-col w-full text-left">
                      <div>Teambuilding Activity</div>
                      <div>Hybrid</div>
                      <div>(In Person @ MSE 116)</div>
                    </div>
                  </div> 
                </div>
                <div className="flex flex-col w-full gap-5">
                  <div className="flex flex-col">Activities</div>
                    <div className="flex items-center gap-5">
                    <div className="flex flex-col w-full text-left">12 PM - 12 AM</div>
                    <div className="flex flex-col w-full text-left">
                      <div>CTF</div>
                      <div>
                        <a href="https://ctf.ucrcyber.org/">
                          <span className="hover:underline">Via Cyber@UCR Website</span>
                        </a>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
        </section>
    </Page>
  )
}