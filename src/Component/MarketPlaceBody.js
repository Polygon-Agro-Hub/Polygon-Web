import React from "react";
import marketImage from "../images/MPLady.png"; // Image path for laptop illustration
import tabletImage from "../images/MPTab.png"; // Image path for tablet illustration
import icon1 from "../images/Wholesale.png"; // Icon for wholesale
import icon2 from "../images/Bundles.png"; // Icon for bundles
import icon3 from "../images/Delivery.png"; // Icon for delivery
import icon4 from "../images/RepeatOrders.png"; // Icon for repeat orders
import { useNavigate } from "react-router-dom";

const MarketPlaceBody = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); // Navigates to Sign Up page
  };

  return (
    <div className="bg-[#f9f9f9] overflow-x-hidden w-full font-sans">
      {/* Section 1: Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-[20px] p-[40px] px-[20px] bg-white text-center md:text-left w-full">
        <div className="flex-1 w-full md:max-w-[50%] p-[20px]">
          <h1 className="text-[#1e9e45] text-[2rem] mb-[10px]">Market Place</h1>
          <h2 className="text-[1.5rem] mb-[15px] text-[#333]">
            Your Online Marketplace for Quality Produce
          </h2>
          <p className="text-[1rem] text-[#555] leading-[1.6] mb-[20px]">
            The Marketplace is a versatile online platform offering both wholesale and retail options for fresh vegetables, fruits, mushrooms, grains, and more. Customers can choose from pre-packaged bundles or select custom items to suit their needs. Whether buying for personal use or business, the platform offers flexible pickup or scheduled delivery options, allowing repeat orders over a set duration for added convenience. It’s the perfect place to access quality produce, tailored to any scale of demand.
          </p>
          <button className="bg-[#1e9e45] hover:bg-[#166e2d] text-white py-[10px] px-[20px] border-none rounded-[5px] cursor-pointer transition-all duration-300" onClick={handleSignUp}>
            Sign up Today!
          </button>
        </div>
        <div className="flex-1 w-full md:max-w-[50%] flex justify-center">
          <img src={marketImage} alt="Market Place Laptop" className="w-full max-w-[400px]" />
        </div>
      </div>

      {/* Section 2: Benefits Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] p-[40px] px-[20px] text-center md:text-left w-full">
        <div className="flex-1 w-full flex justify-center">
          <img src={tabletImage} alt="Tablet View" className="w-full max-w-[300px]" />
        </div>
        <div className="flex-[2] w-full">
          <h2 className="text-[1.8rem] mb-[20px] text-[#333]">Benefits to Buyers</h2>
          <div className="flex flex-col gap-[20px]">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={icon1} alt="Wholesale Options" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Wholesale and retail options available</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  The platform offers both wholesale and retail choices for fresh produce, including vegetables, fruits, mushrooms, and grains.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={icon2} alt="Custom Bundles" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Pre-packaged bundles or custom selections</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Customers can choose from convenient pre-packaged bundles or customize their order to meet specific needs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={icon3} alt="Flexible Delivery" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Flexible pickup or scheduled delivery</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Options for flexible pickup or scheduled delivery ensure convenience for both personal and business customers.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] rounded-[10px] p-[15px] shadow-sm text-center md:text-left">
              <img src={icon4} alt="Repeat Orders" className="w-[50px] h-[50px] mb-[10px] md:mb-0 md:mr-[15px]" />
              <div>
                <h3 className="text-[1.2rem] mb-[5px] text-[#333]">Repeat orders for added convenience</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.5]">
                  Customers can set up repeat orders, ensuring a consistent supply of fresh produce over a set duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceBody;
