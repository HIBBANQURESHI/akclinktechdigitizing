import React from 'react';
import hero from '../../assets/banner/hero-aside.png'

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.content}>
        <h2 style={styles.subtitle}>Amplify Your Ecommerce by</h2>
        <h1 style={styles.title}>Amazon, Walmart & Shopify stores with Ecom Experts</h1>
        <button style={styles.button} onMouseOver={hoverEffect} onMouseOut={normalEffect}>
          Book a Free Consultation
        </button>
      </div>
      <div style={styles.imageContainer} className='mb-8'>
        <img
          src={hero}
          alt="Ecom Expert"
          style={styles.image}
          onMouseEnter={(e) => (e.currentTarget.style.filter = styles.imageHover.filter)}
          onMouseLeave={(e) => (e.currentTarget.style.filter = styles.image.filter)}
        />
      </div>
    </div>
  );
};

// Hover effect functions
const hoverEffect = (e) => {
  e.target.style.backgroundColor = 'transparent';
  e.target.style.color = '#fff';
  e.target.style.border = '2px solid #F9A825';
};

const normalEffect = (e) => {
  e.target.style.backgroundColor = '#FBC02D';
  e.target.style.color = '#000';
  e.target.style.border = 'none';
};

const styles = {
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '8px',
    backgroundImage: 'url(/src/assets/banner/ecom.png)',
    backgroundSize: 'cover',
    flexWrap: 'wrap', // Ensure wrapping on smaller screens
  },
  content: {
    maxWidth: '600px',
    color: '#fff',
    margin: '20px',
    textAlign: 'left', // Align text left on larger screens
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'normal',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#f9a825',
    color: '#000',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: '0.3s',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px', // Adds spacing for smaller screens
  },
  image: {
    width: '100%',
    maxWidth: '350px',
    height: 'auto',
    borderRadius: '5px',
    filter: 'grayscale(100%)', // Make image black and white
    transition: 'filter 0.1s ease-in-out', // Smooth transition
  },
  imageHover: {
    filter: 'grayscale(0%)', // Restore color on hover
  },
};

// Media Queries
const mediaQueries = {
  '@media (max-width: 1024px)': {
    heroContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    content: {
      textAlign: 'center', // Center text on medium screens
      margin: '10px',
    },
    title: {
      fontSize: '30px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
    },
  },
  '@media (max-width: 768px)': {
    subtitle: {
      fontSize: '20px',
    },
    title: {
      fontSize: '28px',
    },
  },
  '@media (max-width: 480px)': {
    content: {
      margin: '10px',
    },
    title: {
      fontSize: '24px',
    },
    subtitle: {
      fontSize: '18px',
    },
    button: {
      fontSize: '14px',
      padding: '8px 15px',
    },
  },
};

// Combine styles with media queries
const combinedStyles = { ...styles, ...mediaQueries };

export default HeroSection;
