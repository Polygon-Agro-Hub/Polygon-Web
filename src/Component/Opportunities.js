import React from "react";
import image1 from "../images/Stabble.jpg";
import image2 from "../images/Planned.jpg";
import image3 from "../images/Farmer.jpg";
import image4 from "../images/Free.jpg";
import icon1 from "../images/tag.png";
import icon2 from "../images/vas.png";
import icon3 from "../images/heart.png";
import icon4 from "../images/done.png";
import PaddyVector from "../images/paddyvector.png";

const Opportunities = () => {
  return (
    <div className="relative py-[60px] px-[20px] overflow-hidden mt-5">
      {/* Paddy Vector - Top Left */}
      <img
        src={PaddyVector}
        alt=""
        className="absolute w-full pt-9 h-80 bg-[#e8f5e9] bg-cover bg-bottom bg-no-repeat"
      />

      {/* Cards */}
      <div>
        <div className="flex flex-wrap gap-[20px] justify-center relative z-10 mt-[100px]">
          {[
            {
              image: image1,
              icon: icon1,
              title: "Stable Great Price",
              points: [
                "Increases Farmer Income",
                "Increases Retailer Net Profit",
              ],
            },
            {
              image: image2,
              icon: icon2,
              title: "Planned Cultivation",
              points: [
                "Demand & supply management",
                "Agro ecological based crop recommendation",
              ],
            },
            {
              image: image3,
              icon: icon3,
              title: "Farmer Pension Scheme",
              points: ["Monthly Pension", "Age: 18-59 years old"],
            },
            {
              image: image4,
              icon: icon4,
              title: "Free Crop Insurance",
              points: ["Covers Crop Losses", "Reasonable Cover Situations"],
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] shadow-md overflow-visible text-center flex-1 min-w-[220px] max-w-[320px] relative transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-[220px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-t-[16px]"
                />
                {/* Icon circle overlapping bottom of image */}
                <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center shadow-md z-10">
                  <img src={card.icon} alt="icon" className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-[48px] px-[24px] pb-[28px]">
                <h3 className="text-[1.15rem] text-[#222] mb-[16px] font-bold">
                  {card.title}
                </h3>
                <ul className="list-none p-0 m-0 text-left">
                  {card.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-[0.9rem] text-[#555] mb-[10px] flex items-start gap-[8px]"
                    >
                      <span className="text-[#4a7c2f] font-bold mt-[1px]">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
