import React, { useState } from "react";
import emailjs from "emailjs-com";
import BackgroundImage from "../../../assets/banner/image.jpg";

function Banner() {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
    });

    const [submitted, setSubmitted] = useState(false); // New state to track submission

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8hdasd9",
                "template_het8joe",
                e.target,
                "E0y6p0_LBMpPkmoYG"
            )
            .then((result) => {
                setSubmitted(true); // Set submission state to true
                // Optionally reset form data if needed
                setFormData({
                    email: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    company: "",
                });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <>
            <section>
                <header>
                    <div
                        className="page-header"
                        style={{
                            backgroundImage: `url(${BackgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "50vh",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                zIndex: 1,
                            }}
                        />
                        <div
                            className="relative flex flex-col items-center justify-center text-center text-white z-2"
                            style={{ top: "120px" }}
                        >
                            <h1 className="pt-10 mb-3 text-lg font-semibold md:text-4xl">
                                <b>We'd love to hear from you to start your project</b>
                            </h1>
                        </div>
                    </div>
                </header>
            </section>

            <section className="px-4 pt-10 pb-20 bg-gray-200 sm:px-6 lg:px-8">
                {submitted ? ( // Check if the form has been submitted
                    <div className="p-4 text-center text-green-700 bg-green-100 rounded">
                        <h2 className="text-lg font-semibold">Thank you for contacting us!</h2>
                        <p>Your request has been submitted. We will notify you via email.</p>
                    </div>
                ) : (
                    <form className="max-w-lg mx-auto" onSubmit={sendEmail}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="absolute text-sm text-gray-500 transition-all scale-75 -translate-y-6 top-3 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email address
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="absolute text-sm text-gray-500 transition-all scale-75 -translate-y-6 top-3 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                First name
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="absolute text-sm text-gray-500 transition-all scale-75 -translate-y-6 top-3 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Last name
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="absolute text-sm text-gray-500 transition-all scale-75 -translate-y-6 top-3 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Phone number
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="absolute text-sm text-gray-500 transition-all scale-75 -translate-y-6 top-3 origin-0 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Company (Ex. Google)
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </section>
        </>
    );
}

export default Banner;
