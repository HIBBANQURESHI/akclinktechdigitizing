import React, { useState } from 'react';
import { toast } from 'react-toastify';

const OrderForm = ({ title, price }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      packageTitle: title,
      packagePrice: price,
    };

    try {
      const response = await fetch("http://localhost:3000/web-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        toast.success("Order submitted successfully!");
      } else {
        const result = await response.json();
        toast.error(`Failed to submit the order: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the order.");
    }
    setShowPopup(true);
  };

  return (
    <div className="order-form-container mx-auto my-10 p-6 md:p-8 lg:p-10 max-w-lg bg-blue-950 rounded-lg shadow-lg">
      <h2 className="text-left text-sm md:text-sm lg:text-sm font-light text-orange-400">Subscribe Now and Get</h2>
      <h2 className="text-left text-sm md:text-sm lg:text-sm font-light text-orange-400">Special Discount on all</h2>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-white">Digital Services</h1>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-white">Free Sign Up</h1>
      <p className="text-center text-md md:text-lg font-normal text-white">Sign Up now to avail this amazing discount</p>

      <form className="order-form flex flex-col py-6" onSubmit={handleSubmit}>
        <div className="form-group mb-4 text-orange-400 font-normal">
          <p>Package: {title}</p>
          <p>Price: ${price}</p>
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-orange-400 rounded bg-white text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4 text-orange-400 font-normal">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-orange-400 rounded bg-white text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4 text-orange-400 font-normal">
          <label htmlFor="phone" className="block mb-2">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 border border-orange-400 rounded bg-white text-black"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4 text-orange-400 font-normal">
          <label htmlFor="project" className="block mb-2">Talk about your project:</label>
          <textarea
            id="project"
            name="project"
            className="w-full p-2 border border-orange-400 rounded bg-white text-black h-32 resize-none"
            value={formData.project}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="place-order-button bg-blue-900 text-white rounded py-2 hover:bg-orange-400 hover:text-black">Place Order</button>
        <p className="text-center text-sm mt-2 text-orange-400">* Limited Offer</p>
      </form>

      {showPopup && (
        <div className="popup-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="popup-content bg-blue-700 text-white font-normal p-6 rounded shadow-lg text-center">
            <span className="close-popup cursor-pointer" onClick={() => setShowPopup(false)}>&times;</span>
            <p className="text-lg">Your order has been placed, our agent will contact you in 24 hours.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
