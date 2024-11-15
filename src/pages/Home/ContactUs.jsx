import React, { useState } from 'react';
import Layout from '../../layout';
import Banner from './sections/Banner';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedInterests: [],
    company: '',
    category: '',
    message: ''
  });

  const [selectedInterests, setSelectedInterests] = useState([]);

  // List of options for the interests
  const interestsOptions = [
    'A new website',
    'Logo & Branding',
    'E-Commerce Experts',
    'App Development',
    'SEO / SMM support',
    'Printing & Packaging',
  ];

  // Function to handle button toggle
  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((selected) => selected !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
    setFormData((prevData) => ({
      ...prevData,
      selectedInterests: [...selectedInterests],
    }));
  };

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/contact', formData);
      alert(response.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        selectedInterests: [],
        company: '',
        category: '',
        message: ''
      });
      setSelectedInterests([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Layout>
      <Banner/>
      <div className='bg-white'>
      <section className="py-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto bg-white">
  <div className="max-w-full flex flex-col md:flex-row items-center justify-center mx-auto px-4 py-10 text-gray-600 overflow-hidden md:px-8 bg-white">
    <div className="flex-1 mt-10 w-full p-4 sm:p-6 md:p-10 lg:p-16 bg-white">
      <form className="max-w-full w-full mx-auto bg-white" onSubmit={handleSubmit}>
        <div className="relative flex justify-center z-0 w-full mb-5 bg-white">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-400 text-center">Let's get your project started.</h1>
              </div>

              <div className="mt-24">
                <div className="mb-5">
                  <p className="block text-md font-medium mb-3 text-black font-semibold">I am interested in:</p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {interestsOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`py-2 px-4 border rounded-md font-semibold hover:bg-orange-400 hover:text-black ${
                          selectedInterests.includes(interest) ? 'bg-orange-400 text-black font-semibold' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Name Input */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
                  placeholder=" "
                  required
                  value={formData.name} onChange={handleChange}
                />
                <label htmlFor="floating_name" className="font-semibold peer-focus:font-medium absolute text-sm text-gray-500">Full Name</label>
              </div>

              {/* Email Input */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
                  placeholder=" "
                  required
                  value={formData.email} onChange={handleChange}
                />
                <label htmlFor="floating_email" className="font-semibold peer-focus:font-medium absolute text-sm text-gray-500">Email Address</label>
              </div>

              {/* Contact and Company Inputs */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
                    placeholder=" "
                    required
                    value={formData.phone} onChange={handleChange}
                  />
                  <label htmlFor="floating_phone" className="font-semibold peer-focus:font-medium absolute text-sm text-gray-500">Contact</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
                    placeholder=" "
                    required
                    value={formData.company} onChange={handleChange}
                  />
                  <label htmlFor="floating_company" className="font-semibold peer-focus:font-medium absolute text-sm text-gray-500">Company (Ex. Google)</label>
                </div>
              </div>

              {/* Category Select */}
              <div className="relative z-0 w-full mb-5 mt-5 group">
                <label htmlFor="category" className="block text-sm font-sm mb-2 mx-2 text-gray-500">I am Contacting for</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-gray-200"
                >
                  <option value="redisgn">Cancellation</option>
                  <option value="newlogo">Check-out Payment help</option>
                  <option value="newlogo">Design Assistance</option>
                  <option value="newlogo">Design Services</option>
                  <option value="newlogo">Order Status / Tracking</option>
                  <option value="newlogo">Pricing / Promotion</option>
                  <option value="newlogo">Problem With Order</option>
                  <option value="newlogo">Product Information / Question</option>
                  <option value="newlogo">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="relative z-0 w-full mb-5 mt-5 group">
                <textarea
                  name="message"
                  id="floating_textarea"
                  rows="4"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
                  placeholder=" "
                  required
                  value={formData.message} onChange={handleChange}
                ></textarea>
                <label htmlFor="floating_textarea" className="font-semibold peer-focus:font-medium absolute text-sm text-gray-500">Your Message</label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-black font-normal mt-5 bg-orange-400 hover:bg-orange-500 rounded-lg text-sm sm:text-base lg:text-lg w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5"
                  >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  )
};

export default ContactUs;
