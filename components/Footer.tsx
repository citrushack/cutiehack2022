import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { MdEmail } from 'react-icons/md'
import { Wave } from './Wave'

const SocialLinks = [
  {
    path: 'https://www.facebook.com/cutiehack/',
    title: 'Facebook',
    image: <FaFacebook size="20"></FaFacebook>,
  },
  {
    path: 'https://www.instagram.com/cutiehack_ucr/',
    title: 'Instagram',
    image: <FaInstagram size="20"></FaInstagram>,
  },
  {
    path: 'https://www.linkedin.com/company/17907222/admin/',
    title: 'LinkedIn',
    image: <FaLinkedin size="20"></FaLinkedin>,
  },
  {
    path: 'https://twitter.com/citrushack',
    title: 'Twitter',
    image: <FaTwitter size="20"></FaTwitter>,
  },
  {
    path: 'mailto:citrushack@gmail.com',
    title: 'Email',
    image: <MdEmail size="20"></MdEmail>,
  },
]

export default function Footer() {
  return (
    <div className="flex flex-col w-screen bg-pattern bg-repeat">
      <footer className="w-full z-30 pb-10 pt-5 md:pt-0 md:pb-20">
        <div className="flex flex-col justify-center mx-auto items-center">
          <div className="flex flex-row mb-2 font-baloo_semi_bold text-sm md:text-2xl text-text">
            <p>Made with &lt;3 by Citrus Hack team.</p>
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
