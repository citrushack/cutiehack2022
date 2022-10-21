import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ButtonLink'

interface Props {
  /** Heading at the top of the card. */
  title: string
  /** Description about the way to support the hackathon. */
  description: string
  /** Name of the button to diplsay. */
  buttonLabel: string
  /** Link to external source. */
  buttonLink: string
}

/** Card to display information about ways to support the hackathon. */
export const SupportCard = ({
  title,
  description,
  buttonLabel,
  buttonLink,
}: Props) => (
  <motion.div
    whileHover={{ y: -8 }}
    className={
      'flex flex-col items-center w-full md:max-w-md p-10 shadow-lg rounded-md cursor-default ' +
      (title == 'Volunteers' ? 'bg-card' : 'bg-sub-secondary')
    }
  >
    <p className="grow mb-8 text-center text-text font-baloo_regular">
      {description}
    </p>
    <span className="bg-highlight w-full rounded-md">
      <ButtonLink link={buttonLink} label={buttonLabel} external />
    </span>
  </motion.div>
)
