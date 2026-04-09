import React from "react";

const LocationSection = () => {
  return (
    <section className="w-full bg-[#f9f9f9] px-[20px] sm:px-[40px] lg:px-[80px] py-[60px]">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-[30px] lg:gap-[50px] items-center">
          {/* Map */}
          <div className="w-full overflow-hidden rounded-[24px] bg-white shadow-sm">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.099578121774!2d79.85082761477746!3d6.934996194984437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593301225c4b%3A0xaaa750c8fb533a34!2sSir%20Baron%20Jayathilake%20Mawatha%2C%20Colombo%2001!5e0!3m2!1sen!2slk!4v1679658198505!5m2!1sen!2slk"
              className="w-full h-[260px] sm:h-[340px] lg:h-[420px] border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Content */}
          <div className="w-full px-[6px] sm:px-0">
            <p className="text-[1rem] font-medium text-[#292929] mb-[10px] text-center lg:text-left">
              Our Location
            </p>
            <h2 className="text-[1.8rem] sm:text-[2.4rem] font-bold text-[#292929] leading-tight mb-[24px] text-center lg:text-left">
              Connecting Near and Far
            </h2>

            <div className="mt-[15px] text-center lg:text-left">
              <h3 className="text-[1rem] font-bold text-[#292929] mb-[10px]">
                Headquarters
              </h3>
              <p className="text-[#3B3B3B] leading-[1.9] max-w-[520px] mx-auto lg:mx-0">
                No. 14, Sir Baron Jayathilake Mawatha, Colombo 01,
                <br />
                Western 00100, LK
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
