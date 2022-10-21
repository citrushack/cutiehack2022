import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import {
  CountdownWrapper,
  HackerCountdownWrapper,
} from '@/components/Countdown'
import { ButtonLink } from '@/components/ButtonLink'
import Modal from '@/components/Modal'
import { SigninForm } from '@/components/Form/SigninForm'
import SignupCounter from '@/components/SignupCounter'

export default function Landing() {
  const [mounted, setMounted] = useState(false)
  const { data: session, status } = useSession()
  const [signinModalOpen, setSigninModalOpen] = useState(false)

  const toggleSigninModal = () => {
    setSigninModalOpen(!signinModalOpen)
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <section className="relative flex w-full min-safe-h-screen min-h-[48rem] md:min-h-[60rem] xl:max-w-[68rem] 2xl:max-w-[80rem] justify-center items-center my-40 lg:my-0 mb-20 md:mb-0 gap-6 z-30 bg-pattern bg-repeat">
        <div className="lg:absolute flex flex-col left-4 2xl:left-0 items-center">
          <div className="flex flex-col max-w-xl justify-center">
            {/* <h1 className="font-baloo_bold text-5xl">CUTIE HACK</h1> */}
            <Image
              src="/assets/BigLogo.svg"
              width={4749}
              height={2352}
              quality={50}
              priority={Boolean(true)}
              objectFit="contain"
              alt="laptop"
            />
            <p className="flex font-baloo_semi_bold text-2xl text-highlight justify-center">
              illuminate your passion
            </p>
          </div>
          {/* <p className='max-w-lg italic text-center font-medium'>
            In-person sign-ups will close today at 5:30 PM PST, as we are reaching maximum capacity
          </p> */}
          {/* {
            (status === 'unauthenticated' || (status === 'authenticated' && !Boolean(session.user.qualified))) &&
            <p className='max-w-lg italic text-center font-medium'>
              Applications will close tonight at 12 AM PST, so be sure to apply while you still can!
            </p>
          } */}
          <span className="flex justify-center w-full mb-6">
            <SignupCounter />
          </span>
          {status === 'authenticated' && !session.user.uid && (
            <span className="flex justify-center z-[200]">
              <ButtonLink primary label="Apply Now" link="/apply" />
            </span>
          )}
          <HackerCountdownWrapper date="2022-11-05T12:00:00Z" />
          <div className="flex flex-col gap-3">
            {/* uncomment the day before */}
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' &&
              !session.user.checkedIn && (
                <span className="flex justify-center w-full z-[200]">
                  <ButtonLink primary label="Check-In Now!" link="/checkin" />
                </span>
              )}
            <ButtonLink
              primary
              link="https://citrus-hack-2022.devpost.com/"
              label="Devpost"
              external
            />
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' && (
                <>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Join Our Discord"
                      link={process.env.discord}
                      external
                    />
                  </span>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Group Dashboard"
                      link="/group/dashboard"
                    />
                  </span>
                </>
              )}
          </div>
          <div className="flex flex-col w-full gap-3">
            {/* uncomment the day before */}
            {/* {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' &&
              !session.user.checkedIn && (
                <span className="flex justify-center w-full z-[200]">
                  <ButtonLink primary label="Check-In Now!" link="/checkin" />
                </span>
              )}
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' && (
                <>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Join Our Discord"
                      link={process.env.discord}
                      external
                    />
                  </span>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Group Dashboard"
                      link="/group/dashboard"
                    />
                  </span>
                </>
              )} */}
          </div>
        </div>
      </section>
      <Modal
        title="Sign In"
        description="Sign in to Citrus Hack via Google to apply and access more. No password required."
        show={signinModalOpen}
        handler={setSigninModalOpen}
      >
        <SigninForm />
      </Modal>
    </>
  )
}