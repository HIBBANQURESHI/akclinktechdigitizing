import React from 'react';
import './counter.css';

const CounterSection = () => {
  return (
    <section className="counter-section features">
      <div className="faker">
        <div className="inner-wrap">
          <div className="feature-row">

            <div className="feature-box">
              <div className="icon">
                <img 
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/projectsCompleted.webp" 
                  alt="Solution Focused" 
                  data-aos="fade-up" 
                  data-aos-once="true" 
                  data-aos-duration="1000" 
                  width="60px" 
                  height="60px" 
                  className="aos-init aos-animate"
                />
              </div>
              <h3 
                className="h3-semiBold aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                1400+
              </h3>
              <p 
                className="field1-regular aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                Projects completed for our respected clients.
              </p>
            </div>

            <div className="feature-box">
              <div className="icon">
                <img 
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/goal.webp" 
                  alt="Customer Oriented" 
                  data-aos="fade-up" 
                  data-aos-once="true" 
                  data-aos-duration="1000" 
                  width="60px" 
                  height="60px" 
                  className="aos-init aos-animate"
                />
              </div>
              <h3 
                className="h3-semiBold aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                10+
              </h3>
              <p 
                className="field1-regular aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                Years experience in business & consulting.
              </p>
            </div>

            <div className="feature-box">
              <div className="icon">
                <img 
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/discussion.webp" 
                  alt="Success" 
                  data-aos="fade-up" 
                  data-aos-once="true" 
                  data-aos-duration="1000" 
                  width="60px" 
                  height="60px" 
                  className="aos-init aos-animate"
                />
              </div>
              <h3 
                className="h3-semiBold aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                200+
              </h3>
              <p 
                className="field1-regular aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                Seasoned professionals catering to clients.
              </p>
            </div>

            <div className="feature-box">
              <div className="icon">
                <img 
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/reward.webp" 
                  alt="Success" 
                  data-aos="fade-up" 
                  data-aos-once="true" 
                  data-aos-duration="1000" 
                  width="60px" 
                  height="60px" 
                  className="aos-init aos-animate"
                />
              </div>
              <h3 
                className="h3-semiBold aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                30+
              </h3>
              <p 
                className="field1-regular aos-init aos-animate" 
                data-aos="fade-up" 
                data-aos-once="true" 
                data-aos-duration="1000"
              >
                Business & consulting award winnings.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
