import { useState } from 'react';

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion(activeAccordion === accordionIndex ? null : accordionIndex);
  };

  const faqData = [
    {
      question: 'Logo Design',
      answer:
        "A custom logo is the foundation of your brand identity, creating a powerful first impression for potential clients. Our professional logo design service is dedicated to crafting unique and memorable logos that capture your business values and stand out in a competitive market. Whether you’re looking for an online logo design or need us to design your logo fromscratch, we take the time to understand your vision and ensure it resonates with youraudience, leaving a lasting impact.",
    },
    {
      question: 'Print Design',
      answer:
        "Print design is a powerful way to make a lasting impression and build tangible connections with your audience. Whether you need business card design, custom posters, or custom letterhead, we create high-quality print materials that not only capture attention but also convey your brand’s message effectively. From online logo design to crafting visually striking designs, we ensure your brand stands out both in hand and in print. Let us design your logo and bring your print materials to life with strategic and captivating designs.",
    },
    {
      question: 'Stationary Design',
      answer:
        "Professional business stationery is essential for setting the tone of your brand in every communication. Our stationery design service covers everything from custom letterheads and envelopes to notepads and business cards. We create cohesive and elegant business stationery that strengthens your brand identity and adds a touch of professionalism to every interaction.",
    }, 
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-manrope text-center font-bold text-black leading-[3.25rem]">
            Graphic Design Services
          </h2>
        </div>
        <div className="accordion-group ">
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{backgroundColor:"#020825"}}
              className={`accordion border border-solid border-gray-300 hover:bg-blue-700  p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
                activeAccordion === index ? 'bg-blue-900 text-white border-gray-600' : ''
              }`}
            >
              <button
              style={{color:"#ffa200"}}
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-semibold leading-8 text-orange-400 hover:text-orange-400 w-full transition duration-500 ${
                  activeAccordion === index ? 'font-medium text-white' : ''
                } hover:text-white`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index}
                aria-controls={`faq-${index}`}
              >
                <h5 >{faq.question}</h5>
                <svg
                  className={`w-6 h-6 text-white hover:text-gray-800 transition duration-500 ${
                    activeAccordion === index ? 'hidden' : 'block'
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${
                    activeAccordion === index ? 'block' : 'hidden'
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id={`faq-${index}`}
                className="accordion-content w-full overflow-hidden pr-4"
                style={{
                  maxHeight: activeAccordion === index ? '250px' : '0',
                  transition: 'max-height 0.5s ease',
                }}
              >
                <p className="text-base text-white font-light leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
