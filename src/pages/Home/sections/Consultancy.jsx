import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

function Consultancy() {
  return (
    <section className="w-full bg-blue-700">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            Get Free Consultancy
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0 md:space-x-8">
          {/* Phone Number */}
          <div className="flex items-center space-x-2 text-lg text-white md:text-2xl">
            <IoCallSharp className="text-2xl md:text-3xl" />
            <span><b>(832) 278-2818</b></span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 text-lg text-white md:text-2xl">
            <MdAttachEmail className="text-2xl md:text-3xl" />
            <span><b>info@akclinktech.com</b></span>
          </div>

          {/* Button */}
          <div className="mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultancy;
