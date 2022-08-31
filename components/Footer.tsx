import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
    <footer className='bg-black text-white py-6'>
      <Container className='justify-center mx-auto'>
				<Row>
					<p className='text-4xl font-lexend font-bold text-center'>
						Let&#39;s connect!
					</p>
				</Row>
				<Row className='justify-center mx-auto'>
					{SocialLinks.map((link, index) => {
						return (
							<Col
								key={index}
								xs={4}
								md={2}
								className='flex justify-center'
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
							</Col>
						);
					})}
				</Row>
			</Container>
    </footer>
  )
}
