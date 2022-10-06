import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProfileProps {
  /** Link to the lead's LinkedIn profile. */
  link: string
  /** Profile picture of the lead. */
  image: string
  /** Name of the lead. */
  name: string
  /** Role/title of the lead. */
  role: string
}

/** Individual profile for each team lead. */
export const TeamProfile = ({ link, image, name, role }: ProfileProps) => (
  <div className="flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center">
    <motion.span whileHover={{ y: -4 }} className="cursor-pointer">
      <a target="_blank" rel="noreferrer noopener" href={link}>
        <Image
          src={image}
          width={170}
          height={170}
          objectFit="contain"
          priority={true}
          quality={100}
          className="rounded-full"
          alt="profile photo"
        />
      </a>
    </motion.span>
    <p className="mb-0 w-max font-baloo_semi_bold text-sub">{name}</p>
    <p className="mt-0 leading-4 text-center font-baloo_regular">{role}</p>
  </div>
)

const directors = [
  {
    link: 'https://www.linkedin.com/in/rajbirjohar/',
    image: '/leads/minsookim.jpeg',
    name: 'Rajbir Johar',
    role: 'Director',
  },
  {
    link: 'https://www.linkedin.com/in/paulianle7/',
    image: '/leads/minsookim.jpeg',
    name: 'Paulian Le',
    role: 'Operations Lead',
  },
]
const staff = [
  {
    link: 'https://www.linkedin.com/in/westin-montano/',
    image: '/leads/minsookim.jpeg',
    name: 'Westin Montano',
    role: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/mariam-golwalla-74930949/',
    image: '/leads/minsookim.jpeg',
    name: 'Mariam Golwalla',
    role: 'Sponsorship Lead',
  },
  {
    link: 'https://www.linkedin.com/in/marshall-jones-0/',
    image: '/leads/minsookim.jpeg',
    name: 'Marshall Jones',
    role: 'Sponsorship Lead',
  },
  {
    link: 'https://www.linkedin.com/in/kimberlylac/',
    image: '/leads/minsookim.jpeg',
    name: 'Kimmy Lac',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/henry-zheng00/',
    image: '/leads/minsookim.jpeg',
    name: 'Henry Zheng',
    role: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/minsookime/',
    image: '/leads/minsookim.jpeg',
    name: 'Minsoo Kim',
    role: 'Web Dev Lead',
  },
  {
    link: 'https://www.linkedin.com/in/michellesspace/',
    image: '/leads/minsookim.jpeg',
    name: 'Michelle Kim',
    role: 'UX Design Lead',
  },
  {
    link: 'https://www.linkedin.com/in/abhivishwas/',
    image: '/leads/minsookim.jpeg',
    name: 'Abhi Vishwasrao',
    role: 'Volunteer Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jakin200/',
    image: '/leads/minsookim.jpeg',
    name: 'Jakin Chan',
    role: 'Volunteer Lead',
  },
]

/** Grid of team lead profiles. */
export const TeamGrid = () => (
  <>
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 md:gap-y-12 mb-12">
      {directors.map(({ link, image, name, role }) => (
        <TeamProfile
          key={link}
          link={link}
          image={image}
          name={name}
          role={role}
        />
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 md:gap-y-12">
      {staff.map(({ link, image, name, role }) => (
        <TeamProfile
          key={link}
          link={link}
          image={image}
          name={name}
          role={role}
        />
      ))}
    </div>
  </>
)
