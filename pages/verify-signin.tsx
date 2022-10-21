import React from 'react'
import { Page } from '@/components/Page/Page'

export default function verifySignIn() {
  return (
    <Page>
      <section className="p-4 flex flex-col justify-center items-center text-center">
        <h1>Check your email!</h1>
        <p>A sign-in link has been sent to your email.</p>
      </section>
    </Page>
  )
}
