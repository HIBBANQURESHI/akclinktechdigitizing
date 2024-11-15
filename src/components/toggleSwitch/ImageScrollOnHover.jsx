import React from 'react';

// Sample image URLs (you can replace them with your desired URLs)
const imageUrls = [
  'https://logozeal.com/assets/front/images/portfolio/website/4.webp',
  'https://logozeal.com/assets/front/images/portfolio/website/2.webp',
  'https://logozeal.com/assets/front/images/portfolio/website/9.webp',
  'https://logozeal.com/assets/front/images/portfolio/website/7.webp',
  'https://logozeal.com/assets/front/images/portfolio/website/3.webp',
  'https://logozeal.com/assets/front/images/portfolio/website/8.webp',
];

const ImageScrollOnHover = () => {
  const styles = {
    body: {
      fontFamily: 'Rubik, sans-serif',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    title: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '3rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
      gap: '1rem',
      width: '100%',
      maxWidth: '1200px', // Set a maximum width for better layout
    },
    box: {
      position: 'relative',
      width: '100%',
      height: '270px',
      borderRadius: '5px',
      overflow: 'hidden', // Hide overflow to prevent overflow effect
      boxShadow: '0px 20px 46px 2px #bcc6ff', // Add shadow if desired
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
      transition: '8s all ease',
    },
  };

  return (
    <main style={styles.body}>
      <h1 style={styles.title} className='font-bold text-black'>Brilliant Ideas That Create Great Value</h1>
      <div style={styles.grid}>
        {imageUrls.map((url, index) => (
          <div key={index} style={styles.box}>
            <img
              src={url}
              alt={`Descriptive Alt Text ${index + 1}`}
              style={styles.image}
              onMouseEnter={(e) => (e.currentTarget.style.objectPosition = 'bottom')}
              onMouseLeave={(e) => (e.currentTarget.style.objectPosition = 'top')}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ImageScrollOnHover;
