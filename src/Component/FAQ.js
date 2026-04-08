import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What makes Agro World different from others?",
      answer: "Agro World offers innovative solutions tailored for modern agriculture needs.",
    },
    {
      question: "How secure are our IT-related products?",
      answer: "Our IT products are protected with state-of-the-art security protocols and encryption.",
    },
    {
      question: "How can I be a part of the Agro World journey?",
      answer: "You can join our programs by registering on our website and participating in our initiatives.",
    },
    {
      question: "What are the impacts of using Agro World’s solutions?",
      answer: "Our solutions improve productivity, reduce costs, and enhance sustainability for farmers and businesses.",
    },
    {
      question: "How can I contact Agro World for support?",
      answer: "You can contact us via email at info@agroworld.lk or call us at +94 770111999.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-[40px] bg-[#f9f9f9] w-full">
      <div className="flex-1 max-w-full md:max-w-[40%] md:mr-[20px] mb-[20px] md:mb-0">
        <h2 className="text-[1.8rem] font-bold mb-[10px] text-[#333]">FAQ</h2>
        <p className="text-[1rem] leading-[1.6] text-[#555] mb-[20px]">
          Do you have any questions for us? We will answer all your questions.
        </p>
      </div>

      <div className="flex-[2] w-full">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`bg-white border border-[#ddd] rounded-[8px] mb-[10px] overflow-hidden transition-all duration-300 ${openIndex === index ? "shadow-md" : ""}`}
          >
            <div
              className="p-[15px] px-[20px] flex justify-between items-center text-[1rem] font-bold text-[#333] cursor-pointer transition-colors duration-300 hover:bg-[#f0f0f0]"
              onClick={() => toggleDropdown(index)}
            >
              {faq.question}
              <span className="text-[1.2rem] text-[#555] transition-transform duration-300">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-[15px] px-[20px] text-[0.9rem] leading-[1.6] text-[#333] bg-[#e8f5e9] border border-dashed border-[#90caf9] rounded-[8px] mx-[20px] mb-[10px] shadow-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
