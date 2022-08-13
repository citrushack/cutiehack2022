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
        <div
          id="Saturday-Schedule-Wrapper"
          className="flex flex-row gap-12 px-12 my-6"
        >
          <div className="flex flex-col font-medium w-full px-12 gap-9">
            Events
            {ScheduleItemMap.get('EventsSaturday').map((scheduleItemInfo) => {
              return (
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  time={scheduleItemInfo.time}
                  format={scheduleItemInfo.format}
                  location={scheduleItemInfo.location}
                  link={scheduleItemInfo.link}
                  hover={scheduleItemInfo.hover}
                />
              )
            })}
          </div>
          <div className="flex flex-col font-medium w-full px-12 gap-9">
            Workshops
            {ScheduleItemMap.get('WorkshopsSaturday').map(
              (scheduleItemInfo) => {
                return (
                  <ScheduleItem
                    eventName={scheduleItemInfo.eventName}
                    time={scheduleItemInfo.time}
                    format={scheduleItemInfo.format}
                    location={scheduleItemInfo.location}
                    link={scheduleItemInfo.link}
                    hover={scheduleItemInfo.hover}
                  />
                )
              }
            )}
          </div>
          <div className="flex flex-col font-medium w-full px-12 gap-9">
            Activities
            {ScheduleItemMap.get('ActivitiesSaturday').map(
              (scheduleItemInfo) => {
                return (
                  <ScheduleItem
                    eventName={scheduleItemInfo.eventName}
                    time={scheduleItemInfo.time}
                    format={scheduleItemInfo.format}
                    location={scheduleItemInfo.location}
                    link={scheduleItemInfo.link}
                    hover={scheduleItemInfo.hover}
                  />
                )
              }
            )}
          </div>
        </div>
        <p>Sunday, April 3</p>
        <div
          id="Sunday-Schedule-Wrapper"
          className="flex flex-row gap-12 px-12 my-6"
        >
          <div className="flex flex-col font-medium w-full px-12 gap-9">
            Events
            {ScheduleItemMap.get('EventsSunday').map((scheduleItemInfo) => {
              return (
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  time={scheduleItemInfo.time}
                  format={scheduleItemInfo.format}
                  location={scheduleItemInfo.location}
                  link={scheduleItemInfo.link}
                  hover={scheduleItemInfo.hover}
                />
              )
            })}
          </div>
          {/* <div className="flex flex-col font-medium w-full px-12 gap-9">Workshops
            {ScheduleItemMap.get('WorkshopsSunday').map((scheduleItemInfo) => 
            {
              return(
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  time={scheduleItemInfo.time}
                  location={scheduleItemInfo.location}
                  link={scheduleItemInfo.link}
                  hover={scheduleItemInfo.hover}
                />
              )
            })}
          </div> */}
          <div className="flex flex-col font-medium w-full px-12 gap-9">
            Activities
            {ScheduleItemMap.get('ActivitiesSunday').map((scheduleItemInfo) => {
              return (
                <ScheduleItem
                  eventName={scheduleItemInfo.eventName}
                  time={scheduleItemInfo.time}
                  format={scheduleItemInfo.format}
                  location={scheduleItemInfo.location}
                  link={scheduleItemInfo.link}
                  hover={scheduleItemInfo.hover}
                />
              )
            })}
          </div>
        </div>
      </section>
    </Page>
  )
}
