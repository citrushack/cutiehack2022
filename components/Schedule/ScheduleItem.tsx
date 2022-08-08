import { ScheduleItemArray } from "./ScheduleItemArray"

export const ScheduleItem = () => 
{
  return(
    <>
        {Object.keys(ScheduleItemArray).map((item, index) => 
        {
            return(
                <>
                    <div className="flex flex-col w-full gap-5">
                      <div key={index} className="flex flex-col font-medium">{item}</div>
                        <div className="flex flex-col w-full text-left font-medium">
                          time
                        </div>
                        <div className="flex flex-col w-full text-left">
                          <div className="font-medium">activity name</div>
                          <div className="italic text-sm">
                            <div>location</div>
                          </div>
                        </div>
                    </div>
                </>
            )
        })}
    </>
  )
}
