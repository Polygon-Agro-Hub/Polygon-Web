import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#a8dbad] min-h-screen flex items-center justify-center p-[40px]">
      <div className="bg-transparent p-[20px] max-w-[800px] w-full">
        <h2 className="text-[24px] font-bold mb-[10px]">Contact Us</h2>
        <p className="text-[#444] mb-[20px]">
          Email, Call or Complete the form to learn how Agro World can help you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] text-[16px] text-[#333] before:content-['•'] before:text-[20px] before:text-black">
              <div className="contact-icon"></div>
              <span>info@agroworld.lk</span>
            </div>
            <div className="flex items-center gap-[10px] text-[16px] text-[#333] before:content-['•'] before:text-[20px] before:text-black">
              <div className="contact-icon"></div>
              <span>+94 770111999</span>
            </div>
            <div className="flex items-center gap-[10px] text-[16px] text-[#333] before:content-['•'] before:text-[20px] before:text-black">
              <div className="contact-icon"></div>
              <span>
                No. 14, Sir Baron Jayathilake Mawatha, Colombo 01, Western 00100, LK
              </span>
            </div>
            <button className="mt-[15px] py-[10px] px-[15px] bg-black text-white border-none rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-[#333]">Contact</button>
          </div>

          {/* Right Side - Support & Feedback */}
          <div>
            <h3 className="font-bold text-[18px] mt-[10px]">Customer Support</h3>
            <p className="text-[#444] text-[14px]">
              Our support team is available around the clock to address any concerns
              or queries you may have.
            </p>

            <h3 className="font-bold text-[18px] mt-[10px]">Feedback and Suggestions</h3>
            <p className="text-[#444] text-[14px]">
              We value your feedback and are continuously working to improve Agro
              World. Your input is crucial in shaping the ratings of Agro World.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
