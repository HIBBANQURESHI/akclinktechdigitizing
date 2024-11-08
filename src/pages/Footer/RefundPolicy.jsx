import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../Home/sections/Banner'
import Footer from '../../components/footer'

const RefundPolicy = () => {
  return (
    <div>
      <Header/>
      <Banner/>

      <div className="p-6 mx-20 my-20 bg-white rounded-lg shadow-lg max-w-100">
      <h1 class="text-2xl font-bold mb-4">REFUND POLICY</h1>

<p class="mb-4">
   AKC LinkTech ensures 100% customer satisfaction with our Revision Policy, which enables you to improve on your initial design concept.
</p>

<p class="mb-4">
  To be eligible for a refund, your required designs must be unused and not published on any website or anywhere over the internet.
</p>

<p class="mb-4">
  In case of any dissatisfaction from any design services provided by AKC LinkTech, you can submit a refund request within five days of your initial design's completion. However, it shall be assumed between both parties that you are satisfied with your initial designs if a refund request is not received within five days of initial design delivery. For any Special/Combo packages, a refund will be applicable the same as it is on single packages. To complete your return, we require a receipt or proof of purchase of our services.
</p>

<h2 class="text-xl font-semibold mt-6 mb-2">All refund requests will be fulfilled as per the following arrangement:</h2>
<ul class="list-disc ml-8 mb-4">
  <li>If the request for a refund is made before the order delivery, you would be eligible for a Full Refund (less 10% service & processing fee).</li>
  <li>If the request for a refund is made within 48 hours of the initial design delivery, you would be eligible for a 66% refund (less 10% service & processing fee).</li>
  <li>If the request for a refund is made between 48-120 hours of the initial design delivery, you would be eligible for a 33% refund (less 10% service & processing fee).</li>
  <li>No refund request will be entertained after 120 hours of your initial design delivery. However, since we believe in 100% customer satisfaction, you're encouraged to contact us in case of any concern.</li>
</ul>

<p class="mb-4">
  All refund requests should be communicated to the support department. AKC LinkTech, based on the violation of your user agreement, reserves the right to approve/disapprove your request on an individual case-by-case basis.
</p>

<h2 class="text-xl font-semibold mt-6 mb-2">Refunds (if applicable)</h2>
<p class="mb-4">
  Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain number of days.
</p>

<h2 class="text-xl font-semibold mt-6 mb-2">Late or Missing Refunds (if applicable)</h2>
<p class="mb-4">
  If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company; it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and still have not received your refund, please contact us at <a href="mailto:info@akclinktech.com" class="text-blue-500 underline">info@akclinktech.com</a>.
</p>

<h2 class="text-xl font-semibold mt-6 mb-2">Exchanges/Changes (if applicable)</h2>
<p class="mb-4">
  We only replace designs if our designed logos are proven to be plagiarized from the internet. If you need to exchange it for the same item, send us an email at <a href="mailto:info@akclinktech.com" class="text-blue-500 underline">info@akclinktech.com</a>.
</p>
      </div>
      <Footer/>


    </div>
  )
}

export default RefundPolicy
