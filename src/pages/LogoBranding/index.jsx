import React, { useState, useEffect, useRef } from "react";
import HeroService from "../../components/heroService";
import heroImg from "../../assets/banner-gd/logo.png";
import Layout from "../../layout";
import FQA from "../../components/FAQLogo/index.jsx";
import DescriptionService from "../../components/descriptionService";
import PricingService from "../../components/pricingService";
import OfferService from "../../components/offerService";
import DesignGuide from "./sections/DesignGuide";
import SampleGallery from "../../components/toggleSwitch/sampleGallery";
import DetailsSection from "./sections/Details";
import ConnectForm from "../../components/connectForm";
import OrderForm from "../../components/OrderForm";
import logo1 from '../../assets/logo-gallery/logo1.png';
import logo2 from '../../assets/logo-gallery/logo2.png';
import logo3 from '../../assets/logo-gallery/logo3.jfif';
import logo4 from '../../assets/logo-gallery/1.png';
import logo5 from '../../assets/logo-gallery/2.png';
import logo6 from '../../assets/logo-gallery/3.png';
import logo7 from '../../assets/logo-gallery/4.png';
import logo8 from '../../assets/logo-gallery/5.png';
import logo9 from '../../assets/logo-gallery/6.png';
import logo10 from '../../assets/logo-gallery/7.png';
import logo11 from '../../assets/logo-gallery/8.png';
import logo12 from '../../assets/logo-gallery/9.png';

