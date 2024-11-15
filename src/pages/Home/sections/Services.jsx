import React from "react";
import { FaMobileAlt, FaLaptopCode, FaPencilAlt, FaStore, FaShoppingBasket, FaBullseye } from "react-icons/fa";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "App Development",
    description: "Our app development services are dedicated to creating user-friendly and highly functional mobile applications tailored to meet your unique business needs. We leverage the latest technologies and industry best practices to deliver solutions that not only enhance user experience but also drive engagement and growth. Whether you’re looking to streamline operations or connect with customers more effectively, our skilled team will work closely with you to transform your ideas into innovative mobile applications that make a lasting impact.",
    icon: <FaMobileAlt size={40} />,
    link: "/mobile",
  },
  {
    title: "Website Development",
    description: "We specialize in crafting robust and scalable websites that not only elevate your brand but also drive significant business growth. Our expert team combines innovative design with cutting-edge technology to create user-friendly experiences that captivate your audience. Whether you need a dynamic e-commerce platform or a polished corporate website, we are dedicated to delivering solutions that empower your business and foster lasting connections with your customers.",
    icon: <FaLaptopCode size={40} />,
    link: "/web-design",
  },
  {
    title: "Logo and Branding",
    description: "A strong brand identity starts with an exceptional logo. Our team of expert designers is committed to helping you create a memorable and impactful logo that captures the essence of your brand. We understand that a well-designed logo is more than just an image; it’s a powerful tool that communicates your values and connects with your audience. Let us collaborate with you to bring your vision to life and establish a lasting impression in your market.",
    icon: <FaPencilAlt size={40} />,
    link: "/logo-branding",
  },
  {
    title: "Ecom-Experts",
    description: "We recognize the dynamic nature of online shopping and the ever-evolving expectations of consumers. Our e-commerce solutions are meticulously tailored to enhance user experience, ensuring that every interaction is seamless and engaging. From intuitive navigation to streamlined checkout processes, we design platforms that not only attract customers but also foster loyalty. Let us empower your online store with innovative features and personalized experiences that drive sales and elevate your brand in the competitive e-commerce landscape.",
    icon: <FaStore size={40} />,
    link: "/ecom-experts",
  },
  {
    title: "E-Commerce Website",
    description: "We specialize in creating e-commerce websites that are not only visually appealing but also rich in functionality. Our designs blend aesthetic excellence with seamless usability, ensuring that your online store captivates visitors while providing them with an intuitive shopping experience. By incorporating the latest technologies and features, we empower your e-commerce platform to engage customers effectively, streamline transactions, and drive business growth. Let us help you build a stunning online presence that stands out in today’s competitive marketplace.",
    icon: <FaShoppingBasket size={40} />,
    link: "/web-design",
  },
  {
    title: "Digital Marketing",
    description: "We provide comprehensive digital marketing services designed to enhance your online presence and deliver measurable results. Our expert team employs a strategic approach that encompasses SEO, content marketing, social media management, and pay-per-click advertising to ensure your brand reaches its target audience effectively. By leveraging data-driven insights and the latest industry trends, we create tailored marketing solutions that not only increase visibility but also drive engagement and conversions. Partner with us to elevate your digital strategy and achieve your business goals.",
    icon: <FaBullseye size={40} />,
    link: "/digital-seo",
  },
];

const ServicesSection = () => {
  return (
    <section className="p-4 py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-black">Giving Your Business Some Great Ideas</h2>
        <p className="mb-12 text-lg text-gray-600 font-semibold">
          We offer Website Design and Maintenance, Logo Creation, and E-Commerce design combined with management plans.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div key={index} className="relative flex flex-col p-8 mt-10 mb-20 text-white transition-all duration-300 bg-white border-2 border-black rounded-lg cursor-pointer group hover:bg-blue-900 hover:text-white hover:border-blue-900" style={{backgroundColor:"#04081a"}}>
              <div className="absolute top-0 p-12 text-white transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 group-hover:bg-white group-hover:text-orange-400"  style={{backgroundColor:"#ffa200", color:"#020825"}}>
                {card.icon}
              </div>
              <h3 className="mt-20 mb-10 font-bold md:text-4xl flex-grow">{card.title}</h3>
              <p className="p-5 mb-5 text-white transition-all duration-300 group-hover:text-white font-normal line-height-1.5 flex-grow">{card.description}</p>
              <Link to={card.link} className="w-full px-4 py-2 bg-orange-600 border rounded-xl group-hover:bg-white group-hover:text-blue-900 font-semibold text-center" style={{backgroundColor:"#ffa200"}}>
                Let's talk about it
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
