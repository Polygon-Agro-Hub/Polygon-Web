import React from "react";

const CardComponent = ({ image, topic, texts, arrowLink }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-md max-w-[450px] my-[15px] mx-auto transition-all duration-300 flex flex-col items-center hover:-translate-y-[10px] hover:shadow-xl overflow-hidden">
      
      {/* Image Section with light gray background */}
      <div className="w-full bg-[#FFFFFF] flex justify-center items-center py-[30px] px-[20px]">
        <img src={image} alt={topic} className="w-full max-h-[220px] object-contain block" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center w-full px-[25px] py-[25px]">
        
        {/* Title */}
        <h3 className="text-[1.25rem] font-bold text-[#111] mb-[18px] text-center">{topic}</h3>

        {/* Bullet List - left aligned */}
        <ul className="list-disc pl-[20px] text-[#444] text-[0.95rem] leading-[1.8] mb-[25px] w-full text-left">
          {texts.map((text, index) => (
            <li key={index} className="mb-[8px]">{text}</li>
          ))}
        </ul>

        {/* Arrow Button */}
        <a
          href={arrowLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] bg-[#4a4a4a] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#222] hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </a>

      </div>
    </div>
  );
};

export default CardComponent;