import React from 'react';
import './index.css';
import Testi from '../testimonial';
import test1 from '../../assets/test1.jpg';
import test2 from '../../assets/test2.jpg';

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "Their team swiftly set up my Shopify store. Sales are booming!",
      name: "Olivia Garcia",
      title: "Director, CEO - Maxcom",
      img: "https://ecomexpertsllc.s3.amazonaws.com/user1.jpg",
    },
    {
      text: "Great service, very professional. Highly recommend to others!",
      name: "Liam Jones",
      title: "Senior Designer - Creative Agency",
      img: "https://ecomexpertsllc.s3.amazonaws.com/user2.jpg",
    },
    {
      text: "Their product selection for my store was spot-on. Seeing great returns!",
      name: "Barbara Jackson",
      title: "Manager - S&N Stores",
      img: "https://ecomexpertsllc.s3.amazonaws.com/user3.jpg",
    },
    {
      text: "Superb maintenance of my Amazon store. Sales have doubled.",
      name: "Andrew Devis",
      title: "Founder - Carz Pro",
      img: "https://ecomexpertsllc.s3.amazonaws.com/user4.jpg",
    },
    {
      text: "Fantastic support throughout my entire project. Will definitely return!",
      name: "Emma Smith",
      title: "Owner - Trendy Styles",
      img: "https://ecomexpertsllc.s3.amazonaws.com/user5.jpg",
    },
    {
        text: "I couldn't be happier with the design of my online store. It's user-friendly and attractive!",
        name: "Liam Johnson",
        title: "Founder - TechWave",
        img: "https://ecomexpertsllc.s3.amazonaws.com/user2.jpg",
      },
  {
        text: "The team provided exceptional support throughout the process. Highly recommend!",
        name: "Emma Wilson",
        title: "Marketing Manager - GreenLeaf",
        img: "https://ecomexpertsllc.s3.amazonaws.com/user3.jpg",
      },
  {
        text: "Thanks to their expertise, my store is thriving. The sales have increased significantly!",
        name: "Noah Smith",
        title: "Owner - Trendy Ties",
        img: "https://ecomexpertsllc.s3.amazonaws.com/user4.jpg",
      },
  {
        text: "The entire setup process was seamless. I love how my brand is represented online!",
        name: "Sophia Brown",
        title: "Co-Founder - Vintage Vibes",
        img: "https://ecomexpertsllc.s3.amazonaws.com/user5.jpg",
      },
  {
        text: "I received outstanding service from start to finish. My store has never looked better!",
        name: "James Lee",
        title: "CEO - Fresh Fashions",
        img: "https://ecomexpertsllc.s3.amazonaws.com/user6.jpg",
      },
  
  ];

  return (
    <section className="testimonials-section">
      <div className="top-row">
        <div className="inner-wrap">
          <div className="left-col" style={{ color: 'rgb(255, 255, 255)' }}>
            <h3 className="h2-regular aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
              Testimonials
            </h3>
            <h3 className="h1 aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
              Our customers sharing<br />their experience
            </h3>
            <div className="videoSlider swiper-container swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-next swiper-slide-prev" data-swiper-slide-index="1">
                  <div className="thumbnail">
                    <img src={test1} alt="Thumbnail" />
                  </div>
                  <div className="bottom">
                    <button>
                      <img src="data:image/webp;base64,UklGRtIBAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSBIBAAABgFXbTl1rS4gDcEIdcBxUAhKQgAQkVEIkICESKiHnXUju4zciJgCTKZc+RFVV+KiJYJcq62UuwUZincxpXWJdKHlNZF3cw4Jy6nLZpzU12ebQUKMjTIiiZiVciqKGha4MNT3ou6bG21e7mi9fRLF3hk9dHfKHrC7TO/HBb5I6TS/shQFEdUtA8VMB9sMgdUzJU66eyuGps6chnkT/3eJJhifuno7iqWZPG3kisB8Gqp8CkJ8AgL0wACQv2wvYh+Bt8pHfgT10fIynPQmfUOzt+LZZa/iahq2BiySWJFxBFDsScD0OK4MwtdlohMm7rDsL5se+igOWZlnBG5ZvPIs3mIyFr3El2KWtHiwvMnq5ESYDVlA4IJoAAABQBgCdASo8ADwAPpFCmUglpCKhMBgIALASCWkAFcAGBD4ASjMYl0E5RfLTDuN17T+0r7XMod9Pj7ajkAD+8E+//3d3/+7iP//dn3/63wKHXKD2M1Pv31SpLKlHS5IX14TzwHud6F3kn+D43VHwjoQRhJMa9ncvSSMz6bAq/WM87pn9V/XKQCZ+dUuP3Kb//dnv/7sK//91gAAA" alt="Play" />
                    </button>
                    <div className="details">
                      <p className="name">Eliza Grace</p>
                      <p className="title">Director - Bombas</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1">
                  <div className="thumbnail">
                    <img src={test2} alt="Thumbnail" />
                  </div>
                  <div className="bottom">
                    <button>
                      <img src="data:image/webp;base64,UklGRtIBAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSBIBAAABgFXbTl1rS4gDcEIdcBxUAhKQgAQkVEIkICESKiHnXUju4zciJgCTKZc+RFVV+KiJYJcq62UuwUZincxpXWJdKHlNZF3cw4Jy6nLZpzU12ebQUKMjTIiiZiVciqKGha4MNT3ou6bG21e7mi9fRLF3hk9dHfKHrC7TO/HBb5I6TS/shQFEdUtA8VMB9sMgdUzJU66eyuGps6chnkT/3eJJhifuno7iqWZPG3kisB8Gqp8CkJ8AgL0wACQv2wvYh+Bt8pHfgT10fIynPQmfUOzt+LZZa/iahq2BiySWJFxBFDsScD0OK4MwtdlohMm7rDsL5se+igOWZlnBG5ZvPIs3mIyFr3El2KWtHiwvMnq5ESYDVlA4IJoAAABQBgCdASo8ADwAPpFCmUglpCKhMBgIALASCWkAFcAGBD4ASjMYl0E5RfLTDuN17T+0r7XMod9Pj7ajkAD+8E+//3d3/+7iP//dn3/63wKHXKD2M1Pv31SpLKlHS5IX14TzwHud6F3kn+D43VHwjoQRhJMa9ncvSSMz6bAq/WM87pn9V/XKQCZ+dUuP3Kb//dnv/7sK//91gAAA" alt="Play" />
                    </button>
                    <div className="details">
                      <p className="name">Brooklyn Taylor</p>
                      <p className="title">General Manager - Martix Venture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span className="swiper-pagination-bullet"></span>
              </div>
            </div>
          </div>
          <div className="right-col py-8 gap-6">
            <div className="testimonial-container gap-6">
              <div className="testimonial-cards py-64">
              <Testi />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
