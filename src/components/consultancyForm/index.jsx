// import React, { useState } from 'react';


// const ConsultancyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',

//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-100 to-gray-800 p-6 pb-32">
//       <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="mb-6 text-3xl font-bold text-center text-yellow-500">Get Free Consultancy</h2>
//         <p className="mb-8 text-center text-gray-700">
//           If you're interested in speaking with us about an upcoming project, please fill out the form below, and we'll get in touch with you.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <textarea
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-3">
//             <input type="checkbox" id="newsletter" className="text-gray-600 focus:ring-0" />
//             <label htmlFor="newsletter" className="text-gray-700">
//               Subscribe to our weekly newsletter.
//             </label>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="w-1/3 py-2 font-semibold text-white transition-shadow bg-gray-800 rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg"
//             >
//               Submit Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ConsultancyForm;









import React, { useState } from 'react';
import './style.css';


const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    additionalMessage: '' // New field for additional message
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    // <div className="bg flex items-center justify-center bg-gray-100 to-gray-800 p-6 pb-32">
    //   <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
             <div className="bg flex items-center justify-center bg-gray-100 to-gray-800 p-6">
             <div className="w-full max-w-6xl p-6 bg-transparent rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-yellow-500">Get Free Consultancy</h2>
        <p className="mb-8 text-center text-white">
          If you're interested in speaking with us about an upcoming project, please fill out the form below, and we'll get in touch with you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                required
                pattern="[0-9]*" // Only numbers allowed
                inputMode="numeric" // Shows numeric keyboard on mobile
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Nature of the business you want us to create an app"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              required
              rows="1"
            />
          </div>
          
          {/* Additional Message Textarea */}
          <div>
            <textarea
              name="additionalMessage"
              placeholder="Give a shot description for Apps"
              value={formData.additionalMessage}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <input type="checkbox" id="newsletter" className="text-gray-600 focus:ring-0" />
            <label htmlFor="newsletter" className="text-white">
              Subscribe to our weekly newsletter.
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="relative w-1/3 py-2 font-semibold text-white bg-gray-800 rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-yellow-500 transition-transform transform translate-x-[-100%] group-hover:translate-x-0 duration-300 ease-out"></span>
              <span className="relative z-10">Submit Now</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultancyForm;

