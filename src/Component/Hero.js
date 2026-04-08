import React from 'react';
import leftImage from '../images/HandPlant.png'; 
import rightImage from '../images/GrowingPlant.jpg'; 

const HeroSection = () => {
    return (
      <section className="flex flex-col md:flex-row w-full md:w-screen h-auto md:h-[80vh] min-h-[500px] m-0 overflow-hidden">
        {/* Left Side with Background Image and Text */}
        <div className="w-full md:w-1/2 h-auto md:h-full relative bg-[#20402A] flex flex-col justify-center items-center overflow-hidden p-[20px] md:p-0">
          <img src={leftImage} alt="Background Design" className="hidden md:block absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0" />
          <div className="relative z-10 p-[10px] md:p-[20px] max-w-[90%] text-white text-center md:text-left">
            <h1 className="text-[1.6rem] min-[480px]:text-[1.8rem] md:text-[3rem] font-bold leading-tight mb-[20px]">Empowering the Future of<br/> Agriculture in Sri Lanka</h1>
            <p className="text-[0.85rem] min-[480px]:text-[0.9rem] md:text-[1.1rem] leading-relaxed text-[#e0e0e0]">
              Transform and elevate the farmers and agripreneurs of Sri Lanka to use a future-ready Agri-Fin-Tech platform for sustainable growth.
            </p>
          </div>
        </div>
  
        {/* Right Side with Image */}
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-center overflow-hidden p-[20px] md:p-0">
          <img src={rightImage} alt="Agriculture Growth" className="w-[80%] min-[480px]:w-[90%] md:w-full h-auto md:h-full max-h-[300px] md:max-h-none object-contain md:object-cover"/>
        </div>
      </section>
    );
};

export default HeroSection;
