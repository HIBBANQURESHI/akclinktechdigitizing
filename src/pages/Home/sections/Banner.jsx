import React from "react";
import BackgroundImage from "../../../assets/banner/image.jpg";

function Banner() {
  return (
    <section>
           <header>
      <div
        className="page-header"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative", // Set position relative for overlay positioning
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the alpha value for darkness
            zIndex: 1, // Ensure the overlay is above the background
          }}
        />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            alignItems: "center",
            top: "120px",
            zIndex: 2,
            color: "#ffffff",
          }}
        >
          <div className=" text-lg d-flex align-center  font-light ">
            <h1 className="mb-3 pt-10 font-semibold text-lg md:text-5xl" ><b> 
            Best Marketing Services
            Grow Your Business With Us
              </b></h1>
            
            <div className="buttons">
            <button
              type="submit"
              className="px-6 py-3 mt-5 text-gray-900 transition duration-300 bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              Send Message
            </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </section>
  );
}

export default Banner;
