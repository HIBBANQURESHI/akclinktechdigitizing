import React from "react";
import AboutPerson1 from "../../../assets/banner/contact-first-01.webp";
import AboutPerson2 from "../../../assets/banner/contact-third-01.webp";
import aboutUs from "../../../assets/img/aboutUs.jpg";
import { FaPeopleGroup } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { FaLaptopCode, FaLightbulb  } from "react-icons/fa";



function AboutContent() {
  return (
    <section className="w-full bg-black">
      {/* about heading */}

      <div className="container p-16 mx-auto text-center">
        {/* Description */}
        <p className="mb-6 text-lg font-light text-white md:text-2xl">
          Hello From Us
        </p>

        {/* Heading */}
        <h2 className="mb-5 font-bold text-white md:text-4xl">
          Let Us Introduce <span className="text-yellow-400">Ourselves</span>!
        </h2>

        <p className="mb-6 text-lg font-light text-white md:text-xl">
          Welcome to AKCLinkTech , where a team of creative experts ready to meet
          your expectations
        </p>
      </div>

      {/* about working  */}
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class=" mx-3 md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              We Turn Your Brand Vision into Stunning Visuals that Drive Success
              </h2>

              <h2 class="text-xl text-yellow-500 font-bold md:text-2xl mt-4">
              Boost Your Business with Tailored Web Design and Strategic Marketing
              </h2>

              <p class="mt-6 text-gray-600">
                Welcome to AKC Link Tech Digitizing, your all-in-one digital solutions partner, 
                  committed to exceeding your expectations. As a comprehensive digital marketing agency, 
               we’ve assembled a talented team of professional 
                designers, strategists, developers, and creatives.
                Our team isn’t just a group of experts;
                they are seasoned professionals with
                years of experience driving impactful results. 
                At AKC Link Tech Digitizing, we are dedicated to pushing
                the boundaries of creativity and helping your business thrive.
                Confident and results-driven, we deliver on our promises with proven
                strategies and expert insights built on years of testing and refinement.
                Whether you’re a startup or an established enterprise, 
                we welcome you aboard the journey to guaranteed success.

              </p>
            </div>

            <div class="md:5/12 lg:w-5/12 ">
              <img
                className="border-black rounded-lg border-1"
                src={AboutPerson1}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="container p-20 mx-auto text-center">
        {/* Heading */}
        <h2 className="pb-10 font-bold text-white md:text-4xl">
          Best Digital Agency In <span className="text-yellow-400">USA</span>!
        </h2>

        <div className="container mt-10">
          <div className="row">
            <div class="flex justify-center flex-wrap gap-4">
              
            <div className="mx-10 ">
                <div className="flex flex-col items-center space-y-2 text-lg text-white md:text-2xl">
                  <a
                    href="#"
                    className="flex items-center justify-center block text-yellow-400 transition bg-black rounded-full w-14 h-14 hover:bg-gray-800"
                  >
                    <TiGroupOutline  size={100} />
                  </a>
                  <h2 className="text-center ">Years Of Expertise</h2>
                  <p className="text-xs text-base text-center">We have worked in a diverse spectrum of industries.</p>
                </div>
              </div>

              <div className="mx-10 ">
                <div className="flex flex-col items-center space-y-2 text-lg text-white md:text-2xl">
                  <a
                    href="#"
                    className="flex items-center justify-center block text-yellow-400 transition bg-black rounded-full w-14 h-14 hover:bg-gray-800"
                  >
                    <FaPeopleGroup size={100} />
                  </a>
                  <h2 className="text-center">Successful Deliveries</h2>
                  <p className="text-xs text-center ">We believe in punctuality with 100% effort.</p>
                </div>
              </div>
              
              <div className="mx-10 ">
                <div className="flex flex-col items-center space-y-2 text-lg text-white md:text-2xl">
                  <a
                    href="#"
                    className="flex items-center justify-center block text-yellow-400 transition bg-black rounded-full w-14 h-14 hover:bg-gray-800"
                  >
                    <FaLaptopCode  size={100} />
                  </a>
                  <h2 className="text-center">Satisfied Clients</h2>
                  <p className="text-xs text-base text-center">Customer feedback is our top priority.</p>
                </div>
              </div>

              <div className="mx-10 ">
                <div className="flex flex-col items-center space-y-2 text-lg text-white md:text-2xl">
                  <a
                    href="#"
                    className="flex items-center justify-center block text-yellow-400 transition bg-black rounded-full w-14 h-14 hover:bg-gray-800"
                  >
                    <FaLightbulb   size={50} />
                  </a>
                  <h2 className="text-center">Innovative Solutions</h2>

                  <p className="text-xs text-base text-center">There is no digital problem that we can't solve</p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 2nd content */}

      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class=" mx-3 md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              One of the fast-paced emerging digital marketing agencies in the US with a high success rate, innovative solutions, and designs.
              </h2>

              <h2 class="text-xl text-gray-500 font-base md:text-xl mt-4">
              <ul class="list-decimal mx-10 mt-5">
                  <li className="mb-4">Dedicated to your business's digital identity</li>
                  <li className="mb-4">Original and error-proof design and services</li>
                  <li className="mb-4">Customer support whenever you summon</li>
              </ul>
              </h2>

            
            </div>

            <div class="md:5/12 lg:w-5/12 ">
              <img
                className="border-black rounded-lg border-1"
                src={aboutUs}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default AboutContent;
