import React, { useState, useEffect, useRef } from "react";
import logo from "../images/POLYGON ORIGINAL LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center bg-white shadow-md w-full px-[20px] md:pl-[75px] md:pr-[50px] py-[10px] box-border" ref={headerRef}>
      {/* Hamburger Menu Button */}
      <button className="text-[24px] bg-transparent border-none cursor-pointer p-[10px] md:hidden z-[1010]" onClick={toggleMenu} aria-label="Menu">
        ☰
      </button>

      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[40px] w-auto" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`flex-grow md:justify-start ${isMenuOpen ? "flex flex-col absolute top-[72px] left-0 w-[60%] bg-white shadow-md z-[999] py-[10px] rounded-[5px]" : "hidden md:flex"}`}>
  <ul className="flex flex-col md:flex-row list-none m-0 p-0 md:w-full w-full md:items-center">
    <li className="mx-[25px] my-[10px] md:my-0 w-full md:w-auto text-left md:pl-0 pl-[20px]">
      <Link to="/" className="text-black text-[16px] px-[10px] py-[5px] transition-all duration-300 inline-block hover:text-white hover:bg-black hover:rounded-[5px]" onClick={handleLinkClick}>
        Home
      </Link>
    </li>
    <li className="mx-[25px] my-[10px] md:my-0 w-full md:w-auto text-left md:pl-0 pl-[20px] relative" ref={dropdownRef}>
      <div className="md:inline-block w-full">
        <button className="text-black text-[16px] pl-[10px] py-[8px] pb-[10px] md:px-[10px] md:py-[5px] transition-all duration-300 inline-block hover:text-white hover:bg-black hover:rounded-[5px] border-none bg-transparent cursor-pointer w-full md:w-auto text-left">
          About Us ▾
        </button>
      </div>
    </li>
    <li className="mx-[25px] my-[10px] md:my-0 w-full md:w-auto text-left md:pl-0 pl-[20px] relative" ref={dropdownRef}>
      <div className="md:inline-block w-full">
        <button className="text-black text-[16px] pl-[10px] py-[8px] pb-[10px] md:px-[10px] md:py-[5px] transition-all duration-300 inline-block hover:text-white hover:bg-black hover:rounded-[5px] border-none bg-transparent cursor-pointer w-full md:w-auto text-left" onClick={toggleDropdown}>
          Solutions ▾
        </button>
        {isDropdownOpen && (
          <ul className="md:absolute static top-full left-0 bg-white md:shadow-md rounded-[5px] min-w-[220px] z-[1000] m-0 p-0 md:mt-0 mt-[10px] list-none w-full box-border">
            <li className="border-b border-gray-200 last:border-none w-full text-left">
              <Link to="/InvestmentFarm" className="block text-black text-[16px] py-[10px] px-[15px] transition-colors duration-300 hover:bg-gray-100" onClick={handleLinkClick}>
                Investment Farm Web
              </Link>
            </li>
            <li className="border-b border-gray-200 last:border-none w-full text-left">
              <Link to="/PlantCare" className="block text-black text-[16px] py-[10px] px-[15px] transition-colors duration-300 hover:bg-gray-100" onClick={handleLinkClick}>
                PlantCare Mobile App
              </Link>
            </li>
            <li className="border-b border-gray-200 last:border-none w-full text-left">
              <Link to="/MarketPlace" className="block text-black text-[16px] py-[10px] px-[15px] transition-colors duration-300 hover:bg-gray-100" onClick={handleLinkClick}>
                Marketplace Web
              </Link>
            </li>
          </ul>
        )}
      </div>
    </li>
    <li className="mx-[25px] my-[10px] md:my-0 w-full md:w-auto text-left md:pl-0 pl-[20px]">
      <Link to="/News" className="text-black text-[16px] px-[10px] py-[5px] transition-all duration-300 inline-block hover:text-white hover:bg-black hover:rounded-[5px]" onClick={handleLinkClick}>
        News
      </Link>
    </li>

    {/* Spacer pushes Contact Us to far right */}
    <li className="hidden md:block md:flex-1"></li>

    <li className="mx-[25px] my-[10px] md:my-0 w-full md:w-auto text-left md:pl-0 pl-[20px]">
      <Link
        to="/contact"
        className="text-black text-[16px] px-[14px] py-[6px] transition-all duration-300 inline-block border border-black rounded-[15px] hover:bg-black hover:text-white"
        onClick={handleLinkClick}
      >
        Contact Us
      </Link>
    </li>
  </ul>
</nav>
    </header>
  );
};

export default Header;