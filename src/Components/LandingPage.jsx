import React from "react";
import Navbar from "../Routers/Navbar";
import HeroSection from "./HeroSection";
import SolutionsOverview from "./SolutionsData";
import AboutSection from "./AboutSection";
import ShowcaseGrid from "./ShowcaseGrid";
import ContactFormSection from "./ContactFormSection";
import Footer from "./Footer";
import AdditionalPage from "./AdditionalPage";
import TestimonialsSection from "./TestimonialsSection";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <SolutionsOverview />
      <ShowcaseGrid />
      <AboutSection />
      {/* <TestimonialsSection/> */}
      <ContactFormSection/>
      <AdditionalPage/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
