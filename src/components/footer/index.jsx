import React from 'react';
import { Link } from 'react-router-dom';
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import payment from '../../assets/logo/payment-logos.png'



const Footer = () => {
  return (
<>
  {/* ========== FOOTER ========== */}
  <footer className="w-full mt-auto yellow:bg-neutral-400" style={{backgroundColor:"#020825"}}>
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        
      <div className="col-span-1">
          
          <div className="grid mt-3 space-y-3">
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/"
              >
                Home
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/about-us"
              >
                Who Are We
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </p>

            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/collabrate-us"
              >
                Collabrate With Us
              </Link>
            </p>


          </div>
        </div>


        <div className="col-span-1">
        
          <div className="grid mt-3 space-y-3">
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/logo-branding"
              >
                Logo design
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/web-design"
              >
                Web Design
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/printing-&-packaging"
              >
                Printing & Packaging
              </Link>
            </p>

           
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/mobile"
              >
                Mobile App
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/ecom-experts"
              >
                Ecom Experts
              </Link>
            </p>

            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/digital-seo"
              >
                SEO
              </Link>
            </p>


          </div>
        </div>


        <div className="col-span-1">
          
          <div className="grid mt-3 space-y-3">
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/terms-&-conditions"
              >
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/refund-policy"
              >
                refund Policy
              </Link>
            </p>

            <p>
              <Link
                className="inline-flex text-white font-semibold gap-x-2 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                to="/newsroom"
              >
                Newsroom
              </Link>
            </p>


          </div>
        </div>


        {/* End Col */}
        <div className="col-span-2">
          <h4 className="font-semibold text-white ">Stay up to date</h4>
          <form>
            <div className="flex flex-col items-center gap-2 p-2 mt-4 bg-white rounded-lg sm:flex-row sm:gap-3 dark:bg-neutral-900">
              <div className="w-full">
                {/* <label htmlFor="hero-input bg-yellow-400" className="sr-only">
                  Subscribe
                </label> */}
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="block w-full px-4 py-3 text-sm border-transparent rounded-lg focus:border-blue-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-yellow-500 dark:border-transparent dark:text-yellow-400 dark:placeholder-neutral-500 dark:focus:ring-yellow-600"
                  placeholder="Enter your email"
                />
              </div>
              <Link
                className="inline-flex items-center justify-center w-full p-3 text-sm font-medium text-black hover:text-white font-semibold border border-transparent rounded-lg sm:w-auto whitespace-nowrap gap-x-2 hover:bg-blue-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" style={{backgroundColor:"#ffa200"}}
                to="#"
              >
                Subscribe
              </Link>
            </div>
            <div className='py-3'>
              <img src={payment} alt="" style={{ width: "500px", height: "170px" }}  />
            </div>
           
          </form>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      <div className="grid mt-5 sm:mt-12 gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white font-semibold dark:text-neutral-400">
            © All Rights Reserved AKC Link Tech Digitizing.
          </p>
        </div>
        {/* End Col */}
        {/* Social Brands */}
        <div>
          <Link
            className="inline-flex items-center justify-center text-xl font-semibold text-white border border-transparent rounded-lg size-10 gap-x-2 hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            to="https://www.facebook.com/people/AKC-Link-Tech-Digitizing/61565175612368/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <svg
              className="shrink-0 size-4 w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </Link>
          <Link
            className="inline-flex items-center justify-center text-sm font-semibold text-white border border-transparent rounded-lg size-10 gap-x-2 hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            to="https://www.akclinktech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="shrink-0 size-4 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </Link>
          <Link
            className="inline-flex items-center justify-center text-sm font-semibold text-white border border-transparent rounded-lg size-10 gap-x-2 hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            to="https://www.instagram.com/akc.linktechdigitizing/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <SiInstagram className='h-6 w-8' />

          </Link>
          <Link
            className="inline-flex items-center justify-center text-sm font-semibold text-white border border-transparent rounded-lg size-10 gap-x-2 hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            to="https://www.linkedin.com/company/akc-link-tech-digitizing/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaLinkedinIn  className='w-8 h-8'/>

          </Link>
        </div>
        {/* End Social Brands */}
      </div>
    </div>
  </footer>
  {/* ========== END FOOTER ========== */}
</>

  );
};

export default Footer;
