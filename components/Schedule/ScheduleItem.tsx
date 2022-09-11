export const ScheduleItem = ({
  eventName,
  time,
  format,
  location,
  link,
  hover,
}) => {
  return (
    <div className="flex flex-row w-full gap-5 items-center">
      <div className="flex flex-col w-full text-left font-medium">{time}</div>
      <div className="flex flex-col w-full text-left">
        <div className="font-medium">{eventName}</div>
          <a href={link} className="italic text-sm font-normal">
            <span className={hover}>
              {format} {location}
            </span>
          </a>
      </div>
    </div>
  )
}
