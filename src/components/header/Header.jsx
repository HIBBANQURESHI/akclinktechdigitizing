import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import reactLogo from "../../assets/logo/header-logo.png";
import { IoCall } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);

  const closeForm = (e) => {
    // Check if the clicked target is either the overlay or the close button
    if (formVisible && (e.target.className.includes('form-popup-bg') || e.target.id === 'btnCloseForm')) {
      setFormVisible(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
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
      toast.success(data.message || 'Form submitted successfully!');
      setFormVisible(false);
    } catch (error) {
      toast.error('Submission failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <header style={{ height: "auto", backgroundColor:'#020825' }} className="shadow-md">
      <ToastContainer />
      <div style={{ height: "10vh" }} className="header flex items-center justify-between px-6">
        <div className="flex items-center">
          <Link to="/">
            <img src={reactLogo} alt="AKCLinktech" width="400px" className=" h-52" style={{ marginBottom: '-23px' }} />
          </Link>

          {/* Upper nav for larger screens */}
          <nav className="fontFamily hidden space-x-6 text-white md:flex " style={{ fontSize: '15px', fontWeight: '500' }}>
            <Link to="/about-us" className={`hover:text-white ${isActive("/about-us") ? "text-black font-bold" : ""}`}>
              About Us
            </Link>
            <Link to="/contact-us" className={`hover:text-white ${isActive("/contact-us") ? "text-black font-bold" : ""}`}>
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Contact section */}
        <div className="fontFamily items-center hidden space-x-3 md:flex">
          <div className="Num flex py-2 px-3">
            <span className="pr-1 text-xl text-white">
              <IoCall />
            </span>
            <span className="text-sm text-white" style={{ fontSize: '16px', fontWeight: '500' }}>
              Call Us: <span className="font-bold">(832) 278-2818</span>
            </span>
          </div>
        </div>

        {/* Trigger button for menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <IoIosCloseCircle size={28} onClick={() => setIsMenuOpen(false)} />
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Horizontal menu for small screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)} // Close menu on background click
            />

            <motion.nav
              className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-white p-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-600">
                  <IoIosCloseCircle size={28} />
                </button>
              </div>

              {/* Upper navigation items */}
              <div className="flex flex-col space-y-4 mt-4 ">
                <Link to="/about-us" className={`hover:text-black ${isActive("/about-us") ? "text-black font-bold" : ""}`}>
                  About Us
                </Link>
                <Link to="/contact-us" className={`hover:text-black ${isActive("/contact-us") ? "text-black font-bold" : ""}`}>
                  Contact Us
                </Link>
              </div>

              {/* Divider */}
              <hr className="my-4" />

              {/* Lower navigation items */}
              <div className="flex flex-col space-y-4">
                <Link to="/logo-branding" className={`hover:underline ${isActive("/logo-branding") ? "font-bold" : ""}`}>
                  Logo & Branding
                </Link>
                <Link to="/web-design" className={`hover:underline ${isActive("/web-design") ? "font-bold" : ""}`}>
                  Website Design
                </Link>
                <Link to="/printing-&-packaging" className={`hover:underline ${isActive("/printing_&_packaging") ? "font-bold" : ""}`}>
                  Printing & Packaging
                </Link>
                <Link to="/digital-seo" className={`hover:underline ${isActive("/digital-seo") ? "font-bold" : ""}`}>
                  SEO/SMM
                </Link>
                <Link to="/mobile" className={`hover:underline ${isActive("/mobile") ? "font-bold" : ""}`}>
                  Mobile Apps
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Always show lower nav on larger screens */}
      <div className="hidden md:flex py-3 bg-white">
        <div className="fontFamily flex flex-wrap justify-center mx-auto space-x-3 text-base text-black font-semibold" id="NavFontAnchor">
          <Link to="/logo-branding" className={`hover:underline ${isActive("/logo-branding") ? "font-bold" : ""}`}  id="NavFont">
            Logo & Branding
          </Link>
          <Link to="/web-design" className={`hover:underline ${isActive("/web-design") ? "font-bold" : ""}`}  id="NavFont">
            Website Design
          </Link>
          <Link to="/printing-&-packaging" className={`hover:underline ${isActive("/printing_&_packaging") ? "font-bold" : ""}`}  id="NavFont">
            Printing & Packaging
          </Link>
          <Link to="/digital-seo" className={`hover:underline ${isActive("/digital-seo") ? "font-bold" : ""}`}  id="NavFont">
            SEO/SMM
          </Link>
          <Link to="/mobile" className={`hover:underline ${isActive("/mobile") ? "font-bold" : ""}`}  id="NavFont">
            Mobile Apps
          </Link>
        </div>
      </div>

     {/* Form Popup */}
{formVisible && (
  <div className="form-popup-bg fixed inset-0 z-50 flex items-center justify-center" onClick={closeForm}>
    <div className="form-popup relative w-96 p-6 bg-black rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-xl font-bold mb-4 text-yellow-500">Request a Custom Quote</h2>
      <IoIosCloseCircle
        id="btnCloseForm"
        size={30}
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => setFormVisible(false)} // Directly toggle visibility here
      />

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required className="text-white bg-black w-full p-2 mb-2 border border-gray-300 rounded" />
        <input type="email" name="email" placeholder="Email" required className="text-white bg-black w-full p-2 mb-2 border border-gray-300 rounded" />
        <input type="tel" name="phone" placeholder="Phone" required className="text-white bg-black w-full p-2 mb-2 border border-gray-300 rounded" />

        {/* Dropdown for selecting services */}
        <select name="service" required className="text-white bg-black w-full p-2 mb-2 border border-gray-300 rounded">
          <option value="" disabled>Select a Service</option>
          <option value="logo-branding">Logo & Branding</option>
          <option value="website-design">Website Design</option>
          <option value="printing-packaging">Printing & Packaging</option>
          <option value="seo-smm">SEO/SMM</option>
          <option value="mobile-apps">Mobile Apps</option>
          <option value="ecom-experts">Ecom Experts</option>
        </select>

        <textarea name="message" placeholder="Message" required className="text-white bg-black w-full p-2 mb-2 border border-gray-300 rounded" />
        <button type="submit" className="w-full px-4 py-2 text-black bg-yellow-500 rounded hover:bg-black hover:border-2 hover:border-yellow-500 hover:text-yellow-500">Submit</button>
      </form>
    </div>
  </div>
)}
    </header>
  );
}
