import React from "react";
import rightImage from "../images/GrowingPlant.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#2a2a2a] md:h-[80vh] items-center py-10 md:py-0 gap-8 md:gap-12">
      
      {/* Left Side — Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-white px-10 md:px-16 ">
        <h1 className="text-[1.8rem] md:text-[2.8rem] font-bold leading-tight mb-5">
          Empowering the Future of<br />Agriculture in Sri Lanka
        </h1>
        <p className="text-[0.9rem] md:text-[1rem] leading-relaxed text-[#cccccc]">
          Transform and elevate the farmers, and agripreneurs of Sri Lanka
          across all levels to use and adapt future-ready Agri-Fin-Tech
          platform to attain sustainable growth and maximise wealth for all
          stakeholders…
        </p>
      </div>

      {/* Right Side — Rounded Image Aligned to Bottom */}
      <div className="w-full md:w-1/2 flex justify-end items-end h-full">
        <img
          src={rightImage}
          alt="Agriculture Growth"
          className="w-full h-auto md:h-[70vh] object-cover rounded-tl-[100px]"
        />
      </div>

    </section>
  );
};

export default HeroSection;