import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import Solutions from '../Components/Solutions'
import Products from '../Components/Products'
import EmailContact from '../Components/EmailContact'
import PrivacyComponents from '../Components/PrivacyComponents'
import Terms from '../Components/Terms'
import AboutSection from '../Components/AboutSection'
import AboutPage from '../Components/AboutPage'



const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/contact' element={<EmailContact />} />
        <Route path='/privacy' element={<PrivacyComponents/>} />
        <Route path='/Terms' element={<Terms/>} />
        <Route path='*' element={<LandingPage />} />
    </Routes>
    </>
  )
}

export default MainRouter