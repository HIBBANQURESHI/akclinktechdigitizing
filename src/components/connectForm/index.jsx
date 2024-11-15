import React, { useState } from 'react';
import { FaFacebookF, FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ConnectForm = () => {

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3005/Connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message Sent Successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatusMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };



  return (
    <footer className="py-12 text-white bg-white">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        {/* Left Form Section */}
        <div className="w-full px-4 lg:w-1/2">
          <h2 className="mb-6 text-3xl text-black font-bold">Let's create something amazing together.</h2>
          <form className="space-y-4 py-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 text-black bg-white rounded-full outline-none border-2 border-orange-400"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full px-4 py-3 text-black bg-white rounded-full outline-none border-2 border-orange-400"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-black bg-white rounded-full outline-none border-2 border-orange-400"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 text-black bg-white outline-none rounded-xl border-2 border-orange-400"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 text-gray-900 transition-all duration-300 bg-yellow-500 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-orange-400 font-semibold transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
          {statusMessage && <p className="mt-4 text-black">{statusMessage}</p>}
        </div>

          {/* Right Social & Contact Section */}
      <div className="w-full px-4 mt-8 sm:px-6 lg:px-12 xl:px-48 lg:w-1/2 lg:mt-0">
        <div className="relative flex flex-col items-center justify-center p-4 space-y-4 bg-yellow-500 rounded-full w-[18em] h-[18em] sm:w-[22em] sm:h-[22em] md:w-[24em] md:h-[24em] lg:w-[30em] lg:h-[30em]">
          {/* "Bitten" effect on the right with slight diagonal rotation */}
          <div className="absolute inset-0 rounded-full" style={{backgroundColor:"#ffa200"}}>
            {/* Adjusting bites with responsive sizes */}
            <div className="absolute w-[4em] h-[4em] bg-white rounded-full right-[-0.5em] top-[3em] rotate-[15deg] sm:w-[6em] sm:h-[6em] md:w-[8em] md:h-[8em] md:right-[-2em] md:top-[6em]"></div>
            <div className="absolute w-[3em] h-[3em] bg-white rounded-full right-[-2em] top-[2em] rotate-[15deg] sm:w-[5em] sm:h-[5em] md:w-[6em] md:h-[6em] md:right-[-7em] md:top-[5em]"></div>
            <div className="absolute w-[2.5em] h-[2.5em] bg-white rounded-full right-[-0.5em] top-[0.5em] rotate-[15deg] sm:w-[4em] sm:h-[4em] md:w-[5em] md:h-[5em] md:right-[-2em] md:top-[1em]"></div>
            <div className="absolute w-[3em] h-[3em] bg-white rounded-full right-[-0.5em] top-[7em] rotate-[15deg] sm:w-[4em] sm:h-[4em] md:w-[5.5em] md:h-[5.5em] md:right-[-2em] md:top-[9em]"></div>
          </div>
      
          {/* Crumbs animation positioned outside the circle */}
          <div className="absolute left-[80%] top-[15%] animate-zoom sm:left-[90%] md:left-[110%] md:top-[25%]">
            <div className="w-3 h-3 bg-yellow-500 rounded-full sm:w-4 sm:h-4 md:w-8 md:h-8"></div>
          </div>
          <div className="absolute left-[75%] bottom-[30%] animate-zoom sm:left-[85%] md:left-[115%] md:bottom-[40%]">
            <div className="w-3 h-3 bg-yellow-500 rounded-full sm:w-4 sm:h-4 md:w-7 md:h-7"></div>
          </div>
          <div className="absolute left-[70%] bottom-[60%] animate-zoom sm:left-[80%] md:left-[96%] md:bottom-[75%]">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full sm:w-3 sm:h-3 md:w-6 md:h-6"></div>
          </div>
          <div className="absolute left-[80%] top-[5%] animate-zoom sm:left-[90%] md:left-[110%] md:top-[10%]">
            <div className="w-3 h-3 bg-yellow-500 rounded-full sm:w-4 sm:h-4 md:w-7 md:h-7"></div>
          </div>
          <div className="absolute left-[70%] top-[15%] animate-zoom sm:left-[80%] md:left-[95%] md:top-[30%]">
            <div className="w-4 h-4 bg-yellow-500 rounded-full sm:w-5 sm:h-5 md:w-9 md:h-9"></div>
          </div>
      
          {/* Social Media Links */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 z-10">
            <Link to="https://www.facebook.com/people/AKC-Link-Tech-Digitizing/61565175612368/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 text-white transition bg-black rounded-full hover:bg-white hover:text-black sm:w-10 sm:h-10 md:w-12 md:h-12">
              <FaFacebookF size={16} />
            </Link>
            <Link to="https://www.instagram.com/akc.linktechdigitizing/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 text-white transition bg-black rounded-full hover:bg-white hover:text-black sm:w-10 sm:h-10 md:w-12 md:h-12">
              <FaInstagram size={16} />
            </Link>
            <Link to="https://www.linkedin.com/company/akc-link-tech-digitizing/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 text-white transition bg-black rounded-full hover:bg-white hover:text-black sm:w-10 sm:h-10 md:w-12 md:h-12">
              <FaLinkedinIn size={16} />
            </Link>
            <Link to="https://www.akclinktech.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 text-white transition bg-black rounded-full hover:bg-white hover:text-black sm:w-10 sm:h-10 md:w-12 md:h-12">
              <FaGoogle size={16} />
            </Link>
          </div>
      
          {/* Contact Details */}
          <div className="mt-4 text-center z-10 sm:mt-6">
            <p className="text-sm text-black font-semibold sm:text-base md:text-lg">(832) 278-2818</p>
            <p className="text-sm text-black font-semibold sm:text-base md:text-lg">info@akclinktech.com</p>
          </div>
        </div>
      </div>  
      </div>

      {/* Inline CSS */}
      <style>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-zoom {
          animation: zoom 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default ConnectForm;
