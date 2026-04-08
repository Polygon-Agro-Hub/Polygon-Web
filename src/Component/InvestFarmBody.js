import React from "react";
import investmentImage from "../images/BlueCart.png"; // Replace with your image path
import { useNavigate } from "react-router-dom";
import investorImage from "../images/investor.png";
import icon1 from "../images/Money.png"; // Icons used for benefits
import icon2 from "../images/Farms.png";
import icon3 from "../images/Chart.png";
import icon4 from "../images/Chart Line.png";

const InvestFarmBody = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); // Directs to the Sign Up page
  };

  return (
    <div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full lg:min-h-screen p-[10px] lg:p-[20px] bg-[#f9f9f9]">
        {/* Left Section */}
        <div className="flex-1 max-w-full lg:max-w-[50%] p-[20px] text-center lg:text-left">
            <h1 className="text-[#007bff] text-[1.5rem] min-[480px]:text-[1.8rem] lg:text-[2.5rem] font-bold mb-[15px]">InvestmentFarm Web</h1>
            <h2 className="text-black text-[1rem] min-[480px]:text-[1.2rem] lg:text-[2rem] font-bold mb-[20px]">
            Maximizing Returns: Smart Investments in Sustainable Agriculture
            </h2>
            <p className="text-[0.9rem] lg:text-[1.1rem] leading-[1.6] text-[#555] mb-[30px]">
            InvestorFarm is a user-friendly web app designed to help investors buy
            stocks in Agro World and track their progress. The platform provides
            real-time updates on investment performance, enabling investors to
            monitor growth, and make informed decisions. With a focus on
            transparency and smart management, InvestorFarm ensures investors can
            easily manage their agricultural portfolios and expect strong returns
            from their investments in the farming sector.
            </p>
            <button className="bg-[#003366] hover:bg-[#0056b3] text-white border-none py-[8px] px-[14px] min-[480px]:px-[16px] lg:py-[12px] lg:px-[24px] rounded-[5px] text-[0.8rem] min-[480px]:text-[0.9rem] lg:text-[1rem] cursor-pointer transition-all duration-300 hover:scale-105" onClick={handleSignUp}>
            Sign up Today!
            </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 max-w-full lg:max-w-[50%] flex justify-center items-center p-[20px]">
            <img
            src={investmentImage}
            alt="Investment Growth"
            className="w-full h-auto object-contain"
            />
        </div>
        </div>
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full py-[40px] px-[20px] gap-[30px] lg:gap-[20px] bg-[#f9f9f9]">
            {/* Left Section - Image */}
      <div className="flex-1 w-full flex justify-center items-center">
        <img src={investorImage} alt="Investor" className="w-full max-w-[250px] min-[480px]:max-w-[400px] h-auto object-contain" />
      </div>

      {/* Right Section - Benefits Cards */}
      <div className="flex-[2] w-full flex flex-col justify-center lg:items-start items-center">
        <h2 className="text-[1.5rem] min-[480px]:text-[1.8rem] lg:text-[2rem] font-bold mb-[20px] text-[#333]">Benefits to Investors</h2>
        <div className="flex flex-col gap-[20px] w-full">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm transition-transform duration-300 hover:-translate-y-[5px]">
            <img src={icon1} alt="Investment" className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0" />
            <div className="flex-1">
              <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">Direct investment in agriculture opportunities</h3>
              <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                This platform allows both small and large investors to directly
                invest in agricultural ventures, providing an accessible way to
                participate in the agricultural sector.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm transition-transform duration-300 hover:-translate-y-[5px]">
            <img src={icon2} alt="Validated Farms" className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0" />
            <div className="flex-1">
              <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">Access to validated farms and farmers</h3>
              <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                Investors gain access to a curated list of verified farms and
                reliable farmers, ensuring that their investments are made in
                legitimate and trustworthy agricultural operations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm transition-transform duration-300 hover:-translate-y-[5px]">
            <img src={icon3} alt="Monitoring" className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0" />
            <div className="flex-1">
              <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">Continuous farm monitoring and updates</h3>
              <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                The system ensures ongoing monitoring of farm activities and
                provides real-time updates, keeping investors informed about the
                progress of their investments.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm transition-transform duration-300 hover:-translate-y-[5px]">
            <img src={icon4} alt="Predictive Returns" className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0" />
            <div className="flex-1">
              <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">Predictive investment value and returns</h3>
              <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                Based on the crop life cycle, the system predicts the potential
                value of investments, allowing investors to make informed
                decisions and get appropriate returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default InvestFarmBody;