import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';


const Testimonials = ({testimonialData}) => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto mb-8 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          What Our Clients Say
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-6xl"
      >
        {testimonialData && testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="p-8 text-white bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {/* Avatar */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 border-4 border-yellow-400 rounded-full"
                />
              </div>
              <p className="mb-4 italic">{testimonial.feedback}</p>
              <h4 className="text-lg font-bold text-yellow-400">
                {testimonial.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
