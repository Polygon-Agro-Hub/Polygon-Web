import React from "react";
import commonImage from "../images/Leave.png"; // Replace with the correct image path

const cardData = [
  "Digitally disrupting the agribusiness sector will improve the lives of grass-root level stakeholders up to 65%",
  "Connect technology with agriculture shall empower transforming 12% of the current stakeholders and attract youth into agribusiness by 15%",
  "Quality assurance & traceability will pave way to tap new international markets",
  "Transparency in price will enable fair-trade and eliminate monopoly",
  "Generate up to 8% employment through market-driven value-chain",
  "Pave way to attract more female driven agribusinesses across the value-chain",
  "Transform Sri Lankan agri-community with improved financial literacy and better decision making with regard to crop profitability, pest & diseases",
  "Be an enabler to attract investments into the agribusinesses in Sri Lanka",
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] max-w-[1200px] my-[20px] mx-auto p-[20px]">
      {cardData.map((text, index) => (
        <div key={index} className="bg-white border border-[#e0e0e0] rounded-[8px] shadow-sm p-[20px] text-center transition-transform duration-300 hover:-translate-y-[5px]">
          <img src={commonImage} alt="Icon" className="w-[40px] mb-[10px] mx-auto block" />
          <p className="text-[14px] text-[#333] leading-[1.5]">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
