import React from 'react'
import Layout from '../../layout'
import Banner from './sections/Banner'
import AboutContent from './sections/AboutContent'
import Testimonial from './sections/Consultancy'
import ConnectForm from '../../components/connectForm'
import Testimonials from "../../components/testimonials";
import testmonial1 from "../../assets/img/examples/testimonial-6-2.jpg"
import testmonial2 from "../../assets/img/examples/testimonial-6-3.jpg"



const AboutUs = () => {

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "This company delivered more than I expected. Great design work, and the functionality is seamless!",
      avatar: testmonial1
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "Absolutely fantastic! The team worked with me on every detail, and I'm extremely satisfied with the final product.",
      avatar: testmonial2
    },
    {
      id: 3,
      name: "Alice Johnson",
      feedback:
        "The level of professionalism and attention to detail was excellent. Highly recommend their services!",
      avatar: testmonial1
    },
  ];


  return (
    <Layout>
        <Banner/>
       <AboutContent/>
       <Testimonial/>
       <Testimonials testimonialData ={testimonials}/>
       <ConnectForm/>
       

    </Layout>
  )
}

export default AboutUs
