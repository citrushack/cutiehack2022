import { Page } from '@/components/Page/Page'
import React from 'react'
import { ScheduleItem } from './ScheduleItem'
import { ScheduleItemMap } from './ScheduleItemMap'

export default function Schedule() {
  return (
    <Page>
      <section className="flex flex-col text-center w-full items-center">
        <h1>Schedule</h1>
        <p>Schedule is in PST (Pacific Standard Time)</p>
        <p>Saturday, April 2</p>
        <div id="Schedule-Wrapper" className="flex flex-row gap-12 px-12 my-6"> 
          <div className="flex flex-col font-medium w-full px-12 gap-9">Events
            {ScheduleItemMap.get('Events').map((scheduleItemInfo) => 
            {
              return(
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  date={scheduleItemInfo.date}
                  time={scheduleItemInfo.time}
                  location={scheduleItemInfo.location}
                />
              )
            })}
          </div>
          <div className="flex flex-col font-medium w-full px-12 gap-9">Workshops
            {ScheduleItemMap.get('Workshops').map((scheduleItemInfo) => 
            {
              return(
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  date={scheduleItemInfo.date}
                  time={scheduleItemInfo.time}
                  location={scheduleItemInfo.location}
                />
              )
            })}
          </div>
          <div className="flex flex-col font-medium w-full px-12 gap-9">Activities
            {ScheduleItemMap.get('Activities').map((scheduleItemInfo) => 
            {
              return(
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  date={scheduleItemInfo.date}
                  time={scheduleItemInfo.time}
                  location={scheduleItemInfo.location}
                />
              )
            })}
          </div>
        </div>
      </section>
    </Page>
  )
}
