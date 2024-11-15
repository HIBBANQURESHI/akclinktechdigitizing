import React from 'react';
import designVector_1 from '../../../assets/logo-design-vectors/design-vector.jpg'
import p1 from '../../../assets/process-icon/p-1.png'
import p2 from '../../../assets/process-icon/p-2.png'
import p3 from '../../../assets/process-icon/p-3.png'
import p4 from '../../../assets/process-icon/p-4.png'

const DesignGuide = () => {
  const steps = [
    {
      title: 'Design Brief',
      description:
        'Fill out the creative design brief, tell us everything you need, and let us kick-start your project.',
      imgSrc: p1,
    },
    {
      title: 'Designing Process',
      description:
        'From scratch, we brainstorm and sketch emblems for your business identity. We incorporate and adjust the value traits into an image.',
      imgSrc: p2,
    },
    {
      title: 'Approval and Edits',
      description:
        'After all, it’s your business, and you should be happy with the identity you will start with. Our drafts are first sent over to you for approval and necessary edits.',
      imgSrc: p3,
    },
    {
      title: 'Final Rounds',
      description:
        'In the final moments of the affair, we polish, recheck and sharpen all the edges of your final identity and hand it over to you with complete rights.',
      imgSrc: p4,
    },
  ];

  return (
    <section className="py-12" style={{backgroundColor:"#020825"}}>
    <div className="container mx-auto text-center ">
      <h2 className="mb-8 text-4xl font-semibold text-white ">Here is How we Create Professional Designs</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 transition-all duration-300 bg-white rounded-lg cursor-pointer group hover:bg-orange-400 hover:text-white hover:border-yellow-400"
          >
            <img
              src={step.imgSrc}
              alt={step.title}
              className="mx-auto mb-4 h-20 transition-opacity duration-300 ease-in-out hover:opacity-50 font-semibold"
            />
            <h3 className="mb-2 text-xl font-semibold text-black">{step.title}</h3>
            <p className="text-gray-800 font-normal">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default DesignGuide;
