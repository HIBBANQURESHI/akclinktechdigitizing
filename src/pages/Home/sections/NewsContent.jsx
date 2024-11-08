import React from "react";
import AboutPerson1 from "../../../assets/banner/contact-first-01.webp";
import AboutPerson2 from "../../../assets/banner/contact-third-01.webp";
import aboutUs from "../../../assets/img/aboutUs.jpg";
import { FaPeopleGroup } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { FaLaptopCode, FaLightbulb  } from "react-icons/fa";
import image1 from "../../../assets/news/1.png";
import image2 from "../../../assets/news/2.png";



function NewsContent() {
  return (
    <section className="w-full bg-black">
      {/* about heading */}

      

      {/* about working  */}
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0  mb-10 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class=" mx-3 md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              AKC LinkTech – Digital Design Hub
              </h2>

              <p class="mt-6 text-gray-600">
              AKC LinkTech is a digital agency that believes in providing creative solutions with out of the box thinking. They aim to develop smart solutions to help brands excel amongst their competition, thus creating a unique identity for their business. Whether it is logo design, stationary, or a website design service, all of this combine to make your brand stand out. AKC LinkTech comprises individuals who are known for various reasons, including professionalism, passion, and result-oriented creative solutions….
              </p>
            </div>

            <div class="md:5/12 lg:w-4/12 ">
              <img
                className="border-black rounded-lg border-1"
                src={image1}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>

          <hr />


          <div class="space-y-6 md:space-y-0 mt-10 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class=" mx-3 md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              AKC LinkTech – The Ultimate Digitizing Hub 
              </h2>

              <p class="mt-6 text-gray-600">
              AKC LinkTech is the one-stop-shop for providing exceptional digital solutions to their clientele. It believes in thinking out of the box. It aims at offering a unique brand identity to its customers, so the business gets a competitive advantage in the market. Either in the form of stationery, logo design, or a website design, all these services, when united, build a unique selling point (USP) for the brand. The team comprises professional, well-equipped, skillful, passionate decision-makers, and result-oriented individuals.....
              </p>
            </div>

            <div class="md:5/12 lg:w-4/12 ">
              <img
                className="border-black rounded-lg border-1"
                src={image2}
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

export default NewsContent;
