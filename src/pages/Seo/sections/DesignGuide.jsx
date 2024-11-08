import React from 'react';
import designVector_1 from '../../../assets/logo-design-vectors/design-vector.jpg'
import p1 from '../../../assets/process-icon/p-1.png'
import p2 from '../../../assets/process-icon/p-2.png'
import p3 from '../../../assets/process-icon/p-3.png'
import p4 from '../../../assets/process-icon/p-4.png'


const designSteps = [
  {
    id: 1,
    number: "01",
    title: "Build a design brief",
    description:
      "Fill out the creative design brief and tell us everything that you need and allow us to kick-start your project.",
    image: p1,
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    number: "02",
    title: "Generate the Look",
    description:
      "Once we have what your business nature is, we infuse the contemporary elements into the web design and content.",
    image: p2,
    bgColor: "bg-purple-500",
  },
  {
    id: 3,
    number: "03",
    title: "Test the Functionality",
    description:
      "We spare no bugs and errors in the coding. We test the functionality and features of the website.",
    image: p3,
    bgColor: "bg-blue-500",
  },
  {
    id: 4,
    number: "04",
    title: "Hands Over to You",
    description:
      "Once we are sure that the website is destined to provide an excellent customer experience, we hand it over to you.",
    image: p4,
    bgColor: "bg-yellow-500",
  },
];

const DesignGuide = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto mb-10 text-center">
        <h2 className="text-4xl font-bold text-white">
          Here is How we Create Professional Designs
        </h2>
      </div>
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-4">
        {designSteps.map((step) => (
          <div
            key={step.id}
            className="p-6 transition-transform duration-300 ease-in-out transform bg-white shadow-lg rounded-xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center">
              {/* Number with background color */}
              <div
                className={`p-2 text-white font-bold text-lg rounded ${step.bgColor}`}
              >
                {step.number}
              </div>
            </div>
            <div className="my-4 text-center">
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignGuide;
