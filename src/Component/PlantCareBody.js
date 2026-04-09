import React from "react";
import { FaApple } from "react-icons/fa";
import farmerImage from "../images/FarmerP.png"; // Replace with actual image path
import appImage from "../images/APP_PC.png"; // Single app screen image
import cropIcon from "../images/Access.png";
import weatherIcon from "../images/Weather.png";
import supportIcon from "../images/Finance.png";
import marketplaceIcon from "../images/MarAccess.png";
import greenMobileImg from "../images/GreenMobile.png";

const PlantCareBody = () => {
  return (
    <div className="bg-[#f9f9f9] overflow-x-hidden font-sans">
      {/* Section 1: Intro Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center p-[40px] px-[20px] gap-[20px] bg-white text-center md:text-left w-full">
        {/* Left Side Content */}
        <div className="flex-1 w-full md:max-w-[50%] md:pl-[100px] pt-[70px] md:pt-0">
          <h1 className="text-[1.6rem] sm:text-[1.9rem] md:text-[2rem] text-[#1F4E3D] mb-[10px] leading-tight">
            GoViCare Mobile App
          </h1>
          <h2 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] mb-[15px] text-[#2F2F2F] leading-snug">
            Empowering Farmers & Supporting Using Smart Technology
          </h2>
          <p className="text-[0.9rem] lg:text-[1.1rem] leading-[1.6] text-[#2F2F2F] text-center md:text-justify">
            GoViCare is a powerful mobile app designed to simplify and enhance
            farm management. It provides affordable financing, shared risk
            options, and guidance on crop selection based on agro-ecological
            data. Farmers benefit from a smart crop calendar, disease prediction
            through advanced tech, and consistent expert advice. The app
            connects farmers with agri-input providers, automates farm
            accounting, and includes weather forecasts, asset management, and
            customer support.
          </p>
        </div>

        {/* Right Side Single Image */}
        <div className="flex-1 w-full md:max-w-[50%] flex justify-center pt-12">
          <img
            src={appImage}
            alt="App Screen"
            className="w-full max-w-[380px] h-auto"
          />
        </div>
      </div>

      {/* Section 2: Benefits Section */}
      <div className="flex flex-col md:flex-row items-center gap-[30px] p-[40px] px-[20px] bg-[#f9f9f9] text-center md:text-left w-full">
        {/* Left Side Farmer Image */}
        <div className="hidden md:flex flex-1 w-full justify-center">
          <img
            src={farmerImage}
            alt="Farmer Illustration"
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Right Side Benefit Cards */}
        <div className="flex-[2] w-full px-4">
          <h2 className="text-[2.5rem] mb-[30px] text-[#333] font-bold text-center md:text-left">
            Why GoViCare
          </h2>
          <div className="flex flex-col gap-[25px]">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#FEBD09] border-r-[#FEBD09] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={cropIcon}
                alt="Crop Calendars"
                className="w-[51px] h-[51px] mb-[15px] md:mb-0 md:mr-[25px]"
              />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">
                  Access Crop Calendars
                </h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Crop calendars incorporate scientific methods and best
                  practices to guide farmers through cultivation, ensuring
                  optimal growth and yield for every crop.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#FEBD09] border-r-[#FEBD09] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={weatherIcon}
                alt="Weather Forecast"
                className="w-[51px] h-[51px] mb-[15px] md:mb-0 md:mr-[25px]"
              />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">
                  Get Weather Forecast
                </h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Our weather forecasts provide accurate, timely data to help
                  farmers make informed, weather-aware decisions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#FEBD09] border-r-[#FEBD09] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={supportIcon}
                alt="Financial Support"
                className="w-[51px] h-[51px] mb-[15px] md:mb-0 md:mr-[25px]"
              />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">
                  Financial Support
                </h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Farmers get access to financial support through the app to
                  fund their cultivation needs.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#FEBD09] border-r-[#FEBD09] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={marketplaceIcon}
                alt="GoViMart Access"
                className="w-[51px] h-[51px] mb-[15px] md:mb-0 md:mr-[25px]"
              />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">
                  Marketplace Access
                </h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Farmers can sell their harvest through AgroWorld, accessing
                  collection centers easily with the Plant Care QR code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px] md:p-[60px] flex justify-center">
        <div className="bg-[#1F4E3D] w-full max-w-[1400px] rounded-[30px] p-[40px] md:p-[60px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white">
          {/* Text and Buttons Content */}
          <div className="z-10 text-center md:text-left md:max-w-[90%]">
            <h2 className="text-[2rem] md:text-[3rem] font-serif mb-[20px]">
              Join the green revolution today!
            </h2>
            <p className="text-[1rem] md:text-[1.2rem] opacity-90 leading-[1.6] mb-[30px] font-serif">
              We believe that small changes lead to significant impacts with
              GoViCare, helping farmers achieve more with every step. Empowering
              growth, one smart decision at a time.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-[15px]">
              {/* Google Play Button */}
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-all shadow-md">
                {/* Google Play Icon (SVG for better accuracy) */}
                <svg viewBox="0 0 512 512" width="24" height="24">
                  <path fill="#4285F4" d="M12 52.15v407.7l328.7-203.9z" />
                  <path
                    fill="#34A853"
                    d="M406.8 242.3L340.7 201 12 404.7v10.3c0 6.1 5 11 11 11 2.5 0 5-.8 7.1-2.4l376.7-213.8c5.1-2.9 8.2-8.3 8.2-14.2 0-1.2-.1-2.3-.3-3.3z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M406.8 269.7l-66.1 41.3-328.7-206.3v10.3l328.7 206.3z"
                  />
                  <path
                    fill="#EA4335"
                    d="M406.8 242.3c-.3-1-.8-1.9-1.4-2.7L28.7 25.8C26.6 24.2 24.1 23.4 21.6 23.4c-6 0-11 4.9-11 11v10.3l330.1 206.3z"
                  />
                </svg>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[12px] font-semibold mb-1">
                    GET IT ON
                  </span>
                  <span className="text-[18px] font-semibold -mt-1">
                    Google Play
                  </span>
                </div>
              </button>

              {/* App Store Button */}
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-all shadow-md">
                <FaApple size={30} />
                <div className="flex flex-col items-start leading-tight">
                   <span className="text-[12px] font-semibold mb-1">
                    Download on the
                  </span>
                  <span className="text-[18px] font-semibold -mt-1">App Store</span>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-[40px] md:mt-0 z-10 flex justify-center relative">
            <img
              src={greenMobileImg}
              alt="App on Phone"
              className="w-[500px] md:w-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCareBody;
