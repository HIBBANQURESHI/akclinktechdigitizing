import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Is Your Best Approach To Selling Products On Amazon?",
      answer: "Amazon offers untapped market potential for businesses looking to boost their revenue through optimized product listings, digital marketing, enhanced brand content, sponsored ads, engaging sales copy, attractive product descriptions, images, and more. Our Amazon marketing services promise sales-driven business scaling.",
    },
    {
      question: "Do I Need To Hire Amazon Marketing Service Professionals For My Business?",
      answer: "With the aid of an Amazon marketing service expert, you can enhance your brand's online exposure, effectively manage your online store, and attract more visitors to your product website, regardless of your business size or the item you wish to promote to your audience. Utilizing the vast experience of Amazon marketing agencies, you can promote your products appropriately while adhering to all Amazon regulations.",
    },
    {
      question: "I Have A Successful Amazon Ecommerce Store. Do I Need To Hire Amazon Marketing Experts?",
      answer: "We are glad to hear that your ecommerce website is operating smoothly and meeting your sales objectives. However, keeping up with the changing trends is important for any business. Although your current marketing techniques might be effective, they may become outdated with time, which could affect your marketing approach in the future.",
    },
    {
      question: "How Do I Know My Amazon Strategy Is Effective?",
      answer: "If you are overspending due to changes on Amazon, but your customers are still responding positively, the solution may be to increase your Amazon sales. Even if your sales history is strong, you may feel that your strategy is not producing the desired results or that you are not making enough profits at times.",
    },
    {
      question: "How Long Do You Take To Set Up an Online Ecommerce Store?",
      answer: "In an ideal situation, it would take 3-4 weeks to initiate an Amazon ecommerce enterprise. However, it may cause a delay based on your requirements. The AMZ Digital comprises a group of exceptionally knowledgeable Amazon marketers and business consultants who can help you establish your Amazon web store within the timeframe specified.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="top-row">
        <div className="inner-wrap">
          <div className="services-row-1 items-center">
            <div className="left-col">
              <h3 className="h2-regular aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">FAQ’s</h3>
              <h3 className="h1 aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">Frequently Asked<br />Questions</h3>
            </div>
            <div className="right-col">
              <p className="para field1-regular aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                We strive to assist your online progress. Should you have any queries not covered on our site, please feel free to reach out to our customer representative.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="inner-wrap">
          <div className="my-accordion">
                    {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px' }}> {/* Increased gap between boxes */}
              <button
                id={`button-${index}`}
                aria-expanded={activeIndex === index}
                className="my-accordion-header"
                aria-controls={`content-${index}`}
                onClick={() => toggleAccordion(index)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }} // Styles for button
              >
                <h3 className="accordion-title">
                  <div className="title-box">{faq.question}</div>
                  <div className="accordion-icon">
                    <img src="data:image/webp;base64,UklGRgYBAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSFAAAAABN6CmkRTo7sDJW+JfGSU2IiLwN+ELRm0jSWqpEcy1BJpAqxkMiAAY/jBmVa/df0T/J8DudBOjlLl/IgGeA+DRxNIS4DkAbvfcJn5HlJL+AlZQOCCQAAAAUAUAnQEqGAAYAD5RJI9Fo6IhFAQAOAUEtQBb+Mb/APxAsgGSB//14B6AH9AvYoCDQ0MwAMz//981//vj9//3wC7EdEXd38EVvBv35cNa/DMJgg2bEbFfycjJiqY3AxD23+6dv//9zlUPQGCqCLBxUa24vkMK/1hf//3OIL0qDM5jhiH/4r8x0NmJ//l14AAA" alt="" />
                  </div>
                </h3>
              </button>
              <div
                id={`content-${index}`}
                aria-labelledby={`button-${index}`}
                className="my-accordion-body"
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0px',
                  transition: 'max-height 500ms ease-in-out', // Smooth transition
                  overflow: 'hidden'
                }}
              >
                <div className="accordion-body py-4 gap-6">{faq.answer}</div>
              </div>
            </div>
          ))}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
