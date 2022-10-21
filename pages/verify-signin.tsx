import React from 'react'
import { Page } from '@/components/Page/Page'
import { ButtonLink } from '@/components/ButtonLink'

export default function verifySignIn() {
  return (
    <Page>
      <section className="p-4 flex flex-col justify-center items-center text-center">
        <h1>Check your email</h1>
        <p className='pb-4'>A sign in link has been sent to your email address.</p>
        <ButtonLink primary label="Go Back to Homepage" link="/" />
      </section>
    </Page>
  )
}
