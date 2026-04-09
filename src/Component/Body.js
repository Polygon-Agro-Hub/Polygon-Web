import React from "react";
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

const Body = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full overflow-x-hidden max-w-[100vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-5 text-white p-3 md:p-5 items-center w-full">
        <HeroSection />
      </div>
      <div className="flex flex-col items-center text-center py-12 px-6 max-w-1xl mx-auto w-full">
        <div className="mb-6">
          <h2 className="text-[36px] text-[#000000] leading-[50px] font-[500] tracking-wider Inter-Medium">
            Empowering Farmers, Feeding the Nation
          </h2>
          <div className="h-[5px] bg-[#F40064] mt-3 w-full rounded-sm" />
        </div>

        <p className="font-[400] text-[20px] leading-[36px] Inter-Regular tracking-widest mt-4 text-[#353535]">
          Agro Benefit Lanka is transforming the way Sri Lanka grows and shares
          its harvest. We empower farmers to become <br /> successful
          agripreneurs, connecting their hard work directly to the homes and
          hearts of our people. Through <br /> technology and trust, we bring
          fresh, wholesome produce from our fields to your table, building a
          fair, sustainable, and <br /> proudly local food movement.
        </p>

        <a
          href="#"
          className="mt-6 text-[#F40064] Inter-Regular font-[400] text-[20px] tracking-widest leading-[28px] underline underline-offset-4 hover:text-[#c0003e] transition-colors"
        >
          Learn More
        </a>
      </div>
      <div className="flex flex-col items-center text-center py-[20px] md:py-[30px] px-[10px] md:px-[20px] w-full">
        <h4 className="bg-[#b0da61] text-[#4c5f09] border-2 border-[#bbce53] rounded-[10px] py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-4">
          AgroWorld Eco System
        </h4>
        <img
          src={Eco}
          alt="eco-img"
          className="max-w-full h-auto px-[10px] block"
        />
      </div>
      <div className="w-full p-[15px] md:p-[20px] text-center">
        <div className="text-center mb-[20px] w-full">
          <h4 className="bg-[#b0da61] text-[#4c5f09] border-2 border-[#bbce53] rounded-[10px] py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem]">
            Solution Components
          </h4>
          <h2 className="my-[10px] mx-auto text-[1.5rem] md:text-[2rem] text-[#333] text-center w-full max-w-[800px]">
            Agro World serves the interest of all agri stakeholders
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
        <div className="w-full flex justify-center mt-[20px]">
          <img
            src={Solution}
            alt="Solution"
            className="max-w-full h-auto block"
          />
        </div>
      </div>
      <div className="w-full text-center py-[15px] md:py-[20px] px-[10px] md:px-[20px]">
        <h4 className="bg-[#b0da61] text-[#4c5f09] border-2 border-[#bbce53] rounded-[10px] py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-2">
          Our Target
        </h4>
        <h2 className="my-[10px] mx-auto text-center w-full text-[1.5rem] md:text-[2rem]">
          Impact Created to the Ecosystem
        </h2>
        <Cards />
      </div>
      <div className="text-center py-[20px] md:py-[40px] px-[10px] md:px-[20px] w-full">
        <h4 className="bg-[#b0da61] text-[#4c5f09] border-2 border-[#bbce53] rounded-[10px] py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-4">
          Stakeholder Benefits
        </h4>
        <div className="flex flex-col md:flex-row flex-wrap justify-around gap-[20px] w-full">
          <div className="flex-1 flex flex-col gap-[10px] text-center p-[15px] min-w-[300px]">
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Share holding opportunity to ADC
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Stable farm-gate price
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Planned cultivation
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Crop insurance free of charge
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Farmer pension scheme for a future
            </div>
          </div>
          <div className="min-w-[250px] flex-1 flex flex-col gap-[10px] text-center p-[15px] md:order-none -order-1">
            <img
              src={Center}
              alt="Illustration"
              className="max-w-full h-auto block mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col gap-[10px] text-center p-[15px] min-w-[300px]">
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Transport and logistics facility
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Edu-programmes for quality & productivity
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Impacts of post-harvest loss reduction
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Agri modernisation and tech-adaptation
            </div>
            <div className="bg-[#f0fdf4] py-[10px] px-[15px] rounded-[10px] my-[5px] transition-all duration-300 hover:bg-[#e8f5e9] hover:-translate-y-1">
              🌿 Centralized e-platform to supply-chain-management
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[15px] md:py-0 px-[10px] md:px-0">
        <div className="w-full text-center p-[20px]">
          <h4 className="bg-[#b0da61] text-[#4c5f09] border-2 border-[#bbce53] rounded-[10px] py-[8px] px-[15px] w-fit mx-auto text-[0.8rem] md:text-[1rem] mb-2">
            Opportunities
          </h4>
          <div
            className="bg-cover bg-center bg-no-repeat p-[20px] rounded-[10px] mt-[20px] w-full"
            style={{ backgroundImage: `url(${Oppo})` }}
          >
            <Opportunities />
          </div>
        </div>
        <div className="relative w-full h-[400px] overflow-hidden mt-[20px]">
          <img
            src={paddy}
            alt="Agricultural Background"
            className="w-full h-full object-cover block"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-[2] w-[90%] drop-shadow-md">
            <h1 className="text-[1.5rem] md:text-[2.5rem] mb-[15px] leading-snug">
              Get involved in Agricultural Uprising
            </h1>
            <button
              className="bg-[#2c2d2c] hover:bg-[#45a049] text-white border-none py-[8px] px-[16px] md:py-[10px] md:px-[20px] rounded-[5px] text-[0.9rem] md:text-[1rem] cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
