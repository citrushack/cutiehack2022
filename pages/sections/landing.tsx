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
  const { theme } = useTheme()
  const { data: session, status } = useSession()
  const [signinModalOpen, setSigninModalOpen] = useState(false)

  const toggleSigninModal = () => {
    setSigninModalOpen(!signinModalOpen)
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <div className="flex w-full h-screen justify-center items-center my-10 min-h-[48rem] md:min-h-[60rem] xl:max-w-[68rem] 2xl:max-w-[80rem] lg:my-0 mb-20 md:mb-0 gap-6">
        <div className="flex flex-col 2xl:left-0 items-center">
          <div className="flex flex-col max-w-xl">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:mb-10">
              <div>
                <Image
                  src={
                    theme == 'light' ? '/assets/title.svg' : '/assets/title.svg'
                  }
                  layout="fill"
                  quality={50}
                  priority={Boolean(true)}
                  objectFit="contain"
                  alt="title"
                />
              </div>
            </div>
          </div>
          <CountdownWrapper date="2022-11-05T16:00:00Z" />
        </div>
      </div>
    </>
  )
}
