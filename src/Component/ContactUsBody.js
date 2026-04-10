import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen w-full flex items-start justify-center px-[20px] sm:px-[40px] lg:px-[80px] py-[90px]"
      style={{ backgroundColor: "#F4006433" }}
    >
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-y-[40px] lg:gap-y-[50px] lg:gap-x-[80px] items-start">
        {/* Left side */}
        <div className="pt-[10px] lg:pr-[10px] text-center lg:text-left">
          <h2 className="text-[1.8rem] sm:text-[2.1rem] lg:text-[2.4rem] font-bold text-[#292929] mb-[10px]">
            Contact Us
          </h2>
          <p className="text-[#3B3B3B] mb-[28px] lg:mb-[40px] max-w-[560px] leading-[1.7] mx-auto lg:mx-0">
            Email, Call or Complete the form to learn how Polygon Agro Holdings
            can help you.
          </p>

          <div className="flex flex-col gap-[16px] items-start lg:items-start max-w-[520px] mx-auto lg:mx-0">
            <div className="flex items-center gap-[16px] w-full">
              <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center bg-[rgb(244,0,100)] shrink-0">
                <FiMail className="text-[#ffffff]" size={18} />
              </div>
              <span className="text-[#292929] font-semibold break-words text-left">info@polygon.lk</span>
            </div>

            <div className="flex items-center gap-[16px] w-full">
              <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center bg-[rgb(244,0,100)] shrink-0">
                <FiPhone className="text-[#ffffff]" size={18} />
              </div>
              <span className="text-[#292929] font-semibold break-words text-left">+94 770111999</span>
            </div>

            <div className="flex items-start gap-[16px] w-full">
              <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center bg-[rgb(244,0,100)] shrink-0 mt-[2px]">
                <FiMapPin className="text-[#ffffff]" size={18} />
              </div>
              <span className="text-[#292929] font-semibold leading-[1.6] break-words text-left">
                No. 14, Sir Baron Jayathilake Mawatha, Colombo 01, Western 00100,
                LK
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px] sm:gap-[40px] mt-[45px] lg:mt-[80px] max-w-[680px] mx-auto lg:mx-0">
            <div>
              <h3 className="font-bold text-[#292929] mb-[10px]">
                Customer Support
              </h3>
              <p className="text-[#3B3B3B] leading-[1.9]">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#292929] mb-[10px]">
                Feedback and Suggestions
              </h3>
              <p className="text-[#3B3B3B] leading-[1.9]">
                We value your feedback and are continuously working to improve
                Polygon Agro Holdings. Your input is crucial in shaping the
                ratings of Polygon Agro Holdings.
              </p>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full lg:justify-self-end">
          <div className="bg-white rounded-[30px] p-[22px] sm:p-[32px] lg:p-[40px] shadow-2xl w-full max-w-[520px] mx-auto lg:mx-0">
            <h2 className="text-[1.6rem] sm:text-[1.8rem] font-bold text-[#292929] mb-[10px]">
              Get in Touch
            </h2>
            <p className="text-[0.95rem] sm:text-[1rem] text-[#3B3B3B] mb-[24px] sm:mb-[30px] font-regular">
              You can reach us at anytime
            </p>

            <form className="flex flex-col gap-[18px]">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all placeholder:text-[#969696]"
                style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all placeholder:text-[#969696]"
                style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
              />

              <div
                className="flex items-center gap-[15px] border-[1px] rounded-full px-[18px] py-[10px]"
                style={{ borderColor: "#C7C7C7" }}
              >
                <div className="flex items-center gap-[5px]">
                  <span className="font-inter font-[400] text-[1rem]" style={{ color: "#292929" }}>
                    +94
                  </span>
                  <span style={{ color: "#292929" }}>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="w-[1px] h-[24px] bg-[#C7C7C7]" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 focus:outline-none bg-transparent placeholder:text-[#969696]"
                  style={{ color: "#2F2F2F", fontSize: "1rem" }}
                />
              </div>

              <input
                type="text"
                placeholder="Your Address (Optional)"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all placeholder:text-[#969696]"
                style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
              />

              <div className="relative">
                <textarea
                  placeholder="How can we help?"
                  rows={6}
                  maxLength={100}
                  className="w-full px-[20px] py-[14px] border-[1px] rounded-[20px] focus:outline-none focus:border-[#007DFE] transition-all resize-none placeholder:text-[#969696]"
                  style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
                />
                <span className="absolute bottom-[20px] right-[20px] text-[#969696] text-[0.9rem]">
                  0/100
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-[12px] rounded-full text-white font-inter font-[500] text-[1.1rem] transition-all hover:opacity-90"
                style={{ backgroundColor: "#2F2F2F" }}
              >
                Submit
              </button>

              <p className="text-center font-regular text-[0.85rem] text-[#7B7B7B] mt-[6px]">
                By contacting us, you agree to our{" "}
                <a
                  href="/terms"
                  className="font-semibold text-[#3B3B3B] hover:underline"
                >
                  Terms of Services
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-[#3B3B3B] hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
