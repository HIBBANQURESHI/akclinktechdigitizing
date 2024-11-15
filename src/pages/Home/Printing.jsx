import React from "react";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ProductList from "../../components/productList";
import reactLogo from "../../assets/logo/header-logo.png";
import featureImage2 from "../../assets/print-package/offer-img-2.png";
import b1 from "../../assets/print-package/badge/b1.webp";
import b2 from "../../assets/print-package/badge/b2.webp";
import b3 from "../../assets/print-package/badge/b3.webp";
import f1 from "../../assets/print-package/feature/f1.png";
import f2 from "../../assets/print-package/feature/f2.png";
import f3 from "../../assets/print-package/feature/f3.png";
import featureImage from "../../assets/print-package/offer-img.png";
import Header from "../../components/header/Header";
import Testimonials from "../../components/testimonials";
import Footer from "../../components/footer";
import ConnectForm from "../../components/connectForm";
import testmonial1 from "../../assets/img/examples/testimonial-6-2.jpg"
import testmonial2 from "../../assets/img/examples/testimonial-6-3.jpg"

const Printing = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Alex Carter",
      feedback:
        "This company exceeded my expectations with impressive design work and seamless functionality!",
      avatar: testmonial1
    },
    {
      id: 2,
      name: "Emma Taylor",
      feedback:
        "Truly outstanding! The team collaborated with me on every detail, and I’m thrilled with the final result.",
      avatar: testmonial2
    },
    {
      id: 3,
      name: "Sophia Martinez",
      feedback:
        "The professionalism and attention to detail were exceptional. I highly recommend their services!",
      avatar: testmonial1
    },
  ];

  const Brand = () => (
    <div className="flex bg-white items-center justify-between  md:block">
      <a href="/">
        <img src={reactLogo} width={200} height={100} alt="Float UI logo" />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[500px]"></div>
      <div className="relative">
        {/* header */}
        <Header />

        <section className="py-10 bg-white">
          <div className="max-w-screen-xl flex justify-center mx-auto px-4 py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none mt-20 space-y-5 max-w-xl">
              <h1 className="text-4xl text-blue-700 font-extrabold sm:text-5xl">
                Your Premier Printing Specialists
              </h1>
              <p className="text-black">
                Revolutionizing your brand with uncompromising commitment,
                creative approach, and absolute content.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-4 px-5 text-black font-medium bg-orange-400 duration-150 hover:bg-white hover:text-orange-400 hover:border-2 hover:border-orange-400 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="/contact-us"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-black hover:text-gray-400 font-medium duration-150 md:inline-flex"
                >
                  Contact sales
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold p-3 pb-5 md:text-2xl text-blue-900">Acheviments</h1>
                <div className="flex items-center">
                  <img className="mx-4" src={b1} alt={b1} />
                  <img className="mx-4" src={b2} alt={b2} />
                  <img className="mx-4" src={b3} alt={b3} />
                </div>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <form class="max-w-md mx-auto p-10 border border-black">
                <div class="relative flex justify-center z-0 w-full mb-5 group">
                  <h1 className="font-bold md:text-3xl text-blue-700">
                    Instant Quote
                  </h1>
                </div>

                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="test"
                    name="floating_email"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_password"
                    id="floating_password"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_company"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                  </div>
                </div>

                <div class="relative z-0 w-full mb-5 group">
                  <textarea
                    name="floating_textarea"
                    id="floating_textarea"
                    rows="4"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    for="floating_textarea"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Message
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    class="text-black mt-5 bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* features */}


        <section className="bg-white">
          <div
            className=" py-4 px-4 mx-auto bg-white p-5 border rounded-full text-center  md:max-w-screen-2xl lg:max-w-screen-2xl lg:px-30"
            
          >
            <div className="flex flex-wrap justify-center  items-center pt-10 text-gray-500 sm:justify-between">
              {/* First Column (Core Values) */}
              <div className="w-full md:w-1/4 text-center mb-10">
                <a href="#" className="block">
                  <h1 className="md:text-4xl text-2xl text-black font-bold">
                    Core{" "}
                    <span className="text-blue-700 hover:text-black">
                      Values
                    </span>
                    <br />
                    We Live By
                  </h1>
                </a>
              </div>

              {/* Feature Column 1 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center mb-10">
                <div className="flex items-center justify-center mb-3">
                  <p className="md:text-4xl text-2xl text-black font-bold mx-5">
                    Integrity
                  </p>
                  <img src={f1} alt="Integrity" />
                </div>
                <p className="text-black md:text-xl text-sm">
                  To communicate and act <br /> with authenticity, <br />{" "}
                  consistency, and honesty.
                </p>
              </div>

              {/* Feature Column 2 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center mb-10">
                <div className="flex items-center justify-center mb-3">
                  <p className="md:text-4xl text-2xl text-black font-bold mx-5">
                    Respect
                  </p>
                  <img src={f2} alt="Respect" />
                </div>
                <p className="text-black md:text-xl text-sm">
                  To treat everyone with <br /> fairness and consideration.
                </p>
              </div>

              {/* Feature Column 3 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center mb-10">
                <div className="flex items-center justify-center mb-3">
                  <p className="md:text-4xl text-2xl text-black font-bold mx-5">
                    Excellence
                  </p>
                  <img src={f3} alt="Excellence" />
                </div>
                <p className="text-black md:text-xl text-sm">
                  Striving for continuous <br /> improvement and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* description */}

        <section className="bg-white mt-10">
  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div className="text-gray-500 sm:text-lg dark:text-black">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        We offer bespoke package printing services with <span className="text-blue-700">quick turnaround and quality that speaks for itself.</span>
        </h2>
        <p className="mb-8 font-light lg:text-xl text-black">
        Making a strong impression with your packaging and presentation is the key
         – whether you're an e-commerce business, an SME, or running your business from a garage.
          Our packaging solutions are an amazing way to highlight your product to your beloved customers.
           Personalize the inside and the outside of your custom packaging to highlight your brand style.
        </p>
        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-orange-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
            Contemporary Designs
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-orange-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
            Excellent Print Quality
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-orange-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
            Quick Delivery
            </span>
          </li>
        </ul>
       <button className="bg-orange-400 text-black hover:bg-white hover:text-black hover:border-2 hover:border-orange-400 font-semibold p-3 px-5 border rounded-xl">
        get a Free Quote
       </button>
      </div>
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={featureImage}
        alt="dashboard feature image"
      />
      {/* second feature */}
    </div>
    
  </div>
</section>

<section className="my-10 bg-blue-700 ">
  <ProductList/>
</section>

<section className="bg-white mt-10">

<div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-10 lg:py-10 lg:px-6">
<div className="items-center m gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={featureImage2}
        alt="feature image 2"
      />
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
      <p className="font-normal lg:text-xl text-blue-700" >
      In need of customized packaging solutions?
        </p>
        <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        We’ve all that you need!
        </h2>
        <p className="mb-8 font-normal text-white lg:text-xl">
        You can choose from our comprehensive list of packaging services:
        </p>
        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-blue-700 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              Dynamic reports and dashboards
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              Templates for everyone
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              Development workflow
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-black ">
              Limitless business automation
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              Knowledge management
            </span>
          </li>
        </ul>
        
      </div>
    </div>
    </div>
  

</section>


{/* branding contact message */}

<section className="bg-white grid grid-rows-4 text-center grid-flow-col justify-center  py-20 flex justify-center items-center ">
<p className="md:text-6xl flex justify-center items-center row-span-1 font-bold text-black">Ready To Get Your Branding Done?</p>
<p className="md:text-3xl flex justify-center mt-5 items-center row-span-1 font-bold text-blue-700">Talk To Our Design Consultant For Free</p>
<div className="md:text-xl flex justify-center mt-5 items-center row-span-1 font-bold">
  <button className="btn bg-orange-400 px-5 py-3 text-white mx-2 border rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-orange-400">Live Chat</button>
  <button className="btn bg-white px-5 py-3 text-black mx-2 border border-orange-400 rounded-xl hover:border-blue-900 hover:text-black">Get A Free Quote</button>
</div>
<p className="md:text-3xl flex justify-center mt-5  items-center row-span-1 font-bold text-black">or call us at <span className="mx-4 text-yellow-500"><FaPhoneAlt className="text-blue-700" /></span> (832) 278-2818</p>
</section>

<section>
  <ConnectForm/>
</section>

<section>
  <Footer/>
</section>

      </div>
    </div>
  );
};

export default Printing;
