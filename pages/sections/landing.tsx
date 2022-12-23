import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { CountdownWrapper } from '@/components/Countdown'
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
      <section className="relative px-4 flex w-full min-safe-h-screen min-h-[48rem] md:min-h-[60rem] xl:max-w-[68rem] 2xl:max-w-[80rem] justify-center items-center my-40 lg:my-0 mb-20 md:mb-0 gap-6  z-50">
        <div className="lg:absolute flex flex-col left-4 2xl:left-0 items-center">
          <div className="flex flex-col max-w-xl justify-center">
            {/* <h1 className="font-baloo_bold text-5xl">CUTIE HACK</h1> */}
            <Image
              src="/assets/BigLogo.svg"
              width={3514}
              height={2252}
              quality={1}
              priority={Boolean(true)}
              objectFit="contain"
              alt=""
              placeholder="blur"
              blurDataURL="/assets/blurredLogo.png"
            />
            <p className="flex font-baloo_semi_bold text-2xl text-highlight justify-center">
              illuminate your passion
            </p>
            <p className="flex font-baloo_semi_bold text-2xl text-highlight justify-center">
              November 5th
            </p>
          </div>
          <CountdownWrapper date="2023-01-05T16:00:00Z" />

          {/* testing date */}
          {/* <CountdownWrapper date="2022-10-21T09:00:00Z" /> */}

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

          {status == 'authenticated' && session.user.applied_after_limit && (
            <p className="font-baloo_regular text-center pb-6 max-w-sm">
              We reached our participants limit! Feel free to still come out but
              we can no longer guarantee a meal/shirt.
            </p>
          )}

          {status === 'authenticated' && !session.user.uid && (
            <span className="flex justify-center z-[200]">
              <ButtonLink primary label="Apply Now" link="/apply" />
            </span>
          )}

          {/* <h1 className="text-center font-baloo_bold text-3xl">
            Event has ended!
          </h1> */}
          {/* {!session && (
            <span className="flex justify-center w-1/2 lg:w-full z-[200]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="flex justify-center items-center self-center w-full md:max-w-[16rem] h-11 px-4 font-semibold text-lg rounded-md bg-highlight shadow cursor-pointer"
                onClick={() => toggleSigninModal()}
              >
                Sign In
              </motion.button>
            </span>
          )} */}
          {/* <div className="flex flex-col w-full gap-3 px-20 md:px-0"> */}
          {/* uncomment the day before */}
          {/* {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' &&
              !session.user.checkedIn && (
                <span className="flex justify-center w-full z-[200]">
                  <ButtonLink primary label="Check-In Now!" link="/checkin" />
                </span>
              )} */}

          {/* {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' && (
                <>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Join Our Discord"
                      link="https://discord.gg/jduNFuwKuk"
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
          </div> */}
        </div>
      </section>
      <Modal
        title="Sign In"
        description="Sign in to Cutie Hack via Google to apply and access more. No password required."
        show={signinModalOpen}
        handler={setSigninModalOpen}
      >
        <SigninForm />
      </Modal>
    </>
  )
}
