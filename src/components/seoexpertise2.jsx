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
          <FaUsers color="#fb923c" size="30px" />
          <h2 className='font-semibold' style={{ fontSize: '24px', marginBottom: '5px', color: 'white' }}>
            Full Service SMM Expertise
          </h2>
          <p className='font-light' style={{ fontSize: '16px', color: 'white' }}>
          Our SMM specialists are well equipped with the strategies. Our SMM expertise covers all aspects of on-page and off-page SMM.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaShareAlt color="#fb923c" size="30px" />
          <h2 className='font-semibold' style={{ fontSize: '24px', marginBottom: '5px', color: 'white' }}>
            Content Sharing Strategy
          </h2>
          <p className='font-light' style={{ fontSize: '16px', color: 'white' }}>
            Our team develops tailored content sharing strategies that maximize your reach and enhance your brand visibility across various platforms.
          </p>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 300px', padding: '10px' }}>
          <FaComments color="#fb923c" size="30px" />
          <h2 className='font-semibold' style={{ fontSize: '24px', marginBottom: '5px', color: 'white' }}>
            Real-Time Feedback
          </h2>
          <p className='font-light' style={{ fontSize: '16px', color: 'white' }}>
            We monitor audience feedback in real time, allowing us to adapt your strategy for optimal engagement and effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SMMExpertise;
