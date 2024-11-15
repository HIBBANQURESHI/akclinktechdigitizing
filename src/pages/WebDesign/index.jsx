import React, { useState, useEffect, useRef } from "react";
import HeroService from "../../components/heroService";
import heroImg from "../../assets/banner-gd/website.png";
import Layout from "../../layout";
import DescriptionService from "../../components/descriptionService";
import CallToAction from '../Home/sections/CallToAction';
import PricingService from "../../components/pricingService";
import ImageScrollOnHover from "../../components/toggleSwitch/ImageScrollOnHover.jsx";
import Consultancy from "../Home/sections/Consultancy";
import ConsultancyForm from "../../components/consultancyForm";
import OrderForm from "../../components/OrderForm/index.jsx";
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import Chatbot from "../../components/Chatbot.jsx";

const WebDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State for Chatbot
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
        title: 'WEBSITE BASIC',
        price: '399',
        features: [
          '2 Stock Images',
          '3 Page Website',
          '1 jQuery Slider Banner',
          'Contact/Query Form',
          'Complete W3C Certified HTML',
          '48 to 72 hours TAT',
          'Complete Deployment',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Money Back Guarantee'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE BASIC', price: '399' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'WEBSITE STARTUP',
        price: '799',
        features: [
          '5 Stock Photos',
          '5 Page Website',
          '3 Banner Design',
          '1 jQuery Slider Banner',
          'FREE Google Friendly Sitemap',
          'Complete W3C Certified HTML',
          '48 to 72 hours TAT',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Money Back Guarantee ',
          'Mobile Responsive will be Additional $200*',
          'CMS will be Additional $250*'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE STARTUP', price: '799' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'WEBSITE ECONOMY',
        price: '1,199',
        features: [
          '10 Unique Pages Website',
          'CMS / Admin Panel Support',
          '8 Stock images',
          '5 Banner Designs',
          '1 jQuery Slider Banner',
          'FREE Google Friendly Sitemap',
          'Complete W3C Certified HTML',
          '48 to 72 hours TAT',
          'Complete Deployment',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Money Back Guarantee ',
          'Mobile Responsive will be Additional $200*'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE ECONOMY', price: '1199' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'WEBSITE CUSTOM',
        price: '1,699',
        features: [
          'Upto 15 Unique Pages Website',
          'Conceptual and Dynamic Website',
          'Mobile Responsive',
          'Online Reservation/Appointment Tool (Optional)',
          'Online Payment Integration (Optional)',
          'Custom Forms',
          'Lead Capturing Forms (Optional)',
          'Striking Hover Effects',
          'Newsletter Subscription (Optional)',
          'Social Media Integration',
          'Search Engine Submission',
          '5 Stock Photos',
          '3 Unique Banner Design',
          '1 jQuery Slider Banner',
          'Complete W3C Certified HTML',
          '48 to 72 hours TAT',
          'Complete Deployment',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Money Back Guarantee *'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE CUSTOM', price: '1699' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'WEBSITE ELITE',
        price: '2,599',
        features: [
          '15 to 20 Pages Website',
          'Custom Made, Interactive, Dynamic & High End Design',
          'Custom WP (or) Custom PHP Development',
          '1 jQuery Slider Banner',
          'Up to 10 Custom Made Banner Designs',
          '10 Stock Images',
          'Unlimited Revisions',
          'Special Hoover Effects',
          'Content Management System (CMS)',
          'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
          'Online Payment Integration (Optional)',
          'Multi Lingual (Optional)',
          'Custom Dynamic Forms (Optional)',
          'Signup Area (For Newsletters, Offers etc.)',
          'Search Bar',
          'Live Feeds of Social Networks integration (Optional)',
          'Mobile Responsive',
          'FREE 5 Years Domain Name',
          'Free Google Friendly Sitemap',
          'Search Engine Submission',
          'Complete W3C Certified HTML',
          'Industry Specified Team of Expert Designers and Developers',
          'Complete Deployment',
          'Dedicated Accounts Manager',
          '100% Ownership',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Money Back Guarantee *'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE ELITE', price: '2599' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'CUSTOMIZED WEB PORTAL',
        price: '5,599',
        features: [
          'Complete Custom Design & Development',
          'Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical',
          'Portal, Enterprise Portal (Any One)',
          'Unique, User Friendly, Interactive, Dynamic, High End UI Design',
          'Unlimited Banner Designs',
          'Interactive Sliding Banners',
          'Special Hover Effects',
          'Unlimited Stock Images',
          'User Signup Area',
          'User Sign in Area',
          'Client/User Dashboard Area',
          'Custom Coding and Development',
          'Content Management System (Custom)',
          'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
          'Online Payment Integration (Optional)',
          'Multi Lingual (Optional)',
          'Custom Dynamic Forms (Optional)',
          'Shopping Cart Integration (Optional)',
          'Complete Database Creation',
          'Signup Automated Email Authentication',
          'Web Traffic Analytics Integration',
          '3rd Party API Integrations',
          'Signup Area (For Newsletters, Offers etc.)',
          'Search Bar for Easy Search',
          'Live Feeds of Social Networks integration (Optional)',
          'Search Engine Submission',
          'Module-wise Architecture',
          'Extensive Admin Panel',
          'Award Winning Team of Expert Designers and Developers',
          'Complete Deployment',
          'Complete Source Files and Codes',
          'Devoted & Enthusiastic Project Manager',
          '100% Ownership',
          '100% Unique & Custom Website Design and Development',
          '100% Approval Assurance',
          '30 Days Refund Warranty',
          '*NO MONTHLY OR ANY HIDDEN FEE*',
          'Professional Content/Copywriting - $1340 (Up to 20 Pages) - (Per Page is $97)',
          'Shopping Cart Integration - $250',
          'Additional Professional Email ID - $20 (Each)'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'CUSTOMIZED WEB PORTAL', price: '5599' });
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
        ],
        buttonText: "Order Now",
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE BASIC', price: '399' });
          setIsModalOpen(true);
        },
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
        onButtonClick: () => {
          setSelectedPlan({ title: 'WEBSITE BASIC', price: '399' });
          setIsModalOpen(true);
        },
      },
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
      {/* Other sections */}
      <HeroService
        heading="Professional Web Design Services"
        description="Get unique designs for your business website that effectively capture attention."
        primaryButtonText="Custom Web Design From $499"
        secondaryButtonText="Contact us"
        primaryButtonLink="/web-design"
        secondaryButtonLink="/contact-us"
        imageUrl={heroImg}
        onChatToggle={() => setIsChatbotOpen(prev => !prev)} // Toggle Chatbot
      />
      <DescriptionService
        title="Custom Web Design & Development Services In USA"
        description="Engage your audience with captivating website design and responsive development. Your
                     website is the gateway where customers learn about your business and assess your
                     credibility. At AKC Link Tech, we are a leading web design and development agency offering
                     comprehensive solutions to create effective and user-friendly web experiences. From design
                     to development, we ensure your website reflects your brand and drives meaningful
                     interactions."
        subDescription="We have a team of creative designers and developers ready to bring your vision to life."
      />
      <PricingService
        plans={pricingPlans}
        heading="Crafting Perfect Logo Packages for Corporations Globally"
        description="Our team of experts focus on client and customer satisfaction."
      />
      <ImageScrollOnHover />
      <ConsultancyForm />

      {/* Modal for OrderForm */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <OrderForm plan={selectedPlan} title={selectedPlan.title} price={selectedPlan.price} />
          </div>
        </div>
      )}
      {/* Chatbot Component */}
      {isChatbotOpen && <Chatbot />}

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

export default WebDesign;