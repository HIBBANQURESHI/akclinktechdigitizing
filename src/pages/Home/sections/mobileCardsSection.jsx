import React, { useEffect } from 'react'; 
import { motion } from 'framer-motion';
import demoImage from '../../../assets/banner/demo-app-image-1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import app3 from "../../../assets/app-image/9.png";
import app4 from "../../../assets/app-image/8.png";
import app1 from "../../../assets/app-image/1.png";
import app2 from "../../../assets/app-image/2.png";
import app5 from "../../../assets/app-image/3.png";
import app6 from "../../../assets/app-image/4.png";
import app7 from "../../../assets/app-image/6.png";
import app8 from "../../../assets/app-image/5.png";
import icon1 from "../../../assets/app-image/icon1.png";
import icon2 from "../../../assets/app-image/app-icons.png";
import icon3 from "../../../assets/app-image/icon3.png";
import icon4 from "../../../assets/app-image/icon4.png";
import bg from "../../../assets/app-image/appbg.jpg";
import './mobileAppSlider.css'

const appData = [
  { 
    id: 0, 
    icon1: icon4,
    name: 'Education', 
    description: 'At AKC Link Tech, we empower education through innovative applications that enhance learning, streamline administration, and improve communication for educators and students.', 
    image1: app3,
    image2: app4,  // Adding second image
  },
  { 
    id: 1,
    icon1: icon3,
    name: 'Doctor', 
    description: 'AKC Link Tech drives healthcare innovation with our apps for doctors, enhancing efficiency and patient care while being a key component of the healthcare industry.', 
    image1: app1,
    image2: app2,  // Adding second image
  },
  { 
    id: 2, 
    icon1: icon2,
    name: 'Restaurant', 
    description: 'AKC Link Tech is at the forefront of restaurant technology, offering solutions that enhance efficiency and customer engagement, making us an essential component of the dining industry.', 
    image1: app5,
    image2: app6,  // Adding second image
  },
  { 
    id: 3, 
    icon1: icon1,
    name: 'Ecommerce', 
    description: 'AKC Link Tech is a leading provider of innovative ecommerce solutions, enhancing online retail experiences and serving as a crucial component of the digital marketplace ecosystem.', 
    image1: app7,
    image2: app8,  // Adding second image
  },
  // Add more as needed
];

export default function AppCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col pt-12 gap-8 p-8 bg-gray-100 from-black to-gray-800 overflow-hidden">
      <h2 className="mb-8 text-4xl font-bold text-center text-orange-400 pt-12 mt-12"></h2>
      
      <div className="grid gap-8 lg:grid-cols-1" style={{width:'80vw', margin:'0 auto'}}>
        {appData.map(app => (
          <motion.div 
            key={app.id}
            className="app-dev relative flex my-28 flex-col items-center transition-transform transform bg-white rounded-lg shadow-lg lg:flex-row bg-opacity-10 hover:scale-105"
            style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'250px'}}
          >
            {/* Card content (text on the left) */}
            <div className="flex flex-col items-start p-8 lg:w-1/2">
            <img 
                src={app.icon1} 
                alt={app.name} 
                className="block object-contain w-36 m-4 lg:w-36 text-orange-400" 
                style={{width:'70px'}}
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              />
              <h3 className="font-app-size text-2xl font-bold text-orange-400">{app.name}</h3>
              <p className="text-white">{app.description}</p>
            </div>

            {/* Images section (right side) */}
            <div className="app-none relative flex items-center justify-center w-full h-auto lg:w-1/2 lg:h-80 space-x-4" style={{marginBottom:'220px',position:'relative'}}>
              {/* First image */}
              <img 
                src={app.image1} 
                alt={app.name} 
                className="app-image block object-contain w-36 m-4 lg:w-36" 
                style={{height:'550px', width:'550px'}}
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              />
              
              {/* Second image */}
              <img 
                src={app.image2} 
                alt={`${app.name}-secondary`} 
                className="app-image app-image-a block object-contain w-36 m-4 lg:w-36" 
                style={{height:'550px', width:'550px',position:'absolute',right:'-150px'}}
                data-aos="zoom-in"
                data-aos-anchor-placement="bottom-bottom"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
