import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import launch from '../images/Launching.png'

const News = () => {
  return (
    <div>
        <Header/>
        <img src={launch} alt='launch'/>
        {/* <NewsBody/> */}
        <Footer/>
    </div>
  )
}

export default News