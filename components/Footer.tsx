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
    <footer>
      
    </footer>
  )
}
