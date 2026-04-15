import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "success", message: "" });

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert((prev) => ({ ...prev, show: false })), 5000);
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const namePattern = /^[A-Za-z ]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const normalizePhone = (value) => (value || "").replace(/\D/g, "");

  const onNameInput = (e) => {
    // allow only letters and spaces
    e.target.value = (e.target.value || "").replace(/[^A-Za-z ]/g, "");
  };

  const onPhoneInput = (e) => {
    // keep digits only
    e.target.value = normalizePhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const fullName = form.fullName?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const phone = form.phone?.value?.trim() || "";
    const company = form.company?.value?.trim() || "";
    const message = form.message?.value?.trim() || "";

    // validation
    if (!fullName || !namePattern.test(fullName)) {
      showAlert("error", "Please enter a valid name (letters only).");
      return;
    }

    if (!emailPattern.test(email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    const phoneDigits = normalizePhone(phone);
    if (phoneDigits && (phoneDigits.length < 9 || phoneDigits.length > 15)) {
      showAlert("error", "Please enter a valid phone number.");
      return;
    }

    if (!message) {
      showAlert("error", "Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);
    const lastName = rest.join(" ") || "-";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: phoneDigits,
          company,
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.success) {
        showAlert("success", "Message sent successfully! We will get back to you soon.");
        form.reset();
      } else {
        showAlert("error", data?.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      showAlert("error", "An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-start justify-center px-[20px] sm:px-[40px] lg:px-[80px] py-[90px]"
      style={{ backgroundColor: "#F4006433" }}
    >
      {/* Alert */}
      {alert.show && (
        <div className="fixed bottom-6 right-4 z-50">
          <div
            className={`relative flex items-start gap-3 p-4 rounded-xl shadow-xl min-w-[280px] max-w-[360px] border ${
              alert.type === "success"
                ? "bg-green-50 border-green-200 text-green-900"
                : "bg-red-50 border-red-200 text-red-900"
            }`}
          >
            <div className="flex-1">
              <p className="font-semibold mb-1">
                {alert.type === "success" ? "Success" : "Error"}
              </p>
              <p className="text-sm leading-relaxed">{alert.message}</p>
            </div>
            <button
              type="button"
              onClick={closeAlert}
              className="text-sm underline whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      )}

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

            <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
              <input
                name="fullName"
                type="text"
                placeholder="Your Full Name"
                required
                pattern="[A-Za-z ]+"
                title="Letters and spaces only"
                onInput={onNameInput}
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all placeholder:text-[#969696]"
                style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                inputMode="email"
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
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  inputMode="numeric"
                  onInput={onPhoneInput}
                  minLength={9}
                  maxLength={15}
                  className="flex-1 focus:outline-none bg-transparent placeholder:text-[#969696]"
                  style={{ color: "#2F2F2F", fontSize: "1rem" }}
                />
              </div>

              <input
                name="company"
                type="text"
                placeholder="Company / Address (Optional)"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all placeholder:text-[#969696]"
                style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
              />

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={6}
                  required
                  maxLength={1000}
                  className="w-full px-[20px] py-[14px] border-[1px] rounded-[20px] focus:outline-none focus:border-[#007DFE] transition-all resize-none placeholder:text-[#969696]"
                  style={{ borderColor: "#C7C7C7", color: "#2F2F2F" }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-[12px] rounded-full text-white font-inter font-[500] text-[1.1rem] transition-all hover:opacity-90 ${
                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
                style={{ backgroundColor: "#2F2F2F" }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              <p className="text-center font-regular text-[0.85rem] text-[#7B7B7B] mt-[6px]">
                By contacting us, you agree to our{" "}
                <a href="/terms" className="font-semibold text-[#3B3B3B] hover:underline">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="/privacy" className="font-semibold text-[#3B3B3B] hover:underline">
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
