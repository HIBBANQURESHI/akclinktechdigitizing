import React, { useState } from 'react';

const FAQSection = ({faqsData}) => {
  const [faqs, setFaqs] = useState(faqsData);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => (
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    )));
  };

  return (
    <section className="px-4 py-12">
      <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left bg-gray-100 rounded-lg shadow-md focus:outline-none"
            >
              <span className="text-lg text-gray-800">{faq.question}</span>
              <span className="float-right">
                {faq.isOpen ? '-' : '+'}
              </span>
            </button>
            {faq.isOpen && (
              <div className="p-4 bg-white shadow-inner">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
