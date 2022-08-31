import React from "react";
// import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const SocialLinks = [
  {
    path: "https://www.facebook.com/cutiehack/",
    title: "Facebook",
    image: <FaFacebook size='56'></FaFacebook>,
  },
  {
    path: "https://www.instagram.com/cutiehack_ucr/",
    title: "Instagram",
    image: <FaInstagram size='56'></FaInstagram>,
  },
  {
    path: "https://www.linkedin.com/company/17907222/admin/",
    title: "LinkedIn",
    image: <FaLinkedin size='56'></FaLinkedin>,
  },
];

export default function Footer() {
  return (
    <footer className='bg-black text-white py-6 min-w-full'>
      <div className='flex flex-col justify-center mx-auto items-center'>
				<div className='flex flex-row mb-2'>
					<p className='text-4xl font-lexend font-bold text-center'>
						{"Let's connect!"}
					</p>
				</div>
				<div className='flex flex-row justify-center mx-auto'>
					{SocialLinks.map((link) => {
						return (
							<div
								key={link.path}
								className='flex justify-center mr-1'
							>
								<Link href={link.path}>
									<a
										rel='noopener noreferrer'
										target='_blank'
										title={link.title}
										className='fill-current text-white hover:text-gray-500'
									>
										{link.image}
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
    </footer>
  )
}
