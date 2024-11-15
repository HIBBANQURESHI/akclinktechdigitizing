import React, { useState } from 'react';
import bgImg from '../../assets/img/hero-special-banner.jpg'; // Import your image
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Chatbot from "../Chatbot";


const HeroService = ({ heading, description, primaryButtonText, secondaryButtonText, primaryButtonLink, secondaryButtonLink, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [phone, setPhone] = useState(''); // Phone state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    website: '',
    description: '',
  });

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      ...formData,
      phone,
    };

    try {
      const response = await fetch('http://localhost:3002/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        toggleModal(); // Close modal on success
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit the form');
    }
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-8 md:gap-x-16 px-0 p-8 text-white bg-gray-800 bg-center bg-cover md:flex-row md:p-16"
      style={{ backgroundImage: `url(${bgImg})`, paddingLeft: '0', paddingRight: '0' }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-md md:ml-24 text-center md:max-w-lg md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{heading}</h1>
        <p className="mb-6 text-base md:text-lg">{description}</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* Primary Button - Toggles Modal */}
          <button 
            onClick={toggleModal} 
            className="inline-block w-full px-4 py-2 text-sm font-medium text-black bg-orange-400 rounded-lg hover:bg-transparent hover:border-2 hover:border-orange-400 hover:text-white md:w-auto md:px-6 md:py-3 md:text-lg"
          >
            {primaryButtonText}
          </button>
          
          {/* Secondary Button */}
          <a 
            href="/contact-us"
            className="inline-block w-full px-4 py-2 text-sm font-light md:w-auto md:px-6 md:py-3 md:text-lg text-white bg-transparent rounded-lg hover:bg-orange-400 hover:text-black"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Image Section - Hidden on small screens */}
      <div className="relative z-10 hidden mt-10 ml-20 md:block md:ml-8">
        <img 
          src={imageUrl} 
          alt="Vector" 
          className="w-150 h-150"  
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white border-black rounded-lg shadow dark:bg-gray-700 w-full max-w-md p-4">
            {/* Modal header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Please Fill the Form
              </h3>
              <button onClick={toggleModal} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black" placeholder="Type Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black" placeholder="example@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <div className="relative" onChange={handleChange}>
                  <PhoneInput
                   country={'us'} // Default country code (can be changed)
                   value={phone}
                   onChange={setPhone}
                   inputStyle={{
                     width: '100%', // Full width for responsive design
                     padding: '10px', // Padding for input
                     border: '1px solid #ccc', // Border styling
                     borderRadius: '8px', // Rounded corners
                     backgroundColor: '#f8f9fa', // Light background for input
                     color: '#000', // Text color
                     textAlign: 'left', // Align text to the left
                     fontSize: '16px', // Default font size
                     paddingLeft:'50px',
                   }}
                   placeholder="xxxx-xxxxxxx" // Placeholder text
                   required
                   dropdownStyle={{
                     borderRadius: '8px', // Consistent rounded corners for dropdown
                     border: '1px solid #ccc', // Border for dropdown
                     backgroundColor: '#f8f9fa', // Consistent background color
                     color: '#000',
                     paddingRight:'25%', // Text color for dropdown
                   }}
                   />

                    {/* Add a custom style for the PhoneInput container */}
                    <style jsx>{`
                      @media (max-width: 768px) {
                        .react-tel-input .form-control {
                          font-size: 14px; // Adjust font size for smaller screens
                        }
                      }
                      @media (min-width: 768px) {
                        .react-tel-input .form-control {
                          font-size: 16px; // Adjust font size for larger screens
                        }
                      }
                      .react-tel-input {
                        width: 100%;
                      }
                      .react-tel-input .form-control {
                        padding: 10px;
                        border-radius: 8px;
                        border: 1px solid #ccc;
                        background-color: #f8f9fa; // Light background for input
                        color: #000; // Text color
                        text-align: left; // Align text to the left
                      }
                     `}</style>
                  </div>
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-900 dark:text-white" onChange={handleChange}>Is this a RE-design or a New Project</label>
                  <select id="category" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black">
                    <option value="redisgn" className='text-black'>Re-design</option>
                    <option value="newlogo" className='text-black'>New Project</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-900 dark:text-white">Existing website if any</label>
                  <input type="text" id="website" name='website' value={formData.website} onChange={handleChange} className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black"  placeholder="www.example.com" required />
                </div>
                <div>
                  <textarea  type="text"  id="description" name='description' rows="4" value={formData.description} onChange={handleChange} className="text-black w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Write product description here"></textarea>
                </div>
              </div>
              <button type="submit" className="mt-4 w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-yellow-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroService;
