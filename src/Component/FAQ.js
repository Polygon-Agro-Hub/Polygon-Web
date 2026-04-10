import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContact = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate("/contact");
  };

  const faqData = [
    {
      question: "What makes Polygon different from others?",
      answer:
        "Polygon Agro Holdings stands out by combining advanced agricultural technologies with tailored solutions to meet the specific needs of farmers and agribusinesses. Our focus is on sustainable practices, innovation, and empowering users with cutting-edge tools such as precision farming, AI-driven analytics, and smart irrigation systems.",
    },
    {
      question: "How Secure our IT related products?",
      answer:
        "We use industry best practices, access control, encryption, regular security reviews, and monitoring to keep our systems and user data protected.",
    },
    {
      question: "How can I be a part of Polygon journey?",
      answer:
        "You can join by registering on our platforms, partnering with our initiatives, and staying connected through our updates and programs.",
    },
    {
      question: "How Secure our IT related products?",
      answer:
        "We use industry best practices, access control, encryption, regular security reviews, and monitoring to keep our systems and user data protected.",
    },
    {
      question: "How can I be a part of Polygon journey?",
      answer:
        "You can join by registering on our platforms, partnering with our initiatives, and staying connected through our updates and programs.",
    },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] px-[20px] sm:px-[40px] lg:px-[80px] py-[50px]">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-y-[30px] lg:gap-x-[90px] items-start">
          {/* Left column */}
          <div className="text-center lg:text-left">
            <p className="text-[#292929] text-[0.90rem] tracking-[0.12em] uppercase mb-[14px]">
              FAQ
            </p>
            <h2 className="text-[2rem] sm:text-[2.4rem] font-bold text-[#292929] leading-tight mb-[18px]">
              Do you have any
              <br className="hidden lg:block" />
              questions for us?
            </h2>
            <p className="text-[#666] leading-[1.8] mb-[26px] max-w-[480px] mx-auto lg:mx-0">
              Is there any question you want to ask. We will answer all your
              question.
            </p>
            <button
              type="button"
              onClick={handleContact}
              className="bg-[#2F2F2F] text-white px-[28px] py-[10px] rounded-full text-[1rem] font-semibold transition-all hover:opacity-90"
            >
              Contact
            </button>
          </div>

          {/* Right column */}
          <div className="w-full">
            <div className="flex flex-col gap-[16px]">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-[#E5E5E5] pb-[16px]">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-[14px] text-left"
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#1E1E1E] font-semibold">
                        {faq.question}
                      </span>
                      <span
                        className="text-[#414141] text-[1.3rem] leading-none transition-transform"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        aria-hidden="true"
                      >
                        <IoIosArrowDown />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-[14px] bg-[#F5C5DA] rounded-[16px] p-[18px] sm:p-[22px] text-[#414141] leading-[1.9]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
