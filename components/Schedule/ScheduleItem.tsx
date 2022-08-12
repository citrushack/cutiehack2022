export const ScheduleItem = ({eventName, date, time, location}) => {
  return (
    <>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col w-full text-left font-medium">
            <div>{time}</div>
            <div>{date}</div>
          </div>
          <div className="flex flex-col w-full text-left">
            <div className="font-medium">{eventName}</div>
            <div className="italic text-sm">
              {location}
            </div>
          </div>
        </div>
    </>
  )
}
