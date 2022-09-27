import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Landing() {
  const { theme } = useTheme()
  return (
    <section className="flex w-full h-screen items-center">
      <div>
        <Image
          src={
            theme == 'light'
              ? '/assets/coming-soon.png'
              : '/assets/coming-soon.png'
          }
          layout='fill'
          priority={Boolean(true)}
          alt="coming-soon"
        />
      </div>
    </section>
  )
}
