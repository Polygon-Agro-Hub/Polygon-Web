import React from "react";
import farmerImage from "../images/FarmerP.png"; // Replace with actual image path
import appImage from "../images/APP_PC.png"; // Single app screen image
import cropIcon from "../images/Access.png";
import weatherIcon from "../images/Weather.png";
import supportIcon from "../images/Finance.png";
import marketplaceIcon from "../images/MarAccess.png";

const PlantCareBody = () => {
  return (
    <div className="bg-[#f9f9f9] overflow-x-hidden font-sans">
      {/* Section 1: Intro Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center p-[40px] px-[20px] gap-[20px] bg-white text-center md:text-left w-full">
        {/* Left Side Content */}
        <div className="flex-1 w-full md:max-w-[50%] md:pl-[100px]">
          <h1 className="text-[2rem] text-[#1F4E3D] mb-[10px]">Plant Care Mobile App</h1>
          <h2 className="text-[1.5rem] mb-[15px] text-[#2F2F2F]">
            Empowering Farmers & Supporting Using Smart Technology
          </h2>
          <p className="text-[1rem] text-[#2F2F2F] leading-[1.6] text-center md:text-justify">
            Plant Care is a powerful mobile app designed to simplify and enhance
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
        <div className="flex-1 w-full md:max-w-[50%] flex justify-center">
          <img src={appImage} alt="App Screen" className="w-full max-w-[300px] h-auto" />
        </div>
      </div>

      {/* Section 2: Benefits Section */}
      <div className="flex flex-col md:flex-row items-center gap-[30px] p-[40px] px-[20px] bg-[#f9f9f9] text-center md:text-left w-full">
        {/* Left Side Farmer Image */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={farmerImage}
            alt="Farmer Illustration"
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Right Side Benefit Cards */}
        <div className="flex-[2] w-full">
          <h2 className="text-[1rem] mb-[20px] text-[#333] pl-0 md:pl-[50px] text-center md:text-left">Why Plant Care</h2>
          <div className="flex flex-col gap-[20px]">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={cropIcon} alt="Crop Calendars" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Access Crop Calendars</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Crop calendars incorporate scientific methods and best
                  practices to guide farmers through cultivation, ensuring
                  optimal growth and yield for every crop.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={weatherIcon} alt="Weather Forecast" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Get Weather Forecast</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Our weather forecasts provide accurate, timely data to help
                  farmers make informed, weather-aware decisions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={supportIcon} alt="Financial Support" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Financial Support</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Farmers get access to financial support through the app to
                  fund their cultivation needs.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img
                src={marketplaceIcon}
                alt="Marketplace Access"
                className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]"
              />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Marketplace Access</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Farmers can sell their harvest through AgroWorld, accessing
                  collection centers easily with the Plant Care QR code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCareBody;
