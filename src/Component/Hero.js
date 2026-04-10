import React from "react";
import rightImage from "../images/GrowingPlant.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#2a2a2a] md:h-[80vh] items-center py-10 md:py-0 gap-6 md:gap-12 pt-[100px] md:pt-0">

      {/* Left Side — Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white px-6 md:px-16 text-center md:text-left">
        <h1 className="text-[1.8rem] md:text-[2.8rem] font-bold leading-tight mb-4 md:mb-6 w-full">
          Empowering the Future of Agriculture in Sri Lanka
        </h1>
        <p className="text-[0.95rem] md:text-[1rem] leading-relaxed md:leading-loose text-[#cccccc] w-full">
          Transform and elevate the farmers, and agripreneurs of Sri Lanka
          across all levels to use and adapt future-ready Agri-Fin-Tech
          platform to attain sustainable growth and maximise wealth for all
          stakeholders…
        </p>
      </div>

      {/* Right Side — Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex w-full md:w-1/2 justify-end items-end h-full">
        <img
          src={rightImage}
          alt="Agriculture Growth"
          className="w-full h-auto md:h-[68vh] object-cover rounded-tl-[100px]"
        />
      </div>

    </section>
  );
};

export default HeroSection;