const LogoBranding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const modalRef = useRef(null);

  const pricingPlans = {
    logo: [
      {
        title: 'LOGO BASIC',
        price: '35',
        features: [
          '3 Unique Logo Concepts',
          'By 1 Designer',
          '3 Revisions',
          'Free Color Options',
          '2 to 3 Business Days Rotation',
          '100% Ownership',
          'File Formats (.PNG, .JPG, .PDF)',
          'Get Initial Concepts within 24 hours',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'LOGO BASIC', price: '35' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'LOGO STARTUP',
        price: '75',
        features: [
          '6 Unique Logo Concepts',
          'By 2 Designers',
          '5 Revisions',
          'Free Color Options',
          'Free Icon',
          '2 to 3 Business Days Rotation',
          'File Formats (.AI, .PSD, .EPS, .PNG, .JPG, .PDF, .TIFF)',
          'Get Initial Concepts within 24 hours',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'LOGO STARTUP', price: '75' });
          setIsModalOpen(true);
        },
      },
      {
        title: 'LOGO PROFESSIONAL',
        price: '125',
        features: [
          '9 Unique Logo Concepts',
          'By 4 Designers',
          'Unlimited Revisions',
          'Free Color Options',
          'Free Icon Design',
          'Stationery Design (Business Card, Letterhead, Envelope)',
          '2 to 3 Business Days Rotation',
          'File Formats (.AI, .EPS, .PNG, .JPG, .PDF)',
          'Get Initial Concepts within 24 hours',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'LOGO PROFESSIONAL', price: '125' });
          setIsModalOpen(true);
        },      },
      {
        title: 'LOGO BUSINESS',
        price: '199',
        features: [
          'Unlimited Logo Design Idea(s)',
          'By 6 Designer(s)',
          'Free Icon Design',
          'Unlimited Revisions',
          '24 Hours TAT',
          'Stationery Design (Business Card, Letterhead, Envelope)',
          'Free Electronic Letterhead',
          'Free Invoice Design',
          '2 Sided Flyer (OR) Bi-Fold Brochure Design',
          'File Formats (.PNG, .JPG, .PDF)',
          'Get Initial Concepts within 24 hours',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'LOGO BUSINESS', price: '199' });
          setIsModalOpen(true);
        },      },
      {
        title: 'LOGO PREMIMUM ILLUSTRATIVE',
        price: '299',
        features: [
          '3 Hand-drawn Custom Illustrative Design Ideas',
          'By 4 Creative Artists',
          '24 Hours TAT',
          'Unlimited Revisions',
          'Stationery Design (Business Card, Letterhead, Envelope)',
          'File Formats (.AI, .PSD, .EPS, .PNG, .JPG, .PDF, .TIFF)',
          'Get Initial Concepts within 24 hours',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'LOGO PREMIUM ILLUSTARTIVE', price: '299' });
          setIsModalOpen(true);
        },      },
      {
        title: 'LOGO ENTERPRISE',
        price: '499',
        features: [
          'Unlimited Logo Design Idea(s)',
          'By 7 Award-Winning Designer(s)',
          'Free Icon Design',
          'Unlimited Revisions',
          '24 Hours TAT',
          'Stationery Design (Business Card, Letterhead, Envelope)',
          'Free Electronic Letterhead',
          'Free Invoice Design',
          '2 Sided Flyer (OR) Bi-Fold Brochure Design',
          '4 Pages Website',
          'Social Media Size Images',
          'Social Media Pages Design (i.e. Facebook, Twitter, LinkedIn, Pinterest, Instagaram, Google+) (Any 3)',
          'T-Shirt Design, Signage Design, Packaging Design (Any 2)',
          'File Formats (.AI, .EPS, .PNG, .JPG, .PDF)',
          'Get Initial Concepts within 24 hours',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Money Back Guarantee'
        ],
        buttonText: 'Order Now',
        onButtonClick: () => {
          setSelectedPlan({ title: 'LOGO ENTERPRISE', price: '499' });
          setIsModalOpen(true);
        },      },
    ],
    Graphics: [
      {
        title: 'LOGO SPECIAL',
        price: '59.00',
        features: [
          '4 Original Logo Concepts',
          '2 Dedicated Logo Designers',
          '4 Revisions',
          'Grey Scale Format',
          'Free Icon Design',
          'Formats: JPEG Only',
          '24 - 48 Hours Turn Around Time',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => handleOrderClick(),
      },
      {
        title: 'LOGO PLUS',
        price: '199.00',
        features: [
          '8 Original Logo Concepts',
          '3 Dedicated Logo Designers',
          '8 Revisions',
          'Business Card Design',
          'Formats: PNG, JPEG, PDF',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => handleOrderClick(),
      },
      {
        title: 'LOGO PLATINUM',
        price: '399.00',
        features: [
          '12 Original Logo Concepts',
          '4 Dedicated Logo Designers',
          'Unlimited Revisions',
          'Business Card & Letterhead Design',
          'Grey Scale & Color Formats',
          'Formats: PNG, JPEG, PDF, AI',
          '48 Hours Turn Around Time',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => handleOrderClick(),
      },
      {
        title: 'LOGO BOSS',
        price: '599.00',
        features: [
          '16 Original Logo Concepts',
          '5 Dedicated Logo Designers',
          'Unlimited Revisions',
          'Complete Stationery Design',
          'Grey Scale & Color Formats',
          'Formats: PNG, JPEG, PDF, AI',
          '3D Mockup Included',
          '24 Hours Turn Around Time',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => handleOrderClick(),
      },
      {
        title: 'LOGO INFINITE',
        price: '1259.00',
        features: [
          'Unlimited Original Logo Concepts',
          '6 Dedicated Logo Designers',
          'Unlimited Revisions',
          'Complete Branding Package',
          'Business Card & Letterhead Design',
          '3D Mockup',
          'Formats: PNG, JPEG, PDF, AI, SVG',
          '24 - 48 Hours Turn Around Time',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => handleOrderClick(),
      },
      {
        title: 'LOGO COMBO',
        price: '1499.00',
        features: [
          'Unlimited Original Logo Concepts',
          '7 Dedicated Logo Designers',
          'Unlimited Revisions',
          'Complete Branding & Stationery Package',
          'Social Media Kit',
          '3D Mockup',
          'Formats: PNG, JPEG, PDF, AI, SVG',
          '24 Hours Turn Around Time',
        ],
        buttonText: 'Order Now',
        onButtonClick: () => handleOrderClick(),
      },
    ],
    Stationary: [
      {
        title: "BRANDING BASIC",
        price: "299.00",
        features: [
          "5 Original Logo Concepts",
          "1 Business Card Design",
          "1 Letterhead Design",
          "1 Envelope Design",
          "Formats: PNG, JPEG, PDF",
        ],
        buttonText: "Order Now",
        onButtonClick: () => handleOrderClick(),
      },
      {
        title: "BRANDING PREMIUM",
        price: "599.00",
        features: [
          "10 Original Logo Concepts",
          "2 Business Card Design",
          "2 Letterhead Design",
          "2 Envelope Design",
          "Formats: PNG, JPEG, PDF",
        ],
        buttonText: "Order Now",
        onButtonClick: () => handleOrderClick(),
      },
    ],
  };

  const galleryData = {
    logos: [
      { id: 1, src: logo1, alt: 'Logo 1' },
      { id: 2, src: logo2, alt: 'Logo 2' },
      { id: 3, src: logo3, alt: 'Logo 3' },
      { id: 4, src: logo4, alt: 'Logo 4' },
      { id: 5, src: logo5, alt: 'Logo 5' },
      { id: 6, src: logo6, alt: 'Logo 6' },
  
    ],
    stationary: [
      { id: 7, src: logo2, alt: 'Stationery 1' },
      { id: 8, src: logo10, alt: 'Stationery 2' },
      { id: 9, src: logo3, alt: 'Stationery 3' },
      { id: 10, src: logo7, alt: 'Stationery 4' },
      { id: 11, src: logo8, alt: 'Stationery 5' },
      { id: 12, src: logo9, alt: 'Stationery 6' },
    ],
    broucher: [
      { id: 13, src: logo6, alt: 'Brochure 1' },
      { id: 14, src: logo3, alt: 'Brochure 2' },
      { id: 15, src: logo10, alt: 'Brochure 3' },
      { id: 16, src: logo9, alt: 'Brochure 1' },
      { id: 17, src: logo12, alt: 'Brochure 2' },
      { id: 18, src: logo11, alt: 'Brochure 3' },
    ],
  };

  const OfferData = [
    {
      title: "Logo Design",
      features: ["Unlimited Concepts", "Unlimited Revisions", "4 Dedicated Logo Designers", "Turnaround 48-72 hrs"],
      price: 1249,
      isDiscounted: true,
      originalPrice: 4200,
      button1Text: "Order Now",
      button2Text: "Live Chat"
    },
    {
      title: "Stationery Design",
      features: ["Business Card Design", "Letterhead Design", "Envelope Design", "Brochure Design"],
      price: 1249,
      isDiscounted: true,
      originalPrice: 4200,
      button1Text: "Order Now",
      button2Text: "Live Chat"
    },
    {
      title: "Website",
      features: ["1 Custom Design Concept", "1 Blog Theme Design", "Unlimited Pages", "Unlimited Revisions", "1 Year FREE Hosting"],
      price: 1249,
      isDiscounted: true,
      originalPrice: 4200,
      button1Text: "Order Now",
      button2Text: "Live Chat"
    },
    {
      title: "Marketing Collateral",
      features: ["Any 3 of Your Choice", "(Facebook, LinkedIn, Twitter, YouTube)"],
      price: 1249,
      isDiscounted: true,
      originalPrice: 4200,
      button1Text: "Order Now",
      button2Text: "Live Chat"
    }
  ];

  const content = {
    title: "Transforming Design Theory into a Powerful Brand Identity",
    description: "Welcome to AKC Link Tech Digitizing your full-service design agency specializing in digitalbranding. With extensive experience in custom logo design, stationery, brochures, banners,and more, we cater to businesses across diverse industries. Our creative solutions empowerbrands to redefine their identity and achieve strategic branding goals. Our mission is to bring your brand to life through tailored solutions that enhance yourmarket presence. We offer fast, affordable, and hassle-free services, focusing on identifyingyour target audience to create compelling logo designs. Let us strengthen your brand’soverall outlook and ensure your vision is reflected in every design element.",
    subDescription: "We have a team of creative designers and skilled developers who are experienced in delivering the best web solutions.",
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (plan) => {
    setSelectedPlan(plan); // Pass selected plan to the modal if needed
    setIsModalOpen(true);
  };

  const handleOrderClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
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
      <HeroService
        heading="Custom Logo Design Services That Create a Strong Impression"
        description="We create a visual identity that matters..."
        primaryButtonText="Custom Logo Design From $35"
        secondaryButtonText="Contact us"
        primaryButtonLink="/logo-branding"
        secondaryButtonLink="/contact-us"
        imageUrl={heroImg}
      />
      <DescriptionService
        title={content.title}
        description={content.description}
        subDescription={content.subDescription}
      />
      <FQA />
      <SampleGallery galleryData={galleryData} />
      <PricingService
        plans={pricingPlans}
        heading="Crafting Perfect Logo Packages for Corporations Globally"
        description="Our team of experts focus on client and customer satisfaction..."
      />
      <DesignGuide />
      <ConnectForm />
      {isModalOpen && (
        <div className="modal" ref={modalRef}>
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

export default LogoBranding;
