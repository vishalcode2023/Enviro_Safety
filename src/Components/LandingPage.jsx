import React from 'react'
import Navbar from '../Routers/Navbar'
import HeroSection from './HeroSection'
import SolutionsOverview from './SolutionsData'
import AboutSection from './AboutSection'
import TestimonialsCarousel from './Testimonials'
import ContactFormSection from './ContactFormSection'
import Footer from './Footer'
import AdditionalPage from './AdditionalPage'






const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SolutionsOverview/>
      <AboutSection/>
      <TestimonialsCarousel/>
      <ContactFormSection/>
      <AdditionalPage/>
      <Footer/>
    </div>
  )
}

export default LandingPage