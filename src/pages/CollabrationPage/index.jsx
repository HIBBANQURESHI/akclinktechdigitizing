import React, { useState } from 'react';
import ProfessionalForm from './Forms/ProfessionalForm';
import FormTabs from './components/FormsTab';
import StartupForm from './Forms/StartupForm';
import reactLogo from "../../assets/logo/header-logo.png";
import { Link } from "react-router-dom";
import CollaboratorForm from './Forms/CollabaratorForm';
import InvestorForm from './Forms/InvestorForm';

function CollabratePage() {
  const [activeTab, setActiveTab] = useState('Professionals');

  return (
    <div className="min-h-screen p-4 bg-gray-100 md:p-8">
      {/* Logo */}
      <div className="flex items-center justify-end p-6 md:p-10">
        <Link to="/">
          <img src={reactLogo} alt="akclinktech" className='w-80 h-40' />
        </Link>
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-center p-6 text-center md:text-left md:flex-row md:p-10">
        <h1 className="text-4xl font-bold leading-tight text-center md:text-6xl">
          Collaborate <br />
          <span className="text-white  text-stroke-black">
            With Us.
          </span>
        </h1>
      </div>

      {/* Description Section */}
      <div className="p-6 md:p-10">
        <p className="text-base leading-relaxed text-center md:text-xl md:text-left">
          AKC is going through a transformational phase and has massive expansion plans in pipeline.
          Considering this, we are excited to get in touch with new talent, new businesses, collaborators, and investors. 
          Drop your details using the relevant form mentioned below and we will contact you with questions, propositions, opportunities, and quality solutions.
        </p>
      </div>

      {/* Call to Action */}
      <h1 className="mb-6 text-2xl font-bold text-center md:text-3xl">
        HURRY UP! LET'S START OUR JOURNEY TOGETHER
      </h1>

      {/* Tabs for Forms */}
      <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Form Display */}
      <div className="mt-6 md:mt-8">
        {activeTab === 'Professionals' && <ProfessionalForm />}
        {activeTab === 'For startups' && <StartupForm />}
        {activeTab === 'For collaborators' && <CollaboratorForm />}
        {activeTab === 'For investors' && <InvestorForm />}
      </div>
    </div>
  );
}

export default CollabratePage;
