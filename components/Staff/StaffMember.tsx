import React from 'react'
import Image from 'next/image'

export default function StaffMember({ name, title, image }) {
  return (
    <div className="text-center max-w-[7rem] md:max-w-full">
      <Image
        className="rounded-full"
        src={image}
        alt="/"
        width="144"
        height="144"
      />
      <h3 className="mt-4 mb-2">{name}</h3>
      <p>{title}</p>
    </div>
  )
}
