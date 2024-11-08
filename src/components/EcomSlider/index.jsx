import React from "react";
import Slider from "react-slick";
import "./slider.css";

// Image URLs
const images = [
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg1.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg2.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg3.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg4.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg5.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg6.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg7.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg8.webp",
  "https://ecomexpertsllc.s3.amazonaws.com/dummyImg9.webp",
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "303px", height: "444px" }} // Set dimensions here
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
