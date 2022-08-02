import React from 'react'
import StaffMember from '../../components/Staff/StaffMember'

export default function Staff() {
  return (
    <div className="p-4 flex flex-col justify-center items-center mb-20">
      <h1 className="mb-12">Our Team</h1>
      <div className="flex flex-wrap justify-center">
        <StaffMember
          name="Name"
          title="Title"
          image="https://images.unsplash.com/photo-1633127603932-d80056a38e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        />
        <StaffMember
          name="Name"
          title="Title"
          image="https://images.unsplash.com/photo-1633127603932-d80056a38e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        />
        <StaffMember
          name="Name"
          title="Title"
          image="https://images.unsplash.com/photo-1633127603932-d80056a38e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        />
        <StaffMember
          name="Name"
          title="Title"
          image="https://images.unsplash.com/photo-1633127603932-d80056a38e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        />
        <StaffMember
          name="Name"
          title="Title"
          image="https://images.unsplash.com/photo-1633127603932-d80056a38e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        />
        <StaffMember
          name="Name"
          title="Title"
          image="https://images.unsplash.com/photo-1633127603932-d80056a38e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        />
      </div>
    </div>
  )
}
