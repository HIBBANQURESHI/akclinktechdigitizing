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
        backgroundColor: '#f9a825',
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
          backgroundColor: '#f9a825',
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', zIndex: 1 }}>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaSearch color="black" size="30px" />
          <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
            Full-Service SEO Expertise
          </h2>
          <p style={{ fontSize: '16px', color: 'black' }}>
            Our SEO specialists are well equipped with the strategies. Our SEO expertise covers all aspects of on-page and off-page SEO.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaChartBar color="black" size="30px" />
          <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
            Audit and Analysis
          </h2>
          <p style={{ fontSize: '16px', color: 'black' }}>
            Our analytical experts perform a formal inspection of your business's virtual presence. We gather the errors that are causing your business detriment.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaGlobe color="black" size="30px" />
          <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
            Visibility and Architecture
          </h2>
          <p style={{ fontSize: '16px', color: 'black' }}>
            We build your business presence for visibility and recognition in the market with combined expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SEOExpertise;
