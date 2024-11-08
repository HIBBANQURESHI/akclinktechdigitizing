import React from 'react'
import reactLogo from "../../assets/logo/header-logo.png";
import { Link, useLocation } from "react-router-dom";

const CollabrateUs = () => {
    
  return (
    <div className='mx-10'>
        <div className="flex flex-row-reverse p-10 items-center">
          <Link to="/">
            <img src={reactLogo} alt="akclinktech" className="h-10 mr-3" />
          </Link>
        </div>
      

        <div className="flex flex-row p-10 items-center">
        
       


  <p className='md:font-bol md:text-7xl min:4xl' ><b>Collabrate <br/><span className='word-break: break-all; text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'assNam>With Us.</span></b></p>
 

           
        </div>

        <div className="flex flex-row p-10 ml-5">
            <p className='text-4xl font-sans leading-relaxed'>
             AKC Link Tech is going through a transformational phase and has massive expansion plans in pipeline.
             Considering this, we are excited to get in touch with new talent, new businesses, collaborators, and investors. 
             Drop your details using the relevant form mentioned below 
             and we will contact you with questions, propositions, opportunities, and quality solutions.
            </p>
        </div>
      
    </div>
  )
}

export default CollabrateUs
