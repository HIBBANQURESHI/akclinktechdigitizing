import React from 'react';
import './success.css';

const Success = () => {
    return (
        <section className="success-stories text-center">
            <div className="inner-wrap">
                <div className="services-row-1">
                    <h3 className="h1 aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                        Our clients success stories
                    </h3>
                </div>
                <div className="stories">
                    <span className="lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                        <img src="https://ecomexpertsllc.s3.amazonaws.com/cl-1.webp" alt="Client Success 1" />
                    </span>
                    <span className="lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                        <img src="https://ecomexpertsllc.s3.amazonaws.com/cl-2.webp" alt="Client Success 2" />
                    </span>
                    <span className="lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                        <img src="https://ecomexpertsllc.s3.amazonaws.com/cl-3.webp" alt="Client Success 3" />
                    </span>
                    <span className="lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                        <img src="https://ecomexpertsllc.s3.amazonaws.com/cl-4.webp" alt="Client Success 4" />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Success;
