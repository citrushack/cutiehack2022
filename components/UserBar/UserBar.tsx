import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession, signIn } from 'next-auth/react'
import { UserDropdown } from './UserDropdown'
// import { SigninForm } from '@/components/Form'

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
      <div className="z-[1000] fixed top-3 right-3 flex gap-3">
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
            className="flex justify-center items-center self-center w-24 h-11 px-4 font-semibold text-lg rounded-md bg-highlight shadow cursor-pointer"
            onClick={() => toggleSigninModal()}
          >
            Sign In
          </motion.button>
        )}
        <span className="hidden md:block">
          {/* <ThemeButton /> */}
          <button>theme button placeholder</button>
        </span>
      </div>
      {/* use modal later */}
      <button
        // title='Sign In'
        // description='Sign in to Citrus Hack via Google to apply and access more. No password required.'
        // show={signinModalOpen}
        // handler={setSigninModalOpen}
        onClick={handleSignin}
      >
        {/* use a custom sign in form later */}
        {/* <SigninForm /> */}
        Sign In
      </button>
    </>
  )
}
