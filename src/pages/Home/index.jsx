import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import Layout from '../../layout';
import HeroSection from './sections/Hero';
import BrandSection from './sections/Brand';
import CallToAction from './sections/CallToAction';
import ServicesSection from './sections/Services';
import ProjectSection from './sections/Projects';

const Home = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormVisible(true);
    }, 3000); // Show form after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeForm = (e) => {
    if (e.target.className.includes('form-popup-bg') || e.target.id === 'btnCloseForm') {
      setFormVisible(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      toast.success(data.message || 'Form submitted successfully!'); // Use toast here
    } catch (error) {
      toast.error('Submission failed. Please try again.'); // Use toast for errors
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <ToastContainer /> {/* Add ToastContainer here */}
      <HeroSection />
      <BrandSection />
      <ServicesSection />
      <ProjectSection />

      {/* Popup Form */}
      <div
        className={`form-popup-bg ${formVisible ? 'is-visible' : ''}`}
        onClick={closeForm}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          opacity: formVisible ? 1 : 0,
          visibility: formVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s, visibility 0s 0.3s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
        }}
      >
        <div
          className="form-container"
          style={{
            backgroundColor: '#060911',
            borderRadius: '8px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '75%',
            maxWidth: '500px',
            padding: '40px',
            color: '#fff',
            position: 'relative',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <button
            id="btnCloseForm"
            className="close-button"
            style={{
              background: 'none',
              color: 'white',
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          <h1 style={{ marginBottom: '20px', fontWeight: '750', fontSize: '40px' }} className="text-white">
            Get a Free Quote
          </h1>
          <p style={{ marginBottom: '20px', fontSize: '16px' }} className="text-white font-semibold py-3 text-md">
            Fill out the form below and we’ll be in touch to discuss your project.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="name" // Add name attribute
                className="form-control"
                style={{
                  backgroundColor: '#041229',
                  color: '#fff',
                  border: 'none',
                  borderBottom: '2px solid #718096',
                  width: '100%',
                  borderRadius: '0',
                  fontSize: '16px',
                  outline: 'none',
                  padding: '5px 0',
                  transition: 'border-color 0.3s ease-in-out',
                }}
                placeholder="Your Name"
                required // Add required attribute
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px', marginTop: '30px' }}>
              <input
                type="email"
                name="email" // Add name attribute
                className="form-control"
                style={{
                  backgroundColor: '#041229',
                  color: '#fff',
                  border: 'none',
                  borderBottom: '2px solid #718096',
                  width: '100%',
                  borderRadius: '0',
                  fontSize: '16px',
                  outline: 'none',
                  padding: '5px 0',
                  transition: 'border-color 0.3s ease-in-out',
                }}
                placeholder="Your Email Address"
                required // Add required attribute
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px', marginTop: '30px' }}>
              <input
                type="tel"
                name="phone" // Add name attribute
                className="form-control"
                style={{
                  backgroundColor: '#041229',
                  color: '#fff',
                  border: 'none',
                  borderBottom: '2px solid #718096',
                  width: '100%',
                  borderRadius: '0',
                  fontSize: '16px',
                  outline: 'none',
                  padding: '5px 0',
                  transition: 'border-color 0.3s ease-in-out',
                }}
                placeholder="Your Phone Number"
                required // Add required attribute
              />
            </div>
            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isHovered ? '#060911' : '#ffa500',
                color: isHovered ? '#ffa500' : '#060911',
                padding: '10px 20px',
                border: isHovered ? '2px solid #f9a825' : 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '30px',
                transition: 'background-color 0.3s, color 0.3s, border 0.3s',
              }}
              className="font-semibold w-full"
            >
              Submit
            </button>
            <div className="py-8 text-left text-gray-700 text-sm">
              Disclaimer: By providing a telephone number and submitting this form, you are consenting to be contacted by SMS text message. Message &amp; data rates may apply. You can reply STOP to opt-out of further messaging.
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

  