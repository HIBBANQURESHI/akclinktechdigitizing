import React, { useEffect } from "react";
import MobileHeroService from "../../components/mobileHeroService";
import heroImg from "../../assets/img/mobile.webp";
import Layout from "../../layout";
import SampleGallery from "../../components/toggleSwitch/sampleGallery";
import MobileAppSlider from '../../pages/Home/sections/mobileAppSlider'
import MobileCardsSection from '../../pages/Home/sections/mobileCardsSection'

//gallery images
import logo1 from '../../assets/logo-gallery/mocup1.jpg';
import logo2 from '../../assets/logo-gallery/mocup2.jpg';
import logo3 from '../../assets/logo-gallery/mocup3.jpg';
import logo4 from '../../assets/logo-gallery/mocup4.jpg';
import logo5 from '../../assets/logo-gallery/mocup5.jpg';
import logo6 from '../../assets/logo-gallery/mocup6.jpg';
import Testimonials from "../../components/testimonials";
import ConsultancyForm from "../../components/consultancyForm";

//testmonial images
import testmonial1 from "../../assets/img/examples/testimonial-6-2.jpg"
import testmonial2 from "../../assets/img/examples/testimonial-6-3.jpg"

const galleryData = {
  logos: [
    { id: 1, src: logo1, alt: 'Logo 1' },
    { id: 2, src: logo3, alt: 'Logo 2' },
    { id: 3, src: logo2, alt: 'Logo 3' },
    { id: 4, src: logo4, alt: 'Logo 4' },
    { id: 5, src: logo5, alt: 'Logo 5' },
    { id: 6, src: logo6, alt: 'Logo 6' },
  ],
};

const testimonials = [
  {
    id: 1,
    name: "Ethan Williams",
    feedback:
      "This company exceeded my expectations. The design work is impressive, and the functionality is flawless!",
    avatar: testmonial1
  },
  {
    id: 2,
    name: "Lucas Brown",
    feedback:
      "Absolutely incredible! The team collaborated with me on every detail, and I'm very satisfied with the final result.",
    avatar: testmonial2
  },
  {
    id: 3,
    name: "Daniel Jones",
    feedback:
      "The level of professionalism and attention to detail was outstanding. I highly recommend their services!",
    avatar: testmonial1
  },
];

const MobileApps = () => {

  useEffect(() => {
    // Scroll to top on component load
    window.scrollTo(9, 9);
  }, []);

  return (
    <Layout>


<MobileHeroService
        heading="Where Ideas"
        heading2="Becomes REALITY"
        description="Avail the opportunity to enhance customer experience with a valuable, organized, and functional app."
        primaryButtonText="Custom Website Design From $499"
        secondaryButtonText="Live Chat"
        primaryButtonLink="/web-design"
        secondaryButtonLink="/live-chat"
        imageUrl={heroImg}
      />
<MobileAppSlider/>

<MobileCardsSection/>
<ConsultancyForm/>
      <SampleGallery galleryData={galleryData}/>
      <Testimonials testimonialData ={testimonials}/>
      
      
    </Layout>
  );
};

export default MobileApps;
