import React, { useState, useEffect, useRef } from "react";
import logo from "../images/POLYGON ORIGINAL LOGO.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[1000] bg-white shadow-md w-full box-border"
      ref={headerRef}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 py-3 md:px-[50px] md:pl-[75px]">
        {/* LEFT — hamburger (mobile) / empty spacer (desktop) */}
        <div className="flex items-center w-10 md:w-auto">
          <button
            className="text-[24px] bg-transparent border-none cursor-pointer md:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* CENTER — logo (always centered on mobile, left-aligned on desktop via flex) */}
        <div className="flex-1 flex justify-center md:justify-start md:flex-none">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[40px] w-auto" />
          </Link>
        </div>

        {/* RIGHT — desktop nav */}
        <nav className="hidden md:flex flex-1">
          <ul className="flex list-none m-0 p-0 w-full items-center">
            <li className="mx-[15px]">
              <Link
                to="/"
                className="text-black text-[16px] px-[10px] py-[5px] transition-all duration-300 inline-block hover:text-white hover:bg-black hover:rounded-[5px]"
              >
                Home
              </Link>
            </li>
            <li className="mx-[15px]">
              <button className="text-black text-[16px] px-[10px] py-[5px] transition-all duration-300 hover:text-white hover:bg-black hover:rounded-[5px] border-none bg-transparent cursor-pointer">
                About Us ▾
              </button>
            </li>
            <li className="mx-[15px] relative" ref={dropdownRef}>
              <button
                className="text-black text-[16px] px-[10px] py-[5px] transition-all duration-300 hover:text-white hover:bg-black hover:rounded-[5px] border-none bg-transparent cursor-pointer"
                onClick={toggleDropdown}
              >
                Solutions ▾
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-[5px] min-w-[220px] z-[1000] m-0 p-0 mt-[5px] list-none">
                  <li className="border-b border-gray-200 last:border-none">
                    <Link
                      to="/InvestmentFarm"
                      className="block text-black text-[16px] py-[10px] px-[15px] hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      GoViCapital Web
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 last:border-none">
                    <Link
                      to="/PlantCare"
                      className="block text-black text-[16px] py-[10px] px-[15px] hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      GoViCare Mobile App
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 last:border-none">
                    <Link
                      to="/MarketPlace"
                      className="block text-black text-[16px] py-[10px] px-[15px] hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      GoViMart Web
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mx-[15px]">
              <Link
                to="/News"
                className="text-black text-[16px] px-[10px] py-[5px] transition-all duration-300 inline-block hover:text-white hover:bg-black hover:rounded-[5px]"
              >
                News
              </Link>
            </li>
            {/* Spacer */}
            <li className="flex-1" />
            <li>
              <Link
                to="/contact"
                className="text-black text-[16px] px-[14px] py-[6px] transition-all duration-300 inline-block border border-black rounded-[15px] hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT — placeholder to balance the hamburger on mobile */}
        <div className="w-10 md:hidden" />
      </div>

      {/* ── Mobile slide-down menu ── */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col list-none m-0 p-0 py-[10px]">
            <li className="border-b border-gray-100">
              <Link
                to="/"
                className="block text-black text-[16px] px-[24px] py-[12px] hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-100">
              <button className="w-full text-left text-black text-[16px] px-[24px] py-[12px] hover:bg-gray-50 bg-transparent border-none cursor-pointer">
                About Us ▾
              </button>
            </li>
            <li className="border-b border-gray-100">
              <button
                className="w-full text-left text-black text-[16px] px-[24px] py-[12px] hover:bg-gray-50 bg-transparent border-none cursor-pointer"
                onClick={toggleDropdown}
              >
                Solutions ▾
              </button>
              {isDropdownOpen && (
                <ul className="list-none m-0 p-0 bg-gray-50">
                  <li>
                    <Link
                      to="/InvestmentFarm"
                      className="block text-black text-[15px] py-[10px] px-[40px] hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      GoViCapital Web
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PlantCare"
                      className="block text-black text-[15px] py-[10px] px-[40px] hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      GoViCare Mobile App
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/MarketPlace"
                      className="block text-black text-[15px] py-[10px] px-[40px] hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      GoViMart Web
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b border-gray-100">
              <Link
                to="/News"
                className="block text-black text-[16px] px-[24px] py-[12px] hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                News
              </Link>
            </li>
            <li className="px-[24px] py-[12px]">
              <Link
                to="/contact"
                className="inline-block text-black text-[16px] px-[14px] py-[6px] border border-black rounded-[15px] hover:bg-black hover:text-white"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
