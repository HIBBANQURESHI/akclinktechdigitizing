import React from 'react';

const CtaBox = () => {
  return (
    <section className="cta-section">
      <div className="inner-wrap">
        <div className="cta-box">
          <h3
            className="h1 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            JOIN THE THRIVING ECOMMERCE ECOSYSTEM AND ACCESS LIMITLESS OPPORTUNITIES
          </h3>
          <p
            className="field1-regular aos-init aos-animate"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Connect with Our Experienced Advisors Today!
          </p>
          <button
            className="cta-default cta1-semiBold aos-init aos-animate"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Book a Free Consultation
          </button>
          <img
            src="https://ecomexpertsllc.s3.amazonaws.com/lines-light.webp"
            alt=""
            className="line"
            width="1920"
            height="113"
          />
          <div className="border-1"></div>
          <div className="border-2"></div>
        </div>
      </div>
    </section>
  );
};

export default CtaBox;
