import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/PlateShare_logo.png";
import { NavLink } from "react-router";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <Container className="px-3 py-5 md:py-10">
        <footer className="footer sm:footer-horizontal text-[#fff8ec] dark:text-gray-300">
          {/* Logo & Description */}
          <aside className="">
            <NavLink to={"/"}>
              <img className="md:w-30 w-25" src={logo} alt="PlateShare Logo" />
            </NavLink>
            <h4 className="max-w-sm md:max-w-md text-left text-gray-300 dark:text-gray-400 mt-2">
              PlateShare is a community-driven food sharing platform where
              people can donate extra meals and help others in need. We connect
              those who have food to share with those who need it, making
              compassion and kindness easier for everyone.
            </h4>
          </aside>

          {/* Services Links */}
          <nav className="">
            <h6 className="footer-title dark:text-white">Services</h6>
            <a
              href="/addFood"
              className="link link-hover dark:text-gray-300 dark:hover:text-[#fd7d07]"
              title="Post your extra food to help others"
            >
              Post Food
            </a>
            <a
              href="/availableFoods"
              className="link link-hover dark:text-gray-300 dark:hover:text-[#fd7d07]"
              title="Browse available foods near you"
            >
              Available Foods
            </a>
            <a
              href="/contactUs"
              className="link link-hover dark:text-gray-300 dark:hover:text-[#fd7d07]"
              title="Read safety tips for donating or receiving food"
            >
              Contact Us
            </a>
          </nav>

          {/* Legal Links */}
          <nav className="">
            <h6 className="footer-title dark:text-white">Legal</h6>
            <a
              href="/termsAndConditions"
              className="link link-hover dark:text-gray-300 dark:hover:text-[#fd7d07]"
              title="Read the terms and conditions of using PlateShare"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacyPolicy"
              className="link link-hover dark:text-gray-300 dark:hover:text-[#fd7d07]"
              title="Understand how we protect your personal data"
            >
              Privacy Policy
            </a>
          </nav>
        </footer>
      </Container>

      {/* Bottom Footer */}
      <div className="bg-neutral dark:bg-slate-900 max-w-full mx-auto transition-colors duration-300">
        <Container>
          <footer className="footer sm:footer-horizontal text-neutral-content dark:text-gray-400 items-center p-4">
            <aside className="grid-flow-col items-center">
              <h3>
                Copyright © {new Date().getFullYear()} - All rights reserved
                PlateShare
              </h3>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-base">
              <a
                href="https://x.com/"
                className="hover:text-[#fd7d07] transition-colors"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="https://www.youtube.com/@codeandspeech"
                className="hover:text-[#fd7d07] transition-colors"
              >
                <IoLogoYoutube />
              </a>
              <a
                href="https://www.facebook.com/share/1DE3Xd5V4C/"
                className="hover:text-[#fd7d07] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/ashadulislam6156rs/"
                className="hover:text-[#fd7d07] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ashadulislam6156rs"
                className="hover:text-[#fd7d07] transition-colors"
              >
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
