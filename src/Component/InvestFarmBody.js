import React, { useState } from "react";
import investmentImage from "../images/blueSitMan.png"; // Replace with your image path
import { useNavigate } from "react-router-dom";
import investorImage from "../images/investor.png";
import icon1 from "../images/Money.png"; // Icons used for benefits
import icon2 from "../images/Farms.png";
import icon3 from "../images/Chart.png";
import icon4 from "../images/Chart Line.png";
import { IoIosArrowDown } from "react-icons/io";

const InvestFarmBody = () => {
  const navigate = useNavigate();

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
  const phoneLocalPattern = /^\d{9}$/;
  const normalizePhone = (value) => (value || "").replace(/\D/g, "");

  const onNameInput = (e) => {
    e.target.value = (e.target.value || "").replace(/[^A-Za-z ]/g, "");
  };

  const onPhoneInput = (e) => {
    e.target.value = normalizePhone(e.target.value);
  };

  const handleInquireSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const fullName = form.fullName?.value?.trim() || "";
    const company = form.company?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const phone = form.phone?.value?.trim() || "";
    const address = form.address?.value?.trim() || "";
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
    if (!phoneLocalPattern.test(phoneDigits)) {
      showAlert("error", "Please enter a valid phone number (9 digits after +94). Example: 777777777");
      return;
    }

    if (!message) {
      showAlert("error", "Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);
    const lastName = rest.join(" ") || "-";

    const mergedMessage = address ? `${message}\n\nAddress: ${address}` : message;
    const fullPhone = `+94${phoneDigits}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: fullPhone,
          company,
          message: mergedMessage,
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

  const handleSignUp = () => {
    navigate("/signup"); // Directs to the Sign Up page
  };

  return (
    <div>
      {/* Alert */}
      {alert.show && (
        <div className="fixed top-4 right-4 z-50">
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

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full lg:min-h-screen p-[10px] lg:p-[20px] bg-[#f9f9f9]">
        {/* Left Section */}
        <div className="flex-1 max-w-full lg:max-w-[50%] p-[20px] text-center lg:text-left">
          <h1 className="text-[#007bff] text-[1.3rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-bold mb-[18px] sm:mb-[6px] md:mb-[4px] leading-tight whitespace-normal pt-[80px] lg:pt-0">
            GoViCapital Web
          </h1>
          <h2 className="text-black text-[0.95rem] sm:text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-bold mb-[20px] leading-snug">
            Maximizing Returns: Smart Investments in Sustainable Agriculture
          </h2>
          <p className="text-[0.9rem] lg:text-[1.1rem] leading-[1.6] text-[#555] mb-[30px]">
            GoViCapital is a user-friendly web app designed to help investors
            buy stocks in Polygon Agro and track their progress. The platform
            provides real-time updates on investment performance, enabling
            investors to monitor growth, and make informed decisions. With a
            focus on transparency and smart management, GoViCapital ensures
            investors can easily manage their agricultural portfolios and expect
            strong returns from their investments in the farming sector.
          </p>
          <button
            className="bg-[#182D36] text-white border-none py-[8px] px-[20px] rounded-full text-[1.2rem] font-inter font-[400] cursor-pointer transition-all duration-300 hover:bg-[#233d48] hover:scale-105"
            onClick={handleSignUp}
          >
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
        <div className="flex-1 hidden md:flex w-full justify-center items-center">
          <img
            src={investorImage}
            alt="Investor"
            className="w-full max-w-[250px] min-[480px]:max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* Right Section - Benefits Cards */}
        <div className="flex-[2] w-full flex flex-col justify-center lg:items-start items-center">
          <h2 className="text-[1.5rem] min-[480px]:text-[1.8rem] lg:text-[2rem] font-bold mb-[20px] text-[#333]">
            Benefits to Investors
          </h2>
          <div className="flex flex-col gap-[20px] w-full">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#007DFE] border-r-[#007DFE] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={icon1}
                alt="Investment"
                className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0"
              />
              <div className="flex-1">
                <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">
                  Direct investment in agriculture opportunities
                </h3>
                <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                  This platform allows both small and large investors to
                  directly invest in agricultural ventures, providing an
                  accessible way to participate in the agricultural sector.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#007DFE] border-r-[#007DFE] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={icon2}
                alt="Validated Farms"
                className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0"
              />
              <div className="flex-1">
                <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">
                  Access to validated farms and farmers
                </h3>
                <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                  Investors gain access to a curated list of verified farms and
                  reliable farmers, ensuring that their investments are made in
                  legitimate and trustworthy agricultural operations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#007DFE] border-r-[#007DFE] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={icon3}
                alt="Monitoring"
                className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0"
              />
              <div className="flex-1">
                <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">
                  Continuous farm monitoring and updates
                </h3>
                <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                  The system ensures ongoing monitoring of farm activities and
                  provides real-time updates, keeping investors informed about
                  the progress of their investments.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center bg-white border border-[#ddd] border-b-[6px] border-r-[6px] border-b-[#007DFE] border-r-[#007DFE] rounded-[25px] p-[25px] shadow-sm text-center md:text-left">
              <img
                src={icon4}
                alt="Predictive Returns"
                className="w-[40px] h-[40px] min-[480px]:w-[50px] min-[480px]:h-[50px] mb-[10px] lg:mb-0 lg:mr-[15px] mx-auto lg:mx-0"
              />
              <div className="flex-1">
                <h3 className="text-[1rem] lg:text-[1.2rem] text-[#333] mb-[10px]">
                  Predictive investment value and returns
                </h3>
                <p className="text-[0.8rem] lg:text-[0.9rem] text-[#555] leading-[1.5]">
                  Based on the crop life cycle, the system predicts the
                  potential value of investments, allowing investors to make
                  informed decisions and get appropriate returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquire Form Section */}
      <div
        className="w-full py-[60px] px-[20px] flex justify-center"
        style={{ backgroundColor: "#D6E6FF" }}
      >
        <div className="w-full max-w-[600px]">
          <div className="bg-white rounded-[30px] p-[40px] shadow-lg">
            <h2 className="text-[1.8rem] font-bold text-[#292929] mb-[10px]">
              Inquire
            </h2>
            <p className="text-[1rem] text-[#3B3B3B] mb-[30px] font-regular">
              You can reach us at anytime
            </p>

            <form className="flex flex-col gap-[20px]" onSubmit={handleInquireSubmit}>
              {/* Full Name */}
              <input
                name="fullName"
                type="text"
                placeholder="Your Full Name"
                required
                pattern="[A-Za-z ]+"
                title="Letters and spaces only"
                onInput={onNameInput}
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all"
                style={{
                  borderColor: "#C7C7C7",
                  color: "#2F2F2F",
                }}
              />

              {/* Company Name */}
              <input
                name="company"
                type="text"
                placeholder="Your Company Name"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all"
                style={{
                  borderColor: "#C7C7C7",
                  color: "#2F2F2F",
                }}
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                inputMode="email"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all"
                style={{
                  borderColor: "#C7C7C7",
                  color: "#2F2F2F",
                }}
              />

              {/* Phone Number with Country Code */}
              <div
                className="flex items-center gap-[15px] border-[1px] rounded-full px-[20px] py-[10px]"
                style={{ borderColor: "#C7C7C7" }}
              >
                <div
                  className="flex items-center gap-[5px]"
                  style={{ color: "#292929" }}
                >
                  <span className="font-inter font-[400] text-[1rem]">+94</span>
                  <span className="text-[#292929]">
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="w-[1px] h-[24px] bg-[#C7C7C7]"></div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number (9 digits)"
                  inputMode="numeric"
                  onInput={onPhoneInput}
                  minLength={9}
                  maxLength={9}
                  className="flex-1 focus:outline-none bg-transparent"
                  style={{
                    color: "#2F2F2F",
                    fontSize: "1rem",
                  }}
                />
              </div>

              {/* Address (Optional) */}
              <input
                name="address"
                type="text"
                placeholder="Your Address (Optional)"
                className="w-full px-[20px] py-[12px] border-[1px] rounded-full focus:outline-none focus:border-[#007DFE] transition-all"
                style={{
                  borderColor: "#C7C7C7",
                  color: "#2F2F2F",
                }}
              />

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows="5"
                  required
                  maxLength="1000"
                  className="w-full px-[20px] py-[12px] border-[1px] rounded-[20px] focus:outline-none focus:border-[#007DFE] transition-all resize-none"
                  style={{
                    borderColor: "#C7C7C7",
                    color: "#2F2F2F",
                  }}
                ></textarea>
              </div>

              {/* Submit Button */}
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

              {/* Terms and Privacy */}
              <p className="text-center font-regular text-[0.85rem] text-[#7B7B7B]">
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

export default InvestFarmBody;
