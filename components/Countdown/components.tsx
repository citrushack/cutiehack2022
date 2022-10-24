import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'
import { ButtonLink } from '../ButtonLink'

var buttonVariants = {}

interface TimeBlockProps {
  /** Decides when to show a particular time block (e.g. if 0 days are left, time blocks for days are hidden). */
  condition: boolean
  /** Number of seconds, minutes, hours, or days. */
  num: string
  /** Label for the time blocks (e.g. 'seconds'). */
  label: string
  /** Decides when to show a separator after a pair of time blocks. */
  separator?: boolean
}

/** Blocks representing a unit of time in XX format. */
function TimeBlock({ condition, num, label, separator }: TimeBlockProps) {
  return (
    condition && (
      <>
        <div className="relative flex flex-col col-span-2 items-center text-sub-bright my-6">
          <div className="flex gap-0.5 xs:gap-1 sm:gap-2">
            {Array.from(num).map((n, idx) => (
              <motion.div
                key={label + String(idx)}
                variants={buttonVariants}
                whileHover="hover"
                className="flex justify-center items-center w-8 xs:w-8 sm:w-10 h-8 xs:h-8 sm:h-10 rounded bg-secondary shadow-md cursor-default font-baloo_medium"
              >
                {n}
              </motion.div>
            ))}
          </div>
          <p className="absolute top-8 xs:top-10 sm:top-[3.25rem] text-lg xs:text-xl leading-3 font-baloo_semi_bold pt-2 md:pt-0">
            {label}
          </p>
        </div>
        {separator && (
          <div className="flex flex-col text-xl xs:text-3xl sm:text-4xl text-center justify-center text-sub-bright">
            :
          </div>
        )}
      </>
    )
  )
}

/** Content displayed after countdown finishes. */
const Completionist = () => (
  <div className="mb-4">
    <p className="font-baloo_semi_bold text-xl">November 5, 2022</p>
    <ButtonLink primary label="Live Page" link="/live" />
  </div>
)

/** Rendered countdown clock. */
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />
  } else {
    const numDays = days < 10 ? String(`0${days}`) : String(days)
    const numHours = hours < 10 ? String(`0${hours}`) : String(hours)
    const numMinutes = minutes < 10 ? String(`0${minutes}`) : String(minutes)
    const numSeconds = seconds < 10 ? String(`0${seconds}`) : String(seconds)

    return (
      <div className="mb-10">
        <div
          className={
            'grid flex max-w-xl ' +
            (days <= 0
              ? hours <= 0
                ? minutes <= 0
                  ? 'grid-cols-2'
                  : 'grid-cols-5'
                : 'grid-cols-8'
              : 'grid-cols-11')
          }
        >
          <TimeBlock
            condition={Boolean(days > 0)}
            num={numDays}
            label="days"
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0)}
            num={numHours}
            label="hours"
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0 || minutes > 0)}
            num={numMinutes}
            label="mins"
            separator
          />
          <TimeBlock
            condition={Boolean(
              days > 0 || hours > 0 || minutes > 0 || seconds > 0
            )}
            num={numSeconds}
            label="secs"
          />
        </div>
      </div>
    )
  }
}

/** Wrapper for countdown clock. */
export function CountdownWrapper({ date }) {
  const [isMobile, setIsMobile] = useState(false)

  if (!isMobile) buttonVariants = { hover: { y: -3 } }
  else buttonVariants = {}

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 className="text-xl xs:text-2xl sm:text-3xl">
      <Countdown date={date} renderer={renderer} />
    </h2>
  )
}

/** Content displayed after hacking countdown finishes. */
const HackerCompletionist = () => (
  <div className="mb-4">
    <h3 className="text-center font-bold">Hacking has ended!</h3>
  </div>
)

/** Rendered hacking countdown clock. */
const hackingRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <HackerCompletionist />
  } else {
    const numDays = days < 10 ? String(`0${days}`) : String(days)
    const numHours = hours < 10 ? String(`0${hours}`) : String(hours)
    const numMinutes = minutes < 10 ? String(`0${minutes}`) : String(minutes)
    const numSeconds = seconds < 10 ? String(`0${seconds}`) : String(seconds)

    return (
      <div className="mb-10">
        <h3 className="text-center justify-center font-baloo_semi_bold">
          Hacking ends in...
        </h3>
        <div
          className={
            'grid flex max-w-xl ' +
            (days <= 0
              ? hours <= 0
                ? minutes <= 0
                  ? 'grid-cols-2'
                  : 'grid-cols-5'
                : 'grid-cols-8'
              : 'grid-cols-11')
          }
        >
          <TimeBlock
            condition={Boolean(days > 0)}
            num={numDays}
            label="days"
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0)}
            num={numHours}
            label="hours"
            separator
          />
          <TimeBlock
            condition={Boolean(days > 0 || hours > 0 || minutes > 0)}
            num={numMinutes}
            label="mins"
            separator
          />
          <TimeBlock
            condition={Boolean(
              days > 0 || hours > 0 || minutes > 0 || seconds > 0
            )}
            num={numSeconds}
            label="secs"
          />
        </div>
      </div>
    )
  }
}

/** Wrapper for hacking countdown clock. */
export function HackerCountdownWrapper({ date }) {
  const [isMobile, setIsMobile] = useState(false)

  if (!isMobile) buttonVariants = { hover: { y: -3 } }
  else buttonVariants = {}

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 className="text-xl xs:text-2xl sm:text-3xl">
      <Countdown date={date} renderer={hackingRenderer} />
    </h2>
  )
}
