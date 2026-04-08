import React from 'react';
import image1 from '../images/Stabble.jpg';
import image2 from '../images/Planned.jpg';
import image3 from '../images/Farmer.jpg';
import image4 from '../images/Free.jpg';
import icon1 from '../images/tag.png';
import icon2 from '../images/vas.png';
import icon3 from '../images/heart.png';
import icon4 from '../images/done.png';

const Opportunities = () => {
  return (
    <div className="p-[20px] bg-[#f9f9f9]">
      {/* <h2 className="mb-[20px] text-center text-[1.8rem] font-bold text-[#333]">Opportunities for Farmers</h2> */}
      <div className="flex flex-wrap gap-[20px] justify-center">
        {/* Card 1 */}
        <div className="bg-white rounded-[12px] shadow-sm overflow-visible text-center max-w-[300px] flex-auto w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] relative transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md">
          <div className="relative h-[180px]">
            <img src={image1} alt="Stable Great Price" className="w-full h-full object-cover rounded-t-[12px]" />
            <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md overflow-hidden z-10">
              <img src={icon1} alt="Icon" className="w-[60%] h-auto object-contain" />
            </div>
          </div>
          <div className="pt-[40px] px-[20px] pb-[20px]">
            <h3 className="text-[1.2rem] text-[#333] mb-[10px] font-bold">Stable Great Price</h3>
            <ul className="list-none p-0 m-0">
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Increases Farmer Income</li>
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Increases Retailer Net Profit</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[12px] shadow-sm overflow-visible text-center max-w-[300px] flex-auto w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] relative transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md">
          <div className="relative h-[180px]">
            <img src={image2} alt="Planned Cultivation" className="w-full h-full object-cover rounded-t-[12px]" />
            <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md overflow-hidden z-10">
              <img src={icon2} alt="Icon" className="w-[60%] h-auto object-contain" />
            </div>
          </div>
          <div className="pt-[40px] px-[20px] pb-[20px]">
            <h3 className="text-[1.2rem] text-[#333] mb-[10px] font-bold">Planned Cultivation</h3>
            <ul className="list-none p-0 m-0">
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Demand & supply management</li>
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Agro ecological based crop recommendation</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[12px] shadow-sm overflow-visible text-center max-w-[300px] flex-auto w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] relative transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md">
          <div className="relative h-[180px]">
            <img src={image3} alt="Farmer Pension Scheme" className="w-full h-full object-cover rounded-t-[12px]" />
            <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md overflow-hidden z-10">
              <img src={icon3} alt="Icon" className="w-[60%] h-auto object-contain" />
            </div>
          </div>
          <div className="pt-[40px] px-[20px] pb-[20px]">
            <h3 className="text-[1.2rem] text-[#333] mb-[10px] font-bold">Farmer Pension Scheme</h3>
            <ul className="list-none p-0 m-0">
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Monthly Pension</li>
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Age: 18-59 years old</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[12px] shadow-sm overflow-visible text-center max-w-[300px] flex-auto w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] relative transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md">
          <div className="relative h-[180px]">
            <img src={image4} alt="Free Crop Insurance" className="w-full h-full object-cover rounded-t-[12px]" />
            <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md overflow-hidden z-10">
              <img src={icon4} alt="Icon" className="w-[60%] h-auto object-contain" />
            </div>
          </div>
          <div className="pt-[40px] px-[20px] pb-[20px]">
            <h3 className="text-[1.2rem] text-[#333] mb-[10px] font-bold">Free Crop Insurance</h3>
            <ul className="list-none p-0 m-0">
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Covers Crop Losses</li>
              <li className="text-[0.9rem] text-[#555] mb-[5px]">Reasonable Cover Situations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
