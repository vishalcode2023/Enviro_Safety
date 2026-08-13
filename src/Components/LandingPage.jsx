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
import ProductVideo from "./ProductVideo";
import ClientReviewSection from "./ClientReviewSection";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <SolutionsOverview />
      <ShowcaseGrid />
      <ProductVideo />
      <TestimonialsSection />
      <AboutSection />
      <ContactFormSection />
      <AdditionalPage />

      {/* <ClientReviewSection/> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
