import React from 'react';
import { FaUsers, FaShareAlt, FaComments } from 'react-icons/fa';

function SMMExpertise() {
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
          <FaUsers color="black" size="30px" />
          <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
            Full Service SMM Expertise
          </h2>
          <p style={{ fontSize: '16px', color: 'black' }}>
          Our SMM specialists are well equipped with the strategies. Our SMM expertise covers all aspects of on-page and off-page SMM.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaShareAlt color="black" size="30px" />
          <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
            Content Sharing Strategy
          </h2>
          <p style={{ fontSize: '16px', color: 'black' }}>
            Our team develops tailored content sharing strategies that maximize your reach and enhance your brand visibility across various platforms.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaComments color="black" size="30px" />
          <h2 style={{ fontSize: '24px', marginBottom: '5px', color: 'black' }}>
            Real-Time Feedback
          </h2>
          <p style={{ fontSize: '16px', color: 'black' }}>
            We monitor audience feedback in real time, allowing us to adapt your strategy for optimal engagement and effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SMMExpertise;
