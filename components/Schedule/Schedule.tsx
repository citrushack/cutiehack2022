import { Page } from '@/components/Page/Page'
import React from 'react'
import { ScheduleItem } from './ScheduleItem'

export default function Schedule() 
{
  return (
    <Page>
      <section className="flex flex-col text-center w-full items-center">
        <h1>Schedule</h1>
        <p>Schedule is in PST (Pacific Standard Time)</p>
        <p>Saturday, April 2</p>
        <div id="Schedule-Wrapper" className="flex flex-row gap-12 px-12 my-6"> 
        <ScheduleItem></ScheduleItem>
            {/* <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col font-medium">Events</div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                7 - 8 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Check-In</div>
                <div className="italic text-sm">
                  <div>Hybrid</div>
                  <div>(In Person @ MSE 116)</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                8 - 9 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Opening Ceremony</div>
                <div className="italic text-sm">
                  <div>Hybrid</div>
                  <div>(In Person @ MSE 116)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col font-medium">Workshops</div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                9:30 - 10 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Teambuilding Activity</div>
                <div className="italic text-sm">
                  <div>Hybrid</div>
                  <div>(In Person @ WCH 202)</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                10 - 11 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Intro to Git/GitHub</div>
                <div className="italic text-sm">
                  <div>Hybrid</div>
                  <div>(In Person @ Bourns A265)</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                11 AM - 12 PM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Intro to Unity</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                11 AM - 12 PM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Intro to Discord Bots</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col font-medium">Activities</div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                12 PM - 12 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">CTF</div>
                <div className="italic text-sm">
                  <a href="https://ctf.ucrcyber.org/">
                    <span className="hover:underline">
                      Via Cyber@UCR Website
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                12:30 - 1 PM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">CSSBattle</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                1 - 9 PM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Raffle</div>
              </div>
            </div>
          </div>
        </div>
        <p>Sunday, April 3</p>
        <div className="flex flex-row gap-12 px-12 my-6">
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col font-medium">Events</div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                8 AM - 1 PM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Red Bull Giveaway</div>
                <div className="italic text-sm">In-Person @ WCH 205/206</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                9 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">Hackathon End</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col font-medium">Activities</div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col w-full text-left font-medium">
                9 - 10 AM
              </div>
              <div className="flex flex-col w-full text-left">
                <div className="font-medium">
                  Creative Building on Minecraft
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </Page>
  )
}
