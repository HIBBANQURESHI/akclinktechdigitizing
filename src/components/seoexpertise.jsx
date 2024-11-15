import React from 'react';
import { FaSearch, FaChartBar, FaGlobe } from 'react-icons/fa';

function SEOExpertise() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#1d4ed8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#1d4ed8',
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', zIndex: 1 }}>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaSearch color="#fb923c" size="30px" />
          <h2 className='font-semibold' style={{ fontSize: '24px', marginBottom: '5px', color: 'white' }}>
            Full-Service SEO Expertise
          </h2>
          <p className='font-light' style={{ fontSize: '16px', color: 'white' }}>
            Our SEO specialists are well equipped with the strategies. Our SEO expertise covers all aspects of on-page and off-page SEO.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaChartBar color="#fb923c" size="30px" />
          <h2 className='font-semibold' style={{ fontSize: '24px', marginBottom: '5px', color: 'white' }}>
            Audit and Analysis
          </h2>
          <p className='font-light' style={{ fontSize: '16px', color: 'white' }}>
            Our analytical experts perform a formal inspection of your business's virtual presence. We gather the errors that are causing your business detriment.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaGlobe color="#fb923c" size="30px" />
          <h2 className='font-semibold' style={{ fontSize: '24px', marginBottom: '5px', color: 'white' }}>
            Visibility and Architecture
          </h2>
          <p className='font-light' style={{ fontSize: '16px', color: 'white' }}>
            We build your business presence for visibility and recognition in the market with combined expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SEOExpertise;
