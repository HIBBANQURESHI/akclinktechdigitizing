// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/thumbs';
// import 'swiper/css/effect-fade';
// import { Navigation, Pagination, Thumbs, Autoplay, EffectFade } from 'swiper/modules';

// // SampleGallery Component
// const SampleGallery = ({ galleryData }) => {
//   const [activeTab, setActiveTab] = useState(Object.keys(galleryData)[0]); // Set the first tab as default active tab
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   // Effect to reset thumbsSwiper when modal is closed
//   useEffect(() => {
//     if (!modalOpen) {
//       setThumbsSwiper(null);
//     }
//   }, [modalOpen]);

//   // Function to open the modal with the clicked image
//   const openModal = (index) => {
//     setCurrentImageIndex(index);
//     setModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => setModalOpen(false);

//   // Function to handle tab change dynamically
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const imagesToDisplay = galleryData[activeTab] || [];

//   return (
//     <section className="py-12 bg-black">
//       <div className="container mx-auto text-center">
//         <h2 className="mb-4 text-4xl font-semibold text-white">Brilliant Ideas That Create Great Value</h2>
//         <p className="mb-8 text-yellow-400">
//           A showcase of our latest images. Click any image to view the full gallery.
//         </p>

//         {/* Tab Navigation */}
//         {/* <div className="flex justify-center mb-8 space-x-4">
//           {Object.keys(galleryData).map((tab) => (
//             <button
//               key={tab}
//               className={`px-4 py-2 text-white ${activeTab === tab ? 'border-b-2 border-yellow-400' : ''}`}
//               onClick={() => handleTabChange(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div> */}

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {imagesToDisplay.map((image, index) => (
//             <div
//               key={image.id}
//               className="relative cursor-pointer group"
//               onClick={() => openModal(index)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="object-cover w-full h-64 rounded-lg shadow-md"
//               />
//               <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
//                 <span className="text-xl font-bold text-yellow-400">View</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {modalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//             <div className="relative w-full max-w-4xl p-6 mx-auto bg-white rounded-lg">
//               <button
//                 className="absolute top-0 right-0 text-4xl font-bold text-black-400"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>

//               <Swiper
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
//                 modules={[Navigation, Pagination, Thumbs, Autoplay, EffectFade]}
//                 effect="fade"
//                 lazy={true}
//                 autoplay={{ delay: 5000 }}
//                 className="w-full h-96"
//                 initialSlide={currentImageIndex}
//               >
//                 {imagesToDisplay.map((image) => (
//                   <SwiperSlide key={image.id}>
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className="object-cover w-full rounded-lg swiper-lazy h-96"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Thumbnail Swiper */}
//               <Swiper
//                 onSwiper={setThumbsSwiper}
//                 spaceBetween={10}
//                 slidesPerView={4}
//                 watchSlidesProgress
//                 className="mt-4"
//               >
//                 {imagesToDisplay.map((image) => (
//                   <SwiperSlide key={image.id}>
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className="object-cover w-full h-20 rounded-lg"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default SampleGallery;












import React, { useState, useEffect } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Thumbs, Autoplay, EffectFade } from 'swiper/modules';

const SampleGallery = ({ galleryData }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(galleryData)[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (!modalOpen) {
      setThumbsSwiper(null);
    }
  }, [modalOpen]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const imagesToDisplay = galleryData[activeTab] || [];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-semibold text-white">Brilliant Ideas That Create Great Value</h2>
        <p className="mb-8 text-yellow-400">
          A showcase of our latest images. Click any image to view the full gallery.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {imagesToDisplay.map((image, index) => (
            <div
              key={image.id}
              className="relative cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-64 rounded-lg shadow-md"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                <span className="text-xl font-bold text-yellow-400">View</span>
              </div>
            </div>
          ))}
        </div>

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl p-6 mx-auto bg-white rounded-lg">
              <button
                className="absolute top-0 right-0 text-4xl font-bold text-black-400"
                onClick={closeModal}
              >
                &times;
              </button>

              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[Navigation, Pagination, Thumbs, Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000 }}
                className="w-full h-96"
                initialSlide={currentImageIndex}
              >
                {imagesToDisplay.map((image) => (
                  <SwiperSlide key={image.id} lazy>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full rounded-lg swiper-lazy h-96"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                className="mt-4"
              >
                {imagesToDisplay.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-20 rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SampleGallery;
