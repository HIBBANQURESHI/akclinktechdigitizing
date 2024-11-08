import React from 'react';
import './Features.css'; // Ensure to import the CSS file

const FeaturesSection = () => {
    return (
        <div className="features py-16">
            <div className="feature-box gap-3">
                <div className="icon">
                    <img
                        src="https://ecomexpertsllc.s3.amazonaws.com/icons/passive-icome.webp"
                        alt="Effortless Passive Income"
                    />
                </div>
                <h4 className="h3-semiBold text-black">Effortless Passive Income</h4>
                <p className="field1-regular text-black">
                    Say goodbye to the hassles of traditional income streams and embrace a lifestyle where your money works for you.
                </p>
            </div>

            <div className="feature-box">
                <div className="icon">
                    <img
                        src="https://ecomexpertsllc.s3.amazonaws.com/icons/investment-returns.webp"
                        alt="Best Return on Investment"
                    />
                </div>
                <h4 className="h3-semiBold text-black">Best Return on Investment</h4>
                <p className="field1-regular text-black">
                    At Ecom Experts, we believe in maximizing your gains with strategic and calculated investments.
                </p>
            </div>

            <div className="feature-box">
                <div className="icon">
                    <img
                        src="https://ecomexpertsllc.s3.amazonaws.com/icons/chart-column-grow.webp"
                        alt="99.99% Success"
                    />
                </div>
                <h4 className="h3-semiBold text-black">99.99% Success</h4>
                <p className="field1-regular text-black">
                    Our proven strategies and unwavering commitment set the stage for guaranteed success.
                </p>
            </div>
        </div>
    );
};

export default FeaturesSection;
