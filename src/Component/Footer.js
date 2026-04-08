import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/POLYGON ORIGINAL LOGO.png';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#10232F] text-white font-sans text-[0.9rem] px-[20px] pt-[40px] pb-[10px] leading-relaxed">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left flex-wrap gap-[20px] max-w-[1200px] mx-auto">
        {/* Left Section */}
        <div className="max-w-[300px] w-full">
          <img src={logo} alt="AgroWorld Logo" className="w-[150px] mb-[10px] mx-auto md:mx-0 block" />
          <p className="my-[5px]">
            No. 14, Sir Baron Jayathilake Mawatha,
            <br /> Colombo 01, Western 00100, LK
          </p>
          <p className="my-[5px]">
            <a href="mailto:info@agroworld.lk" className="text-[#00B2FF] no-underline hover:underline"></a>
          </p>
        </div>

        {/* Short Links */}
        <div className="w-full md:w-auto">
          <h4 className="mb-[10px] text-[1rem] text-[#00B2FF]">SHORT LINKS</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-[5px]">
              <Link to="/" className="text-white no-underline transition-colors duration-300 hover:text-[#00B2FF]">Home</Link>
            </li>
            <li className="mb-[5px]">
              <Link to="/contact" className="text-white no-underline transition-colors duration-300 hover:text-[#00B2FF]">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="w-full md:w-auto">
          <h4 className="mb-[10px] text-[1rem] text-[#00B2FF]">SOLUTIONS</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-[5px]">
              <Link to="/InvestmentFarm" className="text-white no-underline transition-colors duration-300 hover:text-[#00B2FF]">InvestorFarm</Link>
            </li>
            <li className="mb-[5px]">
              <Link to="/PlantCare" className="text-white no-underline transition-colors duration-300 hover:text-[#00B2FF]">PlantCare</Link>
            </li>
            <li className="mb-[5px]">
              <Link to="/MarketPlace" className="text-white no-underline transition-colors duration-300 hover:text-[#00B2FF]">Marketplace</Link>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div className="w-full md:w-auto">
          <h4 className="mb-[10px] text-[1rem] text-[#00B2FF]">FOLLOW</h4>
          <div className="flex gap-[15px] justify-center md:justify-start">
            <a href="" target="_blank" rel="noreferrer" className="text-[#00B2FF] text-[1.2rem] transition-all duration-300 hover:text-white hover:scale-125 inline-block">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@Agro_World" target="_blank" rel="noreferrer" className="text-[#00B2FF] text-[1.2rem] transition-all duration-300 hover:text-white hover:scale-125 inline-block">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-[20px] border-t border-[#555] pt-[10px]">
        <Link to="/Terms" className="text-white no-underline mr-[15px] transition-colors duration-300 hover:text-[#00B2FF] inline-block mb-2 md:mb-0">TERMS & CONDITIONS</Link>
        <Link to="/Privacy" className="text-white no-underline mr-[15px] transition-colors duration-300 hover:text-[#00B2FF] inline-block">PRIVACY POLICY</Link>
        <p className="mt-[10px] text-[0.8rem] text-[#aaa]">&copy; 2024 Polygon Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
