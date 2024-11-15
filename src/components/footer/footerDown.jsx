import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaPhone } from 'react-icons/fa';

const footerDown = () => {
  return (
 
       <footer
            class="text-center text-lg-start text-white"
            style={{backgroundColor: "#1c2331"}}
            >

      <section
               class="d-flex bg-warning justify-content-between p-4"
           
               >
      
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        
        <div>
          <a href="/"  class="text-white   bg-dark  p-2 border border-dark rounded-circle me-4">
            <i class="fab  fa-facebook-f"></i>
          </a>
          <a href="/" class="text-white   bg-dark p-2  border border-dark rounded-circle me-4">
            <i class="fab  fa-twitter"></i>
          </a>
          <a href="/" class="text-white   bg-dark p-2  border border-dark rounded-circle me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="/" class="text-white   bg-dark p-2  border border-dark rounded-circle me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/" class="text-white   bg-dark p-2  border border-dark rounded-circle me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="/" class="text-white   bg-dark p-2  border border-dark rounded-circle me-4">
            <i class="fab  fa-github"></i>
          </a>
        </div>
       
      </section>
      
  

      <section class="">
        <div class="container text-center text-md-start mt-5">
     
          <div class="row mt-3">
        
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
              <h6 class="text-uppercase text-warning  fw-bold">Company name</h6>
              <hr
                  class="mb-4  mt-0 bg-warning d-inline-block mx-auto"
                  style={{width: "60px", height: "2px"}}
                  />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
          </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
              <h6 class="text-uppercase text-warning fw-bold">Products</h6>
              <hr
                  class="mb-4 mt-0 bg-warning d-inline-block mx-auto"
                  style={{width: "60px", height: "2px"}}
                  />
              <p>
                <a href="#!" class="text-white">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" class="text-white">MDWordPress</a>
              </p>
              <p>
                <a href="#!" class="text-white">BrandFlow</a>
              </p>
              <p>
                <a href="#!" class="text-white">Bootstrap Angular</a>
              </p>
            </div>
          
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
              <h6 class="text-uppercase text-warning fw-bold">Useful links</h6>
              <hr
                  class="mb-4 mt-0 bg-warning d-inline-block mx-auto"
                  style={{width: "60px",  height: "2px"}}
                  />
              <p>
                <a href="#!" class="text-white">Your Account</a>
              </p>
              <p>
                <a href="#!" class="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" class="text-white">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" class="text-white">Help</a>
              </p>
            </div>
           
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
              <h6 class="text-uppercase text-warning fw-bold">Contact</h6>
              <hr
                  class="mb-4 mt-0 bg-warning d-inline-block mx-auto"
                  style={{width: "60px",  height: "2px"}}
                  />
              <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            
          </div>
          
        </div>
      </section>
      
  
    
      <div
           class="text-center p-3"
           style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
           >
        © 2020 Copyright:
        <a class="text-warning" href="https://akclinktech.com/">AKCLinkTech.com.com</a
          >
      </div>
      
    </footer>

   
  )
}

export default footerDown
