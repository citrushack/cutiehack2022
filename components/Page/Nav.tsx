import { Link as NavLink } from 'react-scroll'
import { useRouter } from 'next/router'

export default function Nav() {
    const hometabs = [
      {
        title: 'Home',
      },
      {
        title: 'Schedule',
      },
      {
        title: 'About',
      },
      {
        title: 'Tracks',
      },
      {
        title: 'Support',
      },
      {
        title: 'Sponsors',
      },
      {
        title: 'Staff',
      },
      {
        title: 'Faq',
      },
    ]
    const router = useRouter()
    return (
      <div className="flex place-content-evenly sticky top-3 z-10">
        {router.pathname === '/' &&
          hometabs.map(({ title }) => (
            <span key={title}>
              <NavLink
                to={title}
                className="cursor-pointer rounded-md p-2"
                smooth={true}
                spy={true}
                activeClass="bg-highlight"
                duration={500}
              >
                <span>{title}</span>
              </NavLink>
            </span>
          ))}
      </div>
    )
}