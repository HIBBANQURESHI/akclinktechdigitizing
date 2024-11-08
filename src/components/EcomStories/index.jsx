import React from 'react';
import './SuccessStories.css'; // Assuming all your styles are included in a single file

const SuccessStories = () => {
  return (
    <section className="results-section">
      <div className="top-row">
        <div className="inner-wrap">
          <div className="services-row-1">
            <div className="left-col">
              <h3
                className="h2-regular aos-init aos-animate"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                See The Results
              </h3>
              <h3
                className="h1 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Check out some of our <br /> past results
              </h3>
            </div>
            <div className="right-col">
              <p
                className="para field1-regular aos-init aos-animate"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Integrate your Amazon and Shopify stores seamlessly with our
                automation services. Automate inventory updates and gain
                real-time data insights, leading to streamlined operations,
                heightened productivity, and enhanced customer experiences.
              </p>
              <button
                className="cta-big fill cta1-semiBold aos-init aos-animate"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-anchor-placement="top-bottom"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://ecomexpertsllc.s3.amazonaws.com/lines-dark.webp"
          alt=""
          className="line-dark"
          width="1920px"
          height="113px"
        />
      </div>
    </section>
  );
};

export default SuccessStories;
