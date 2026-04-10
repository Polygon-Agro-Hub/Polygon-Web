import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/POLYGON ORIGINAL LOGO.png";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGooglePlay,
  FaAppStore,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#182D36" }}
      className="text-white font-sans text-[0.9rem] leading-relaxed"
    >
      {/* Main Footer Content */}
      <div className="px-[30px] md:px-[60px] py-[50px] md:py-[60px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[40px] max-w-[1400px] mx-auto items-center text-center md:text-left">
          {/* Left Section - Logo + Address */}
          <div className="max-w-[280px] w-full flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Polygon Logo"
              className="w-[140px] md:w-[160px] mb-[20px] block"
            />
            <p className="my-[5px] text-[#A9C6D3] text-[0.85rem]">
              No. 14, Sir Baron Jayathilake Mawatha,
              <br /> Colombo 01, Western 00100, LK
            </p>
            <p className="my-[8px] text-[#A9C6D3]">
              <a
                href="mailto:info@polygon.lk"
                className="no-underline hover:underline text-[0.85rem]"
              >
                info@polygon.lk
              </a>
            </p>
          </div>

          {/* Short Links */}
          <div className="w-full md:w-auto min-w-[120px]">
            <h4 className="mb-[18px] text-[0.85rem] font-semibold tracking-widest text-white">
              SHORT LINKS
            </h4>
            <ul className="list-none p-0 m-0 space-y-[12px]">
              <li>
                <Link
                  to="/"
                  className="text-[#A9C6D3] no-underline hover:text-[#00B2FF] text-[0.9rem]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#A9C6D3] no-underline hover:text-[#00B2FF] text-[0.9rem]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                  className="text-[#A9C6D3] no-underline hover:text-[#00B2FF] text-[0.9rem]"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="w-full md:w-auto min-w-[120px]">
            <h4 className="mb-[18px] text-[0.85rem] font-semibold tracking-widest text-white">
              SOLUTIONS
            </h4>
            <ul className="list-none p-0 m-0 space-y-[12px]">
              <li>
                <Link
                  to="/InvestmentFarm"
                  className="text-[#A9C6D3] no-underline hover:text-[#00B2FF] text-[0.9rem]"
                >
                  GoVi Capital
                </Link>
              </li>
              <li>
                <Link
                  to="/PlantCare"
                  className="text-[#A9C6D3] no-underline hover:text-[#00B2FF] text-[0.9rem]"
                >
                  GoViCare
                </Link>
              </li>
              <li>
                <Link
                  to="/MarketPlace"
                  className="text-[#A9C6D3] no-underline hover:text-[#00B2FF] text-[0.9rem]"
                >
                  GoViMart
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <h4 className="mb-[18px] text-[0.85rem] font-semibold tracking-widest text-white">
              FOLLOW
            </h4>
            <div className="flex gap-[16px] flex-wrap justify-center md:justify-start">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="Google Play"
              >
                <FaGooglePlay />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-[#00B2FF] text-[1.6rem] md:text-[1.3rem] hover:text-white hover:scale-125 inline-block transition-all duration-300"
                aria-label="App Store"
              >
                <FaAppStore />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ backgroundColor: "#091D25" }}
        className="px-[30px] md:px-[60px] py-[20px]"
      >
        <div className="flex flex-col items-center md:flex-row md:justify-between max-w-[1400px] mx-auto gap-[10px] text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[40px]">
            <Link
              to="/Terms"
              className="text-gray-300 no-underline text-[0.8rem] tracking-widest hover:text-[#00B2FF]"
            >
              TERMS & CONDITIONS
            </Link>
            <Link
              to="/Privacy"
              className="text-gray-300 no-underline text-[0.8rem] tracking-widest hover:text-[#00B2FF]"
            >
              PRIVACY POLICY
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[0.8rem] text-gray-400 m-0">
              Copyright &copy; 2024 Polygon Agro Holdings
            </p>
            <p className="text-[0.8rem] text-gray-400 m-0">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
