import React from 'react'
import StaffMember from '@/components/Staff/StaffMember'
import StaffMap from '@/components/Staff/StaffMap'

export default function Staff() {
  return (
    <div className="p-4 flex flex-col justify-center items-center mb-20">
      <h1 className="mb-12">Our Team</h1>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {StaffMap.map((staff) => {
          return (
            <StaffMember
              name={staff.name}
              title={staff.title}
              image={staff.image}
              staffKey={staff.staffKey}
              key={staff.staffKey}
            />
          )
        })}
      </div>
    </div>
  )
}
