import React,{useEffect} from "react";
import Layout from "../../layout";

//ContentSection images
import HeroSection from "../../components/EcomHero";
import FeaturesSection from "../../components/EcomFeature";
import ServicesSection from "../../components/EcomServices";
import CtaBox from "../../components/EcomCta";
import CounterSection from "../../components/EcomCounter";
import SuccessStories from "../../components/EcomStories";
import Success from "../../components/EcomSuccess";
import TestimonialSlider from "../../components/EcomTestimonials";
import SimpleSlider from "../../components/EcomSlider";
import FAQ from "../../components/EcomFaq";


const EcomExperts = () => {

  useEffect(() => {
    // Scroll to top on component load
    window.scrollTo(9, 9);
  }, []);

  return (
    <Layout>
      <HeroSection/>
      <FeaturesSection/>
      <ServicesSection/>
      <CtaBox/>
      <div className="py-32">
        <CounterSection/>
        </div>
      <SuccessStories/>
      <SimpleSlider/>
      <Success/>
      <FAQ/>
      <TestimonialSlider/>
      
    </Layout>
  );
};

export default EcomExperts;
