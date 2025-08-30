import React from 'react'
import ContactFormSection from './ContactFormSection'
import Navbar from '../Routers/Navbar'
import Footer from './Footer'
import AdditionalPage from './AdditionalPage'

const EmailContact = () => {
  return (
    <div>
        <Navbar/>
        <ContactFormSection/>
        <AdditionalPage/>
        <Footer/>
    </div>
  )
}

export default EmailContact