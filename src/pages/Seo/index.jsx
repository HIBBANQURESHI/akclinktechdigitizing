import React, { useState, useEffect} from "react";
import HeroService from "../../components/heroService";
import heroImg from "../../assets/img/seo.webp";
import Layout from "../../layout";
import DescriptionService from "../../components/descriptionService";
import PricingService from "../../components/pricingService";
import DetailsSection from "./sections/Details";
import Consultancy from "../Home/sections/Consultancy";
import ConsultancyForm from "../../components/consultancyForm";

//testmonial images
import testmonial1 from "../../assets/img/examples/testimonial-6-2.jpg"
import testmonial2 from "../../assets/img/examples/testimonial-6-3.jpg"
import Testimonials from "../../components/testimonials";

//contentSection image
import contentSectionImg from "../../assets/banner/seo/seo-content-01.webp";
import contentSectionImg2 from "../../assets/banner/seo/seo-content-02.png";
import Content from "../../components/content";

//case study image 
import caseStudyImg from "../../assets/banner/digital-seo-01.webp"
import ClientCaseStudy from "../../components/clientCaseStudy";
import SEOExpertise from "../../components/seoexpertise";
import SMMExpertise from "../../components/seoexpertise2";
import ClientCaseStudy2 from "../../components/clientcasestudy2";
import OrderForm from "../../components/OrderForm/index.jsx";
import { ToastContainer, toast } from 'react-toastify';


