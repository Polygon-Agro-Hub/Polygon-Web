import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer';
import ContactUsBody from '../Component/ContactUsBody';
import LocationSection from '../Component/LocationSection';
import FAQ from '../Component/FAQ';

const ContactUs = () => {
  return (
    <div>
      <Header/>
      <ContactUsBody/>
      <LocationSection/>

      {/* Divider line */}
      <div className="w-full bg-[#f9f9f9]">
        <div className="max-w-[1400px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
          <div className="h-[1px] w-full bg-[#E5E5E5]" />
        </div>
      </div>

      <FAQ/>
      <Footer/>
    </div>
    
  )
}

export default ContactUs;