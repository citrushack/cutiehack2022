import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProfileProps {
  /** Profile picture of the judge. */
  image: string
  /** Name of the judge. */
  name: string
  /** Role/title of the judge. */
  role: string
}

/** Individual profile for each team lead. */
export const JudgeProfile = ({ image, name, role }: ProfileProps) => (
  <div className="flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center">
    <motion.span whileHover={{ y: -4 }}>
      <Image
        src={image}
        width={150}
        height={150}
        objectFit="contain"
        priority={true}
        quality={100}
        className="rounded-full"
      />
    </motion.span>
    <p className="mb-0 w-max font-semibold">{name}</p>
    <p className="mt-0 leading-4 text-base text-center">{role}</p>
  </div>
)

const judges = [
  {
    image: '/judges/westin-montano.jpg',
    name: 'Westin Montano',
    role: 'Former Citrus Hack Ops Lead',
  },
  {
    image: '/judges/walid-najjar.jpg',
    name: 'Dr. Walid Najjar',
    role: 'UCR Professor',
  },
  {
    image: '/judges/trinah-maulion.jpg',
    name: 'Trinah Maulion',
    role: 'DAU Marketing Lead',
  },
  {
    image: '/judges/allan-knight.jpg',
    name: 'Dr. Allan Knight',
    role: 'UCR Professor',
  },
  {
    image: '/judges/rj-johar.jpg',
    name: 'Rj Johar',
    role: 'Former Citrus Hack Director',
  },
  {
    image: '/judges/chloe-georgiou.jpg',
    name: 'Chloe Georgiou',
    role: 'IEEE President',
  },
  {
    image: '/judges/sasya-uppugonduri.jpg',
    name: 'Sasya Uppugonduri',
    role: 'Hardware Engineer @ Synopsys',
  },
  {
    image: '/judges/faud-jamour.jpg',
    name: 'Faud Jamour',
    role: 'Software Engineer @  AWS',
  },
  {
    image: '/judges/js-pescasio.jpg',
    name: 'JS Pescasio',
    role: 'Former Citrus Hack Web Developer',
  },
  {
    image: '/judges/kelly-downey.jpg',
    name: 'Dr. Kelly Downey',
    role: 'UCR Professor',
  },
  {
    image: '/judges/vahagn-tovmasian.jpg',
    name: 'Vahagn Tovmasian',
    role: 'Former IEEE President',
  },
  {
    image: '/judges/paea-lependu.jpg',
    name: 'Dr. Paea Lependu',
    role: 'UCR Professor',
  },
  {
    image: '/judges/paulian-le.jpg',
    name: 'Paulian Le',
    role: 'Former Citrus Hack Ops Lead',
  },
  {
    image: '/judges/divyank-shah.jpg',
    name: 'Divyank Shah',
    role: 'ACM Profesional Development Chair',
  },
  {
    image: '/judges/ryan-rusich.jpg',
    name: 'Dr. Ryan Rusich',
    role: 'UCR Professor',
  },
  {
    image: '/judges/danial-beg.jpg',
    name: 'Danial Beg',
    role: 'Former Citrus Hack Director',
  },
  {
    image: '/judges/elaine-lin.jpg',
    name: 'Elaine Lin',
    role: "UI/UX Developer @ Art'rSpace",
  },
  {
    image: '/judges/brian-crites.jpg',
    name: 'Dr. Brian Crites',
    role: 'UCR Professor',
  },
  {
    image: '/judges/sunny-zeng.jpg',
    name: 'Sunny Zeng',
    role: 'Former Program Chair @ IEEE',
  },
  {
    image: '/judges/amel-dechemi.jpg',
    name: 'Amel Dechemi',
    role: 'UCR PhD Candidate',
  },
  {
    image: '/judges/jonathan-trinh.jpg',
    name: 'Jonathan Trinh',
    role: 'Former Citrus Hack Director',
  },
  {
    image: '/judges/kimmy-lac.jpg',
    name: 'Kimmy Lac',
    role: 'Former Citrus Hack Marketing Lead',
  },
  {
    image: '/judges/leen-eisa.jpg',
    name: 'Leen Eisa',
    role: 'Project Manager @ Solar Car',
  },
]

/** Grid of judge profiles. */
export const JudgeGrid = () => (
  <div className="flex flex-wrap justify-center gap-6 md:gap-12 md:gap-y-12">
    {judges.map(({ image, name, role }) => (
      <JudgeProfile key={name} image={image} name={name} role={role} />
    ))}
  </div>
)
