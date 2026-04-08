import React from 'react';

const LocationSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-[20px] bg-[#f9f9f9] w-full">
      <div className="flex-1 w-full md:mr-[20px] mb-[20px] md:mb-0 overflow-hidden rounded-[10px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.099578121774!2d79.85082761477746!3d6.934996194984437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593301225c4b%3A0xaaa750c8fb533a34!2sSir%20Baron%20Jayathilake%20Mawatha%2C%20Colombo%2001!5e0!3m2!1sen!2slk!4v1679658198505!5m2!1sen!2slk"
          className="w-full h-[300px] rounded-[10px] border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex-1 w-full bg-white p-[20px] rounded-[10px] shadow-sm transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg hover:bg-[#f5f5f5]">
        <h3 className="text-[1.5rem] mb-[10px] text-[#333] relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:w-[50px] after:h-[3px] after:bg-[#4caf50] after:rounded-[2px] after:transition-all after:duration-300">
          Our Location
        </h3>
        <h4 className="text-[1.2rem] mb-[10px] text-[#555] mt-4">Connecting Near and Far</h4>
        <p className="text-[1rem] leading-[1.6] text-[#666] transition-colors duration-300 hover:text-[#4caf50] mb-[15px]">
          * Headquarters
          <br />
          No. 14, Sir Baron Jayathilake Mawatha,
          <br />
          Colombo 01, Western 00100, LK
        </p>
        <p className="text-[1rem] leading-[1.6] text-[#666] transition-colors duration-300 hover:text-[#4caf50]">
          * Corporate Office
          <br/>
          Forbes & Walkers Building 2,
          <br/>
          No.46/42
          <br/>
          Colombo 02.
        </p>
      </div>
    </div>
  );
};

export default LocationSection;
