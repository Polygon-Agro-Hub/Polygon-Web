import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";
import CardData from "./Model/CardData";
import Eco from "../images/EcoSystem.png";
import About from "../images/About Glob.png";
import Solution from "../images/Solution Components.png";
import Cards from "./Cards";
import Center from "../images/Center.png";
import Oppo from "../images/Oppo Back.png";
import Opportunities from "./Opportunities";
import paddy from "../images/paddy.png";
import Footer from "./Footer";
import HeroSection from "./Hero";
import LeafImg from "../images/Leaf.png";
import hannah from "../images/Lak.png";

const Body = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const LeafIcon = () => (
    <img
      src={LeafImg}
      alt="leaf"
      style={{
        width: "32px",
        height: "32px",
        flexShrink: 0,
        objectFit: "contain",
      }}
    />
  );

  // Left column margins  [ml, mr]
  const leftCards = [
    { text: "Share holding opportunity to ADC", ml: 0, mr: 120 },
    { text: "Stable farm-gate price", ml: 60, mr: 60 },
    { text: "Planned cultivation", ml: 120, mr: 0 },
    { text: "Crop insurance free of charge", ml: 60, mr: 60 },
    { text: "Farmer pension scheme for a future", ml: 0, mr: 120 },
  ];

  // Right column margins  [ml, mr]
  const rightCards = [
    { text: "Transport and logistics facility", ml: 120, mr: 0 },
    { text: "Edu-programmes for quality & productivity", ml: 60, mr: 60 },
    { text: "Impacts of post-harvest loss reduction", ml: 0, mr: 120 },
    { text: "Agri modernisation and tech-adaptation", ml: 60, mr: 60 },
    {
      text: "Centralized e-platform to supply-chain-management",
      ml: 120,
      mr: 0,
    },
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full overflow-x-hidden max-w-[100vw]">
      <div className="w-full">
        <HeroSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] px-6 py-10 md:p-[60px_80px] bg-white items-center">
        {/* Left: Image — hidden on mobile, visible on desktop */}
        <div className="relative pb-[30px] pr-[30px] order-last md:order-first hidden md:block">
          <img
            src={About}
            alt="about"
            className="relative z-10 w-full h-auto object-cover rounded-[18px] block"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-[22px] items-center md:items-start order-first md:order-last text-center md:text-left">
          <span className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[6px] px-[22px] text-[14px]">
            About Us
          </span>

          <h2 className="text-[1.6rem] md:text-[2rem] font-semibold leading-snug m-0">
            Changing the landscape of agriculture
          </h2>

          <p className="text-[0.95rem] md:text-[1rem] leading-loose m-0 text-gray-500">
            Polygon Agro Holdings is a Sri Lankan Agri-FinTech Startup Company
            helping farmers and investors to maximize their wealth by optimizing
            the agriculture value chain by creating an investment-to-shelf
            digital platform
          </p>

          <button className="flex items-center gap-[14px] bg-transparent border-none cursor-pointer p-0 mt-[6px]">
            <span className="w-[52px] h-[52px] bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                style={{ marginLeft: "3px" }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-[1rem] font-semibold text-black">
              Watch Video
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center py-[20px] md:py-[30px] px-[10px] md:px-[20px] w-full">
        <h4 className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[6px] px-[22px] text-[14px] self-center mb-4">
          Polygon Agro Eco System
        </h4>
        <img
          src={Eco}
          alt="eco-img"
          className="max-w-full h-auto px-[10px] block"
        />
      </div>
      <div className="w-full p-[15px] md:p-[20px] text-center">
        <div className="text-center mb-[20px] w-full">
          <h4 className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem]">
            Solution Components
          </h4>
          <h2 className="my-[10px] mx-auto text-[1.5rem] md:text-[2rem] text-[#333] text-center w-full max-w-[800px]">
            Polygon Agro serves the interest of all agri stakeholders
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px] p-[20px] w-full">
          {CardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              topic={card.topic}
              texts={card.texts}
              arrowLink={card.arrowLink}
            />
          ))}
        </div>
        <div className="w-full hidden md:flex justify-center mt-[20px]">
          <img
            src={Solution}
            alt="Solution"
            className="max-w-full h-auto block"
          />
        </div>
      </div>
      <div className="w-full text-center py-[15px] md:py-[20px] px-[10px] md:px-[20px]">
        <h4 className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-2">
          Our Target
        </h4>
        <h2 className="my-[10px] mx-auto text-center w-full text-[1.5rem] md:text-[2rem]">
          Impact Created to the Ecosystem
        </h2>
        <Cards />
      </div>
      <div className="text-center py-[20px] md:py-[60px] px-[10px] md:px-[30px] w-full">
        <h4 className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[8px] px-[20px] w-fit mx-auto text-[0.85rem] mb-[50px]">
          Stakeholder Benefits
        </h4>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row justify-between items-center gap-[16px] w-full">
          {/* Left Column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              minWidth: 0,
            }}
          >
            {leftCards.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#eaf6e4",
                  borderRadius: "12px",
                  padding: "15px 18px",
                  fontSize: "0.95rem",
                  color: "#222",
                  cursor: "pointer",
                  marginLeft: i % 2 === 0 ? "0px" : "80px",
                  marginRight: i % 2 === 0 ? "80px" : "0px",
                }}
              >
                <LeafIcon />
                <span style={{ textAlign: "left" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div
            style={{
              flexShrink: 0,
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Center}
              alt="Illustration"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Right Column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              minWidth: 0,
            }}
          >
            {rightCards.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#eaf6e4",
                  borderRadius: "12px",
                  padding: "15px 18px",
                  fontSize: "0.95rem",
                  color: "#222",
                  cursor: "pointer",
                  marginLeft: i % 2 === 0 ? "0px" : "80px",
                  marginRight: i % 2 === 0 ? "80px" : "0px",
                }}
              >
                <LeafIcon />
                <span style={{ textAlign: "left" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-[20px] w-full">
          {/* Left cards always visible */}
          {leftCards.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#eaf6e4",
                borderRadius: "12px",
                padding: "14px 16px",
                fontSize: "0.9rem",
                color: "#222",
                marginLeft: i % 2 === 0 ? "0px" : "60px",
                marginRight: i % 2 === 0 ? "60px" : "0px",
              }}
            >
              <LeafIcon />
              <span style={{ textAlign: "left" }}>{item.text}</span>
            </div>
          ))}

          {/* Right cards — only shown when showAll is true */}
          {showAll &&
            rightCards.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#eaf6e4",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  fontSize: "0.9rem",
                  color: "#222",
                  marginLeft: i % 2 === 0 ? "0px" : "60px",
                  marginRight: i % 2 === 0 ? "60px" : "0px",
                }}
              >
                <LeafIcon />
                <span style={{ textAlign: "left" }}>{item.text}</span>
              </div>
            ))}

          {/* View all / View less toggle */}
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              display: "inline-block",
              marginTop: "10px",
              fontSize: "1rem",
              color: "#222",
              textDecoration: "underline",
              textAlign: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      </div>
      <div className="w-full py-[15px] md:py-0 px-[10px] md:px-0">
        <div className="w-full text-center p-[20px]">
          <h4 className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-2">
            Opportunities
          </h4>
          <div>
            <Opportunities />
          </div>
        </div>
        <div className="relative w-full h-auto overflow-hidden mt-[20px]">
          <img
            src={paddy}
            alt="Agricultural Background"
            className="w-full h-full object-cover block"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-[2] w-[90%] drop-shadow-md">
            <h1 className="text-[1.5rem] md:text-[3.5rem] mb-[15px] leading-snug font-bold">
              Get involved in
              <br />
              Agricultural uprising
            </h1>
            <button
              className="bg-[#2c2d2c] hover:bg-[#45a049] text-white border-none py-[8px] px-[24px] md:py-[10px] md:px-[28px] rounded-full text-[0.9rem] md:text-[1rem] cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-center p-[20px] my-20 hidden">
        <h4 className="bg-[#F1FFB7] text-[#627324] border border-[#C8D0A9] rounded-full py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-4">
          Testimonials
        </h4>

        <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-gray-900 mb-10">
          What People Say About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          {/* Card 1 - smaller, slightly lower */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full md:w-[30%] text-center shadow-sm mt-8">
            <p className="text-gray-700 text-[0.95rem] mb-6">
              "This area is reserved for users/clients feedbacks This area is
              reserved for users/clients feedbacks This area is reserved for
              users/clients feedbacks"
            </p>
            <img
              src={hannah}
              alt="Hannah East"
              className="w-14 h-14 rounded-full mx-auto mb-3 object-cover border border-gray-200"
            />
            <p className="font-bold text-gray-900 text-[1rem]">Hannah East</p>
            <p className="text-gray-500 text-[0.85rem]">Director at CIC</p>
          </div>

          {/* Card 2 - center, taller/elevated */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full md:w-[33%] text-center shadow-md -mt-4">
            <p className="text-gray-700 text-[0.95rem] mb-6">
              "This area is reserved for users/clients feedbacks This area is
              reserved for users/clients feedbacks This area is reserved for
              users/clients feedbacks"
            </p>
            <img
              src={hannah}
              alt="Hannah East"
              className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border border-gray-200"
            />
            <p className="font-bold text-gray-900 text-[1rem]">Hannah East</p>
            <p className="text-gray-500 text-[0.85rem]">Director at CIC</p>
          </div>

          {/* Card 3 - smaller, slightly lower */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full md:w-[30%] text-center shadow-sm mt-8">
            <p className="text-gray-700 text-[0.95rem] mb-6">
              "This area is reserved for users/clients feedbacks This area is
              reserved for users/clients feedbacks This area is reserved for
              users/clients feedbacks"
            </p>
            <img
              src={hannah}
              alt="Hannah East"
              className="w-14 h-14 rounded-full mx-auto mb-3 object-cover border border-gray-200"
            />
            <p className="font-bold text-gray-900 text-[1rem]">Hannah East</p>
            <p className="text-gray-500 text-[0.85rem]">Director at CIC</p>
          </div>
        </div>
      </div>
      <div className="w-full text-center p-[20px] my-20"></div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
