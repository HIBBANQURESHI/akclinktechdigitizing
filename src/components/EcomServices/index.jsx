import React, { useState } from 'react';
import { FaEtsy } from "react-icons/fa6";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Shopify'); // Default active tab
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(false);
  const [showPopup10, setShowPopup10] = useState(false);
  const [showPopup11, setShowPopup11] = useState(false);
  const [showPopup12, setShowPopup12] = useState(false);
  const [showPopup13, setShowPopup13] = useState(false);
  const [showPopup14, setShowPopup14] = useState(false);
  const [showPopup15, setShowPopup15] = useState(false);
  const [showPopup16, setShowPopup16] = useState(false);
  const [showPopup17, setShowPopup17] = useState(false);
  const [showPopup18, setShowPopup18] = useState(false);
  const [showPopup19, setShowPopup19] = useState(false);
  const [showPopup20, setShowPopup20] = useState(false);
  const [showPopup21, setShowPopup21] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopup2 = () => {
    setShowPopup2(!showPopup2);
  };
  const togglePopup3 = () => {
    setShowPopup3(!showPopup3);
  };
  const togglePopup4 = () => {
    setShowPopup4(!showPopup4);
  };
  const togglePopup5 = () => {
    setShowPopup5(!showPopup5);
  };
  const togglePopup6 = () => {
    setShowPopup6(!showPopup6);
  };
  const togglePopup7 = () => {
    setShowPopup7(!showPopup7);
  };
  const togglePopup8 = () => {
    setShowPopup8(!showPopup8);
  };
  const togglePopup9 = () => {
    setShowPopup9(!showPopup9);
  };
  const togglePopup10 = () => {
    setShowPopup10(!showPopup10);
  };
  const togglePopup11 = () => {
    setShowPopup11(!showPopup11);
  };
  const togglePopup12 = () => {
    setShowPopup12(!showPopup12);
  };
  const togglePopup13 = () => {
    setShowPopup13(!showPopup13);
  };
  const togglePopup14 = () => {
    setShowPopup14(!showPopup14);
  };
  const togglePopup15 = () => {
    setShowPopup15(!showPopup15);
  };
  const togglePopup16 = () => {
    setShowPopup16(!showPopup16);
  };
  const togglePopup17 = () => {
    setShowPopup17(!showPopup17);
  };
  const togglePopup18 = () => {
    setShowPopup18(!showPopup18);
  };
  const togglePopup19 = () => {
    setShowPopup19(!showPopup19);
  };
  const togglePopup20 = () => {
    setShowPopup20(!showPopup20);
  };
  const togglePopup21 = () => {
    setShowPopup21(!showPopup21);
  };

  return (
    <section className="services-section">
      <div className="inner-wrap">
        <div className="services-row-1">
          <div className="left-col">
            <h3 className="h2-regular aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
              Our Services
            </h3>
            <h3 className="h1 aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
              Making brand sales effortless!
            </h3>
          </div>
          <div className="right-col">
            <p className="para field1-regular aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
              Our Amazon Shopify automation services integrate your Amazon and Shopify stores, automate inventory updates, and provide real-time data insights, resulting in streamlined operations, increased productivity, and better customer experiences.
            </p>
            <button className="cta-big fill cta1-semiBold aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="services-row-2">
        <div className="inner-wrap">
          <div className="tab-cover five-tabs">
            <div className="tabs five-tabs aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="100">
              {['Amazon', 'Walmart', 'Shopify', 'Etsy'].map((tabName) => (
                <button key={tabName} className={`tabs__button cta2-semiBold ${activeTab === tabName ? 'active' : ''}`} onClick={() => handleTabClick(tabName)}>
                  {tabName}
                </button>
              ))}
            </div>
          </div>

          <div className="services-grid">
            {activeTab === 'Amazon' && (
              <>
                <div className="service-card">
                  <div className="card-icon">
                    <img
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp"
                      alt="service-icon"
                      width="40px"
                      height="40px"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon Store Creation</h3>
                    <a href="#!" className="cta3-semiBold" onClick={togglePopup}>Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Amazon FBA Automation</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup2}>Learn More</a>
                </div>
              </div> 
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Amazon Private Labelled</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup3}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Amazon A+ Content</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup4}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Amazon Product Hunting</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup5}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Amazon PPC</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup6}>Learn More</a>
                </div>
              </div>
                {/* Additional Amazon Service Cards */}
              </>
            )}
            {activeTab === 'Shopify' && (
            <>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Shopify Store Creation</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup7}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-so-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Shopify Automation</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup8}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-auto-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Shopify Store Optimization</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup9}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-auto-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Shopify Product Hunting</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup10}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-auto-icon.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Shopify Store Marketing</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup11}>Learn More</a>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Walmart' && (
            <>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Walmart Store Creation</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup12}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Walmart Private Labelled</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup13}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Walmart Dropshipping</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup14}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Walmart  Product Hunting</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup15}>Learn More</a>
                </div>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                    alt="service-icon" 
                    width="40px" 
                    height="40px" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Walmart WFS</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup16}>Learn More</a>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Etsy' && (
            <><div className="service-card">
              <div className="card-icon">
                <img
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp"
                  alt="service-icon"
                  width="40px"
                  height="40px"
                  style={{ objectFit: 'contain' }} />
              </div>
              <div className="card-content">
                <h3 className="cta1-semiBold">Etsy Store Creation</h3>
                <a href="#!" className="cta3-semiBold" onClick={togglePopup17}>Learn More</a>
              </div>
            </div>
            <div className="service-card">
                <div className="card-icon">
                <FaEtsy size={40} color="#f2bd58"/>
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Etsy Private Labelled</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup18}>Learn More</a>
                </div>
              </div><div className="service-card">
                <div className="card-icon">
                <FaEtsy size={40} color="#f2bd58"/>
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Etsy Dropshipping</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup19}>Learn More</a>
                </div>
              </div><div className="service-card">
                <div className="card-icon">
                <FaEtsy size={40} color="#f2bd58"/>
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Etsy Product Hunting</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup20}>Learn More</a>
                </div>
              </div><div className="service-card">
                <div className="card-icon">
                <FaEtsy size={40} color="#f2bd58"/>
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Etsy WFS</h3>
                  <a href="#!" className="cta3-semiBold" onClick={togglePopup21}>Learn More</a>
                </div>
              </div>
              </>
          )}
            {/* Other Tab Services (Shopify, Walmart, Etsy) */}
          </div>
        </div>

        <div className="line-pattern">
          <img
            src="https://ecomexpertsllc.s3.amazonaws.com/lines-dark.webp"
            alt="pattern"
            width="1920px"
            height="113px"
          />
        </div>
      </div>

      {/* Popup JSX Code Area */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Amazon Store Creation</h2>
          <p className='text-white text-md py-6'>AKC Link Tech Digitizing stands out as a leading Amazon company, offering valuable assistance to businesses in navigating the dynamic ecommerce landscape through a strategic approach. Our focus revolves around implementing a competitive strategy that enhances brand visibility and maximizes sales growth.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup}
        ></div>
      )}


      {/* Popup JSX Code Area */}
      {showPopup2 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Amazon FBA Automation  </h2>
          <p className='text-white text-md py-6'>Experience a seamless ecommerce journey with our commitment to the Fulfillment by Amazon (FBA) program. Our fully automated approach ensures optimal performance, covering labeling, packing, product warehousing, and shipping. We guarantee a hassle-free experience for our clients throughout the entire process.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup2}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup2 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup2}
        ></div>
      )}

      {/* Popup JSX Code Area */}
      {showPopup3 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Amazon Private Labelled</h2>
          <p className='text-white text-md py-6'>Unlock the potential of your brand with our Amazon Private Label Services. We specialise in crafting personalised strategies for product development, packaging, and branding. Our services empower you to launch exclusive, private-labeled products on the Amazon platform, distinguishing your brand in the competitive marketplace. From market research to product design and launch, we guide you through every stage, ensuring quality and compliance.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup3}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup3 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup3}
        ></div>
      )}

    {/* 4 */}

    {/* Popup JSX Code Area */}
    {showPopup4 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Amazon A+ Content</h2>
          <p className='text-white text-md py-6'>Elevate your product listings on Amazon with our A+ Content Services. Our expert team enhances your product pages by incorporating visually appealing and informative content, effectively showcasing the unique features and benefits of your products. Through compelling storytelling, enhanced images, and engaging multimedia, we elevate the shopping experience for potential customers.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup4}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup4 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup4}
        ></div>
      )}

      {/* 5 */}

    {/* Popup JSX Code Area */}
    {showPopup5 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Amazon Product Hunting</h2>
          <p className='text-white text-md py-6'>At Ecom Experts, we understand the fast-paced world of ecommerce. We go beyond merely adapting – we thrive by helping brands gain meaningful visibility. Through advanced product listing and optimization strategies, we ensure your brand not only stays relevant but becomes a standout presence in the competitive landscape. </p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup5}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup5 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup5}
        ></div>
      )}

      {/* 6 */}

    {/* Popup JSX Code Area */}
    {showPopup6 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Amazon PPC</h2>
          <p className='text-white text-md py-6'>Supercharge your Amazon advertising strategy with our PPC (Pay-Per-Click) Services. We specialize in optimizing your campaigns to maximize visibility and drive targeted traffic to your products. Our data-driven approach ensures efficient budget allocation, strategic keyword targeting, and compelling ad creatives. From campaign setup to continuous monitoring and optimization, we tailor our services to boost your ROI and sales on the Amazon platform.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup6}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup4 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup6}
        ></div>
      )}

      {/* 7 */}

    {/* Popup JSX Code Area */}
    {showPopup7 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Walmart Store Creation</h2>
          <p className='text-white text-md py-6'>AKC stands as a leading automation agency, dedicated to propelling brands to the pinnacle by cultivating captivating identities. Through our extensive online ecom store design services, we mold brand stores with distinctive features and a core ideology. Embracing remarkable ideas and patterns, we reshape brands and enhance their clientele.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup7}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup7 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup7}
        ></div>
      )}

      {/* 8 */}

    {/* Popup JSX Code Area */}
    {showPopup4 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Walmart Private Labelled</h2>
          <p className='text-white text-md py-6'>Discover the capabilities of your brand through our Walmart Private Label Services. We specialize in creating personalized strategies for product development, packaging, and branding. Our services enable you to introduce exclusive, private-labeled products on the Amazon platform, setting your brand apart in the competitive marketplace.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup8}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup8 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup8}
        ></div>
      )}

      {/* 9 */}

    {/* Popup JSX Code Area */}
    {showPopup4 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Walmart Dropshipping</h2>
          <p className='text-white text-md py-6'>Discover streamlined ecommerce success with our Walmart Dropshipping Services. We seamlessly handle inventory, order fulfillment, and shipping logistics, ensuring your business thrives effortlessly. Partner with us to unlock the potential of dropshipping on Walmart, maximizing sales and minimizing operational complexities for a more efficient and profitable venture.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup9}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup9 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup9}
        ></div>
      )}

      {/* 10 */}

    {/* Popup JSX Code Area */}
    {showPopup10 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Walmart Product Hunting</h2>
          <p className='text-white text-md py-6'>Walmart product hunting involves identifying profitable products to sell on e-commerce platforms, primarily by sourcing them from Walmart. The process includes researching items with high demand, low competition, and good profit margins. Sellers typically look for products that can be resold on marketplaces like Amazon, eBay, or even Walmart’s own platform. Successful product hunting involves analyzing pricing, customer reviews, and sales trends to ensure that the selected products will generate a good return on investment. This strategy is popular among drop shippers and resellers looking to capitalize on Walmart’s vast inventory.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup10}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup10 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup10}
        ></div>
      )}

      {/* 11 */}

    {/* Popup JSX Code Area */}
    {showPopup11 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Walmart WFS</h2>
          <p className='text-white text-md py-6'>Walmart Fulfillment Services (WFS) is a program where Walmart handles storage, packing, and shipping of products for third-party sellers who sell on Walmart.com. Similar to Amazon's FBA (Fulfillment by Amazon), WFS allows sellers to send their inventory to Walmart's fulfillment centers, where Walmart manages the logistics, ensuring fast and reliable delivery to customers. The service includes benefits like Walmart’s two-day delivery, customer service, and returns management. Sellers using WFS can leverage Walmart's vast distribution network, allowing them to focus on scaling their business while Walmart handles fulfillment.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup11}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup11 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup11}
        ></div>
      )}

      {/* 12 */}

    {/* Popup JSX Code Area */}
    {showPopup12 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Shopify Store Creation</h2>
          <p className='text-white text-md py-6'>With a focus on scalability and performance, our Shopify Store Creation services lay the foundation for a successful ecommerce venture. Let us navigate the complexities of setting up your store, allowing you to focus on what matters most – growing your business. Experience the ease and excellence of our Shopify Store Creation services today.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup12}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup12 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup12}
        ></div>
      )}

      {/* 13 */}

    {/* Popup JSX Code Area */}
    {showPopup13 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Shopify Automation</h2>
          <p className='text-white text-md py-6'>Our dropshipping agency service is designed with entrepreneurs and mid-sized businesses in mind, providing a hassle-free supplier search and fulfillment process. We're here to assist in discovering and enhancing the sales of top-performing dropshipping products, all with personalized labels.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup13}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup13 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup13}
        ></div>
      )}

      {/* 14 */}

    {/* Popup JSX Code Area */}
    {showPopup14 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Shopify Store Optimization</h2>
          <p className='text-white text-md py-6'>With our proven strategies, your Shopify store becomes a conversion powerhouse, turning visitors into loyal customers. Stay ahead of the competition, as we continuously refine and adapt your store for optimal performance in the ever-evolving ecommerce landscape. Experience the transformation – elevate your Shopify store with our Optimization Services today!</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup14}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup14 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup14}
        ></div>
      )}

      {/* 15 */}

    {/* Popup JSX Code Area */}
    {showPopup15 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Shopify Product Hunting</h2>
          <p className='text-white text-md py-6'>We navigate the ecommerce landscape to discover hidden gems, ensuring your store stands out and stays ahead of the competition. With our expertise in Shopify Product Hunting, seize the opportunity to expand your product range and attract a diverse customer base, all while maximizing profitability and staying at the forefront of industry trends.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup15}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup15 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup15}
        ></div>
      )}

      {/* 16 */}

    {/* Popup JSX Code Area */}
    {showPopup16 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Shopify Store Marketing</h2>
          <p className='text-white text-md py-6'>Embrace a holistic marketing strategy that positions your brand at the forefront of the digital marketplace. With our Shopify Store Marketing services, witness the transformative power of strategic promotion, enhancing your store's visibility, and ultimately, your bottom line.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup16}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup16 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup16}
        ></div>
      )}

      {/* 17 */}

    {/* Popup JSX Code Area */}
    {showPopup11 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Etsy Store Creation</h2>
          <p className='text-white text-md py-6'>With a focus on scalability and performance, our Etsy Store Creation services lay the foundation for a successful ecommerce venture. Let us navigate the complexities of setting up your store, allowing you to focus on what matters most – growing your business. Experience the ease and excellence of our Etsy Store Creation services today.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup17}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup17 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup17}
        ></div>
      )}

      {/* 18 */}

    {/* Popup JSX Code Area */}
    {showPopup18 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Etsy Automation</h2>
          <p className='text-white text-md py-6'>Our dropshipping agency service is designed with entrepreneurs and mid-sized businesses in mind, providing a hassle-free supplier search and fulfillment process. We're here to assist in discovering and enhancing the sales of top-performing dropshipping products, all with personalized labels.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup18}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup18 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup18}
        ></div>
      )}

      {/* 19 */}

    {/* Popup JSX Code Area */}
    {showPopup19 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Etsy Store Optimization</h2>
          <p className='text-white text-md py-6'>With our proven strategies, your Etsy store becomes a conversion powerhouse, turning visitors into loyal customers. Stay ahead of the competition, as we continuously refine and adapt your store for optimal performance in the ever-evolving ecommerce landscape. Experience the transformation – elevate your Etsy store with our Optimization Services today!</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup19}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup19 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup19}
        ></div>
      )}

      {/* 20 */}

    {/* Popup JSX Code Area */}
    {showPopup20 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Etsy Product Hunting</h2>
          <p className='text-white text-md py-6'>We will transform your ecommerce strategy with expertly curated products. Our dedicated team employs strategic research and trend analysis to uncover high-potential, in-demand items for your Etsy store. From niche finds to trending bestsellers, our Product Hunting Services aim to elevate your inventory and keep your offerings fresh and captivating.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup20}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup20 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup20}
        ></div>
      )}

      {/* 21 */}

    {/* Popup JSX Code Area */}
    {showPopup21 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            padding: '20px',
            backgroundColor: 'rgb(39 39 39 / var(--tw-bg-opacity))',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            borderRadius: '10px',
          }}
        >
          <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: '20px' }}>Etsy Store Marketing</h2>
          <p className='text-white text-md py-6'>Embrace a holistic marketing strategy that positions your brand at the forefront of the digital marketplace. With our Etsy Store Marketing services, witness the transformative power of strategic promotion, enhancing your store's visibility, and ultimately, your bottom line.</p>
          <button className='mt-8 font-semibold'
            style={{
              backgroundColor: '#f2bd58',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={togglePopup21}
          >
            Close
          </button>
        </div>
      )}
      {/* Popup Overlay */}
      {showPopup21 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999,
          }}
          onClick={togglePopup21}
        ></div>
      )}
    </section>
  );
};

export default ServicesSection;
