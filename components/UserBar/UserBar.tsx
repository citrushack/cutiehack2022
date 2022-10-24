import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession, signIn } from 'next-auth/react'
import { UserDropdown } from './UserDropdown'
import Modal from '@/components/Modal'
import { SigninForm } from '@/components/Form/SigninForm'
import { ThemeButton } from '@/components/UserBar/ThemeButton'
import Nav from '@/components/Page/Nav'

/** Wrapper containing user-action buttons (e.g. sign in, apply, user dropdown, theme button, etc.). */
export function UserBar() {
  // const router = useRouter()
  const { data: session, status } = useSession()
  const [signinModalOpen, setSigninModalOpen] = useState(false)

  const toggleSigninModal = () => {
    setSigninModalOpen(!signinModalOpen)
  }

  const handleSignin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    signIn()
  }

  return (
    <>
      <div className="z-[1000] fixed top-3 right-3 flex gap-3 items-center">
        <Nav />
        {/* add this back when we have a /apply page */}
        {/* { status === 'authenticated' && !session.user.uid && router.pathname !== '/apply' &&
          <Link passHref href='/apply'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className='flex justify-center items-center self-center w-24 h-11 px-4 font-semibold text-lg rounded-md bg-highlight shadow cursor-pointer'
            >
              Apply
            </motion.button>
          </Link>
        } */}
        {session ? (
          <UserDropdown />
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            className="flex justify-center items-center self-center w-24 h-11 px-4 font-semibold text-lg rounded-md bg-buttons shadow cursor-pointer"
            onClick={() => toggleSigninModal()}
          >
            Sign In
          </motion.button>
        )}
        <span className="hidden md:block">
          <ThemeButton />
        </span>
      </div>
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
