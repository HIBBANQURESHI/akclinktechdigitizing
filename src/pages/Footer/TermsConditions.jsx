import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../Home/sections/Banner'
import Footer from '../../components/footer'

const TermsConditions = () => {
  return (
    <div>
      <Header/>
      <Banner/>

      <div class="max-w-100 mx-20 my-20 p-6 bg-white rounded-lg shadow-lg">
  <h1 class="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>

  
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Revision Policy</h2>
  <p class="text-gray-700 mb-4">
    AKC Link Tech guarantees you unlimited revisions according to your selected package. Customers can ask for revisions as per the package and no additional fee will be charged; however, the design and concept remain the same. The revision turnaround time is 48 hours.
  </p>

  
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Refund Policy</h2>
  <p class="text-gray-700 mb-4">
  AKC Link Tech ensures 100% customer satisfaction with our unlimited free revision policy, which enables you to improve your initial design brief at no additional cost.
  </p>
  <p class="text-gray-700 mb-4">
    If there is a duplicate charge due to a processing error or failure to meet your design requirements, the complete order amount will be refunded.
  </p>

  <h3 class="text-lg font-semibold text-gray-800 mb-3">Refund Chart:</h3>
  <ul class="list-disc pl-6 text-gray-700 mb-4">
    <li>If the refund request is made before order delivery, you are eligible for a full refund (less a 10% service fee).</li>
    <li>If the refund request is made within 48 hours of initial design delivery, you are eligible for a 66% refund.</li>
    <li>If the refund request is made within 48–120 hours, you are eligible for a 33% refund.</li>
    <li>No refunds are available after 120 hours of initial design delivery.</li>
  </ul>

 
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">How to Claim Your Refund</h2>
  <ol class="list-decimal pl-6 text-gray-700 mb-4">
    <li>Contact us via phone, chat, or email to specify your concern.</li>
    <li>We will resolve your issue through our revision policy or process your refund approval.</li>
  </ol>

  
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Quality Assurance Policy</h2>
  <p class="text-gray-700 mb-4">
    Our designs are created after thorough research, ensuring quality and uniqueness. We offer unlimited revisions to guarantee satisfaction.
  </p>

  
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Communication Policy</h2>
  <p class="text-gray-700 mb-4">
    We are not liable for any communication from unauthorized email addresses. Ensure all communications are from our domain (e.g., [email protected]).
  </p>

 
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Reactivation Policy</h2>
  <p class="text-gray-700 mb-4">
    If a client is non-responsive for over 45 days, a $150 reactivation fee will apply to re-initiate the project.
  </p>

  
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Third Party Terms of Use</h2>
  <p class="text-gray-700">
    Certain features may require you to agree to third-party terms and conditions, which are subject to change by the third party.
  </p>
</div>

<Footer/>
    </div>
  )
}

export default TermsConditions
