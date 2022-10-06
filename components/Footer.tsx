import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { MdEmail } from 'react-icons/md'
import { Wave } from './Wave'

const SocialLinks = [
  {
    path: 'https://www.facebook.com/cutiehack/',
    title: 'Facebook',
    image: <FaFacebook size="56"></FaFacebook>,
  },
  {
    path: 'https://www.instagram.com/cutiehack_ucr/',
    title: 'Instagram',
    image: <FaInstagram size="56"></FaInstagram>,
  },
  {
    path: 'https://www.linkedin.com/company/17907222/admin/',
    title: 'LinkedIn',
    image: <FaLinkedin size="56"></FaLinkedin>,
  },
  {
    path: 'https://twitter.com/citrushack',
    title: 'Twitter',
    image: <FaTwitter size="56"></FaTwitter>,
  },
  {
    path: 'mailto:citrushack@gmail.com',
    title: 'Email',
    image: <MdEmail size="56"></MdEmail>,
  },
]

export default function Footer() {
  return (
    <div className='flex flex-col w-screen'>
      <Wave type={1} bgColor="bg-primary" fillColor="wave-from" />
      <footer className="w-full bg-gradient-to-b from-from via-via to-to z-30 bottom-0">
        <div className="flex flex-col justify-center mx-auto items-center">
          <div className="flex flex-row mb-2">
            <p className="text-4xl font-lexend font-bold text-center">
              {"Let's connect!"}
            </p>
          </div>
          <div className="flex flex-row justify-center mx-auto">
            {SocialLinks.map((link) => {
              return (
                <div key={link.path} className="flex justify-center mr-1">
                  <Link href={link.path}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      title={link.title}
                      className="fill-current text-white hover:text-gray-500"
                    >
                      {link.image}
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}
