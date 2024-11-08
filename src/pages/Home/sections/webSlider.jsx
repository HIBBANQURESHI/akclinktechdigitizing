import { useState, useRef, useEffect } from 'react';    
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import app1 from "../../../assets/app-image/shop.png";
import app2 from "../../../assets/app-image/res.png";
import app3 from "../../../assets/app-image/drive.png";
import app4 from "../../../assets/app-image/book.png";
// import app5 from "../../../assets/app-image/5.png";
// import app6 from "../../../assets/app-image/6.png";
// import app7 from "../../../assets/app-image/7.png";
// import { style } from 'framer-motion/client';
import './mobileAppSlider.css';

const appData = [
  { id: 1, name: 'E-Commerce', description: 'Seamless shopping experience with diverse products and secure payments online!', image: app1 },
  { id: 2, name: 'Restaurants', description: 'Discover and order from your favorite restaurants quickly and easily!', image: app2 },
  { id: 3, name: 'Cab', description: 'Enjoy a Seamless Cab Booking Experience with Diverse Vehicle Options and Secure Online Payments!', image: app3 },
  { id: 4, name: 'Booking', description: 'Experience Hassle-Free Booking with a Variety of Options and Secure Online Payments!', image: app4 },
  // { id: 5, name: 'Easym', description: 'Description of Easym', image: app5 },
  // { id: 6, name: 'E-Services', description: 'Description of E-Services', image: app6 },
  // { id: 7, name: 'FacApp', description: 'Description of FacApp', image: app7 }
];

export default function WebSlider() {
  const [selectedApp, setSelectedApp] = useState(1);
  const swiperRef = useRef(null);

  const handleAppClick = (id) => {
    setSelectedApp(id);
    swiperRef.current.slideTo(id - 1); // Slide to the clicked app
  };

  // Automatically slide to the next app every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedApp(prevApp => {
        const nextId = prevApp < appData.length ? prevApp + 1 : 1; // Move to next ID or loop back to first
        swiperRef.current.slideTo(nextId - 1); // Slide to the next app
        return nextId; // Update the selected app to the next one
      });
    }, 2000); // Change slides every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center justify-end flex-col gap-8 p-8 py-12 text-white bg-gray-900 drop-shadow lg:flex-row lg:gap-16">
      {/* Left Side: Swiper Slider */}
      <div className="app relative flex items-center justify-center w-full lg:w-1/2" style={{width:'400px'}}>


        {/* Custom Mobile Frame */}
        <div className="relative w-[229px] h-[465px] bg-black rounded-[20px] border-4 border-gray-400 shadow-lg">
          {/* Notch */}
          <div className="absolute top-0 z-40 w-20 h-4 transform -translate-x-1/2 bg-black left-1/2 rounded-b-2xl"></div>

          {/* Swiper inside the mobile frame */}
          <Swiper
            autoplay={{ delay: 2500 }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="relative w-[222px] h-[480px] rounded-[20px] overflow-hidden"
          >
            {appData.map(app => (
              <SwiperSlide key={app.id}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="object-contain w-full rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Right Side: App List */}
      <div className="w-full lg:w-1/2 z-10 justify-center">
        <h3 className="font mb-4 text-2xl font-bold ms-4">WEBSITES</h3>
        <ul className="hidden space-y-4 lg:block">
          {appData.map(app => (
            <div key={app.id}>
              <li
                onClick={() => handleAppClick(app.id)} // Add click handler
                className={`m-font font-bold cursor-pointer p-4 transition-colors duration-300 ${
                  selectedApp === app.id
                    ? 'text-white'
                    : ''
                }`}
              >
                {/* Only the numbering will have a border */}
                <span className={`m-font font-semibold font-bold border-2 p-3 mr-2 ${
                  selectedApp === app.id ? 'border-yellow-300 text-yellow-300' : 'border-gray-300 text-white'
                }`}>
                  {app.id}
                </span>
                {app.name}
                {selectedApp === app.id && (
                  <p className="m-font d-size mt-6 ml-12 text-sm font-light">{app.description}</p>
                )}
              </li>
              {selectedApp === app.id && (
                <div className="relative flex ml-8" style={{marginBottom:'-10px', marginTop: '-15px'}}>
                  <div className="w-20 bg-yellow-300 h-[1px] bg-white" style={{marginTop: '-50px',marginLeft:'-130px' }}></div> {/* Horizontal line */}
                  <div className="w-3 h-3 bg-yellow-300 rounded-full" style={{marginTop: '-56px'}}></div>
                </div>
              )}
               {selectedApp === app.id && selectedApp < appData.length && (
                 <div className="relative flex ml-8" style={{paddingBottom:'-0px' , paddingTop: '-25px'}}>
                  <div className="w-[1px] h-14 bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </ul>

        {/* Numbered list for small screens */}
        <ul className="flex justify-center gap-2 lg:hidden">
          {appData.map(app => (
            <li
              key={app.id}
              onClick={() => handleAppClick(app.id)} // Add click handler for small screens
              className={`cursor-pointer p-2 border rounded-md text-center ${
                selectedApp === app.id
                  ? 'border-yellow-300 bg-yellow-300 text-black'
                  : 'border-gray-300 text-white'
              }`}
            >
              {app.id}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}