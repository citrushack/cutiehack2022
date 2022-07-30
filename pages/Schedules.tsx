import { Page } from '@/components/Page/Page'
import React from 'react'

export default function Schedules() {
  return (
    <Page>
        <section className="flex flex-col text-center w-full px-12">
            <h1>Schedule</h1>
            <h3>Schedule is in PST (Pacific Standard Time)</h3>
            <h2>Saturday, April 2</h2>
            <div className="flex flex-row gap-5 px-12 my-6">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col font-medium">Events</div>
                <div className="flex items-center gap-5 p-5">
                  <div className="flex flex-col w-full text-left font-medium">7 - 8 AM</div>
                  <div className="flex flex-col w-full text-left">
                    <div className="font-medium">Check-In</div>
                    <div>Hybrid</div>
                    <div>(In Person @ MSE 116)</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col font-medium">Workshops</div>
                <div className="flex items-center gap-5 p-5">
                  <div className="flex flex-col w-full text-left font-medium">9:30 - 10 AM</div>
                  <div className="flex flex-col w-full text-left">
                    <div className="font-medium">Teambuilding Activity</div>
                    <div>Hybrid</div>
                    <div>(In Person @ MSE 116)</div>
                  </div>
                </div> 
                <div className="flex items-center gap-5 p-5">
                  <div className="flex flex-col w-full text-left font-medium">10 - 11 AM</div>
                  <div className="flex flex-col w-full text-left">
                    <div className="font-medium">Intro to Git/GitHub</div>
                    <div>Hybrid</div>
                    <div>(In Person @ Bourns A265)</div>
                  </div>
                </div> 
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col font-medium">Activities</div>
                <div className="flex items-center gap-5 p-5">
                  <div className="flex flex-col w-full text-left font-medium">12 PM - 12 AM</div>
                  <div className="flex flex-col w-full text-left">
                    <div className="font-medium">CTF</div>
                    <div>
                      <a href="https://ctf.ucrcyber.org/">
                        <span className="hover:underline">Via Cyber@UCR Website</span>
                      </a>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <h2>Sunday, April 3</h2>
            <div className="flex flex-row gap-5 px-12 my-6">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col font-medium">Events</div>
                <div className="flex items-center gap-5 p-5">
                  <div className="flex flex-col w-full text-left font-medium">8 AM - 1 PM</div>
                  <div className="flex flex-col w-full text-left">
                    <div className="font-medium">Red Bull Giveaway</div>
                    <div>In-Person @ WCH 205/206</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col font-medium">Activities</div>
                <div className="flex items-center gap-5 p-5">
                  <div className="flex flex-col w-full text-left font-medium">9 - 10 AM</div>
                  <div className="flex flex-col w-full text-left">
                    <div className="font-medium">Creative Building on Minecraft</div>
                  </div>
                </div> 
              </div>
            </div>
        </section>
    </Page>
  )
}