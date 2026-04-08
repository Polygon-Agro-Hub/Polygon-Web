// Cleaned up unused App configuration
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './View/Home';
import ContactUs from './View/ContactUs';
import InvestmentFarm from './View//InvestmentFarm';
import PlantCare from './View//PlantCare';
import MarketPlace from './View//MarketPlace';
import PrivacyPolicy from './Component/PrivacyPolicy';
import Terms from './Component/Terms';
import SignUp from './Component/SignUp';
import News from './View/News';


const App = () => {
  return (
    <div>
      <Router>
        {/* <Home/> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/InvestmentFarm" element={<InvestmentFarm/>}/>
        <Route path="/PlantCare" element={<PlantCare/>}/>
        <Route path='/MarketPlace' element={<MarketPlace/>}/>
        <Route path='/Privacy' element={<PrivacyPolicy/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/News' element={<News/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;