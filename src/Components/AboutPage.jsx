import React from 'react'
import Navbar from '../Routers/Navbar'
import AboutSection from './AboutSection'
import AdditionalPage from './AdditionalPage'
import Footer from './Footer'

const AboutPage = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='py-20'>
            <AboutSection/>
        </div>
        <AdditionalPage/>
        <Footer/>
    </div>
  )
}

export default AboutPage