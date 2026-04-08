import React from "react";
import Arrow from '../images/Arrow.png';

const CardComponent = ({ image, topic, texts, arrowLink }) => {
  return (
    <div className="bg-white rounded-[12px] shadow-sm p-[20px] text-center max-w-[300px] my-[15px] mx-auto transition-all duration-300 flex flex-col items-center hover:-translate-y-[10px] hover:shadow-lg">
      <img src={image} alt="Card Image" className="w-[80px] h-auto mb-[15px] block self-center" />
      <h3 className="text-[1.2rem] font-bold text-[#333] mb-[10px]">{topic}</h3>
      <ul className="list-none p-0 text-[#666] text-[0.9rem] leading-[1.6] mb-[20px] text-center">
        {texts.map((text, index) => (
          <li key={index} className="mb-[8px]">{text}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-[10px]">
        <a href={arrowLink} target="_blank" rel="noopener noreferrer">
          <img
            src={Arrow} // Replace with your arrow mark image path
            alt="Arrow Mark"
            className="w-[30px] h-[30px] cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