const Seo = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);



  const pricingPlans = {
  logo: [
    {
      title: 'SEO BASIC',
      price: '299.00',
      features: [
        '10 Keywords Optimization',
        '4 Keywords in top 10',
        'Search Engine Submissions',
        '2 Blogs Writing',
        '4 Blog Posting Links',
        '10 Blogs Social Bookmarking Links',
        '1 Press Release Writing',
        '2 Press Release Links',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => {
        setSelectedPlan({ title: 'SEO BASIC', price: '299.00' });
        setIsModalOpen(true);
      },
    },
    {
      title: 'SEO STANDARD',
      price: '499.00',
      features: [
        '25 Keywords Optimization',
        '10 Keywords in Top 10',
        'Search Engine Submissions',
        '6 Blogs Writing',
        '12 Blog Posting Links',
        '20 Blogs Social Bookmarking Links',
        '2 Press Release Writing',
        '4 Press Release Links',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => {
        setSelectedPlan({ title: 'SEO STANDARD', price: '499.00' });
        setIsModalOpen(true);
      },
    },
    {
      title: 'SEO PROFESSIONAL',
      price: '399.00',
      features: [
        '50 Keywords Optimization',
        '20 Keywords in Top 10',
        '14 Blogs Writing',
        '28 Blog Posting Links',
        '30 Blogs Social Bookmarking Links',
        '4 Press Release Writing',
        '8 Press Release Links',
        '4 Guest Blogging Links',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => {
        setSelectedPlan({ title: 'SEO PROFESSIONAL', price: '399.00' });
        setIsModalOpen(true);
      },
    },
    {
      title: 'SMM STARTUP',
      price: '599.00',
      features: [
        '2 Social Media Channels (Facebook / Instagram)',
        'Social media account setup',
        'Complete Account Management',
        '3 Posts per week (per network)',
        'Custom Editorial calendar (Review before publishing)',
        'Dedicated account manager',
        'Dedicated Budget For Paid Advertising',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => {
        setSelectedPlan({ title: 'SMM STARTUP', price: '599.00' });
        setIsModalOpen(true);
      },
    },
    {
      title: 'SMM BASIC',
      price: '1259.00',
      features: [
        '4 Social Media Channels (Facebook / Twitter / Pinterest / Instagram)',
        'Social media account setup',
        'Complete Account Management 3 Posts per week (per network)',
        'Custom Editorial calendar (Review before publishing)',
        'Call to Action Integration',
        'End of Term Report',
        'Dedicated Account Manager',
        'Dedicated Budget For Paid Advertising',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => {
        setSelectedPlan({ title: 'SMM BASIC', price: '1259.00' });
        setIsModalOpen(true);
      },
    },
    {
      title: 'SMM PLUS',
      price: '1499.00',
      features: [
        '6 Social Media Channels (Facebook / Twitter / Pinterest/ Instagram / Youtube / LinkedIn)',
        'Social media account setup',
        'Complete Account Management',
        '4 Posts per week (per network)',
        '1 GIF post per Month',
        'Custom Editorial calendar (Review before publishing)(Facebook)',
        'Call to Action Integration',
        '1 Stock Video Cover Banner',
        'Monthly Analytic Report',
        'Direct Access To Social Media Team',
        'Dedicated Budget For Paid Advertising',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => {
        setSelectedPlan({ title: 'SMM PLUS', price: '1499.00' });
        setIsModalOpen(true);
      },
    },
  ],
  branding: [
    {
      title: "BRANDING BASIC",
      price: "299.00",
      features: [
        "5 Branding Concepts",
        "Logo & Business Card",
        "Letterhead Design",
        "Social Media Kit",
        "Free Stationary Design",
        "5 Branding Concepts",
        "Logo & Business Card",
        "Letterhead Design",
        "Social Media Kit",
        "Free Stationary Design",
      ],
      buttonText: "Order Now",
      onButtonClick: () => alert("Order Branding Basic"),
    },
    {
      title: "BRANDING PRO",
      price: "499.00",
      features: [
        "10 Branding Concepts",
        "Complete Brand Package",
        "Social Media Kit",
        "Letterhead & Business Card",
        "Unlimited Revisions",
      ],
      buttonText: "Order Now",
      onButtonClick: () => alert("Order Branding Pro"),
    },
  ],
};

const content = {
  title: "Enhance Your Business With SEO and SMM",
  description:
    "Our aim with SEO and SMM strategies is to bring the maximum leads to your website and with relevant audiences increase the conversion rate over a period of time. Depending on our business industry and competitors, we strategize a roadmap especially for you. Alongside improving your business ranking, we also work to increase the credibility of your business. With us, you get promised ranking, exposure, and enhanced business credibility.",
  subDescription:
    "The Ranking of your business over the SERPs is one of the concerning factors that influence your digital business presence. With a combination of search engine optimization and search engine marketing strategies, We work with your business presence and ranking of the internet.",
};

const testimonials = [
  {
    id: 1,
    name: "Lily Thompson",
    feedback:
      "This company went above and beyond my expectations. The design work is outstanding, and the functionality flows perfectly!",
    avatar: testmonial1
  },
  {
    id: 2,
    name: "James Parker",
    feedback:
      "Absolutely amazing! The team collaborated with me on every detail, and I'm incredibly pleased with the final outcome.",
    avatar: testmonial2
  },
  {
    id: 3,
    name: "Michael Johnson",
    feedback:
      "The professionalism and attention to detail were outstanding. I highly recommend their services!",
    avatar: testmonial1
  },
];

const contentDescriptionData = [
  {
    title: 'SEO',
    subtitle: 'Search Engine Optimization',
    content:
      'Leverage organic and paid search strategies to boost your business visibility online. Our SEO services are designed to drive traffic, improve rankings, and convert leads by optimizing your website and content for search engines.',
    listItems: [
      'Tailored SEO Strategies',
      'On-Page & Off-Page Optimization',
      'Improved Search Rankings',
      'Conversion Rate Optimization',
      'Comprehensive Website Audits',
    ],
    buttonText: 'Request a Custom Quote',
    image: contentSectionImg,
  },  
  {
    title: 'SMM',
    subtitle: 'Social Media Marketing',
    content:
      'Boost your brand visibility and connect with your audience through customized social media marketing solutions. We create platform-specific strategies, engaging content, and effective community management to ensure your brand stays relevant and grows across all channels.',
    listItems: [
      'Social Media Strategy Development',
      'Targeted Ad Campaigns',
      'Influencer Partnerships',
      'Analytics & Reporting',
    ],
    buttonText: 'Request a Custom Quote',
    image: contentSectionImg2,
  },
];

const caseStudyData = {
  title: "Fliptainment",
  imageUrl: caseStudyImg,
  description:
    "AKCLinkTech proved to be a distinguished design agency. They helped us not just revamp our website but also achieve strong brand retention through their brilliant services and solutions.",
  stats: [
    { value: "1,500", label: "5 months sign ups" },
    { value: "35%", label: "Increase in total site traffic" },
    { value: "35%", label: "Increase in return visits by customers" },
  ],
};

const closeModal = () => {
  setIsModalOpen(false);
};

const openModal = (plan) => {
  setSelectedPlan(plan); // Pass selected plan to the modal if needed
  setIsModalOpen(true);
};

// Close modal when clicking outside of it
const handleClickOutside = (event) => {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
    closeModal();
  }
};

useEffect(() => {
  // Add event listener
  document.addEventListener('mousedown', handleClickOutside);
  
  // Cleanup event listener on component unmount
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

useEffect(() => {
  // Scroll to top on component load
  window.scrollTo(9, 9);
}, []);

  return (
    <Layout>
      <ToastContainer />
      <HeroService
        heading="Optimized Marketing to Elevate Your Brand Position."
        description="Market your business to appear the best on the search engines"
        primaryButtonText="Custom SEO and SMM From $499"
        secondaryButtonText="Contact"
        primaryButtonLink="/web-design"
        secondaryButtonLink="/contact-us"
        imageUrl={heroImg}
      />
      <DescriptionService
        title={content.title}
        description={content.description}
        subDescription={content.subDescription}
      />
      <Content sections={contentDescriptionData}/>

      <SEOExpertise/>

      <ClientCaseStudy {...caseStudyData}/>

      <SMMExpertise/>

      <ClientCaseStudy2 {...caseStudyData}/>

      <PricingService
        plans={pricingPlans}
        heading="Crafting Perfect Logo Packages for Corporations Globally"
        description="Our team of experts focus on client and customer satisfaction as the ultimate goal for our projects."
      />
      <DetailsSection/>
      {/* <FAQSection faqsData={faqsData}/> */}
      <Consultancy/>
      <Testimonials testimonialData ={testimonials}/>
      <ConsultancyForm/>

      {/* Modal for OrderForm */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <OrderForm plan={selectedPlan} title={selectedPlan.title} price={selectedPlan.price} />
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        .modal-content {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 1240px;
          height: auto;
          border-radius: '8px',
          position: relative;
          color: #FFD700; /* Keep yellow text */
          background-color: transparent; /* Remove form background color */
        }
        .close {
          position: absolute;
          top: 15px;
          right: 15px;
          color: #aaa;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }
        .close:hover,
        .close:focus {
          color: red;
        }
      `}</style>
      
    </Layout>
  );
};

export default Seo;
