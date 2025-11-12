import React from 'react';
import Container from '../Container/Container';
import logo from "../../assets/PlateShare_logo.png";
import { NavLink } from 'react-router';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
      <>
        <Container className={`px-3 py-5 md:py-10`}>
          <footer className="footer sm:footer-horizontal text-[#fff8ec]">
            <aside className="">
              <NavLink to={"/"}>
                <img className="md:w-30 w-25" src={logo} alt="" />
              </NavLink>
              <h4 className="max-w-sm md:max-w-md text-left text-gray-300">
                PlateShare is a community-driven food sharing platform where
                people can donate extra meals and help others in need. We
                connect those who have food to share with those who need it,
                making compassion and kindness easier for everyone.
              </h4>
            </aside>
            <nav className="">
              <h6 className="footer-title">Services</h6>
              <a
                href="/addFood"
                className="link link-hover"
                title="Post your extra food to help others"
              >
                Post Food
              </a>
              <a
                href="/availableFoods"
                className="link link-hover"
                title="Browse available foods near you"
              >
                Available Foods
              </a>
              <a
                href="/contactUs"
                className="link link-hover"
                title="Read safety tips for donating or receiving food"
              >
                Contact Us
              </a>
            </nav>

            <nav className="">
              <h6 className="footer-title">Legal</h6>
              <a
                href="/termsAndConditions"
                className="link link-hover"
                title="Read the terms and conditions of using PlateShare"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacyPolicy"
                className="link link-hover"
                title="Understand how we protect your personal data"
              >
                Privacy Policy
              </a>
            </nav>
          </footer>
        </Container>
        <div className="bg-neutral max-w-full mx-auto">
          <Container>
            <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
              <aside className="grid-flow-col items-center">
                <h3>
                  Copyright © {new Date().getFullYear()} - All right reserved
                  PlateShare
                </h3>
              </aside>
              <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-base">
                <a href="https://x.com/">
                  <RiTwitterXFill />
                </a>
                <a href="https://www.youtube.com/@codeandspeech">
                  <IoLogoYoutube />
                </a>
                <a href="https://www.facebook.com/share/1DE3Xd5V4C/">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/ashadulislam6156rs/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/ashadulislam6156rs">
                  <FaGithub />
                </a>
              </nav>
            </footer>
          </Container>
        </div>
      </>
    );
};

export default Footer;