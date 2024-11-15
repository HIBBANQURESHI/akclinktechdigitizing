import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import project1_img from '../../../assets/project/6.png';
import projectlogo3 from '../../../assets/project/1.jpg';
import projectlogo4 from '../../../assets/project/2.jpg';
import projectlogo5 from '../../../assets/project/6.jpg';
import projectlogo6 from '../../../assets/project/4.jpg';
import projectlogo7 from '../../../assets/project/5.jpg';

import web1 from '../../../assets/project/web1.jpg';
import web2 from '../../../assets/project/web2.jpg';
import web3 from '../../../assets/project/web3.jpg';
import web4 from '../../../assets/project/web4.jpg';
import web5 from '../../../assets/project/web5.jpg';
import web6 from '../../../assets/project/web6.jpg';

import mb1 from '../../../assets/project/mb1.jpg';
import mb2 from '../../../assets/project/mb2.jpg';
import mb3 from '../../../assets/project/mb3.jpg';
import mb4 from '../../../assets/project/mb4.jpg';
import mb5 from '../../../assets/project/mb5.jpg';
import mb6 from '../../../assets/project/mb6.jpg';

import esty1 from '../../../assets/project/esty1.jpg';
import esty2 from '../../../assets/project/etsy2.jpg';
import amazon1 from '../../../assets/project/amazon1.jpg';
import amazon2 from '../../../assets/project/amazon2.jpg';
import shopify1 from '../../../assets/project/shopify1.jpg';
import shopify2 from '../../../assets/project/shopify2.jpg';
import walmart1 from '../../../assets/project/walmart1.jpg';
import walmart2 from '../../../assets/project/walmart2.jpg';

import seo1 from '../../../assets/project/seo1.jpg';
import seo2 from '../../../assets/project/seo2.jpg';
import smm1 from '../../../assets/project/smm1.jpg';
import smm2 from '../../../assets/project/smm2.jpg';

import { FaArrowRight } from 'react-icons/fa';

const projectData = [
  { id: 1, category: 'Logo and Branding', image: project1_img, description: 'Logo and Branding' },
  { id: 2, category: 'Logo and Branding', image: projectlogo7, description: 'Logo and Branding' },
  { id: 3, category: 'Logo and Branding', image: projectlogo3, description: 'Logo and Branding' },
  { id: 4, category: 'Logo and Branding', image: projectlogo4, description: 'Logo and Branding' },
  { id: 5, category: 'Logo and Branding', image: projectlogo5, description: 'Logo and Branding' },
  { id: 6, category: 'Logo and Branding', image: projectlogo6, description: 'Logo and Branding' },
  { id: 7, category: 'Web Designs', image: web1, description: 'Web Designs' },
  { id: 8, category: 'Web Designs', image: web2, description: 'Web Designs' },
  { id: 9, category: 'Web Designs', image: web3, description: 'Web Designs' },
  { id: 10,category: 'Web Designs', image: web4, description: 'Web Designs' },
  { id: 11,category: 'Web Designs', image: web5, description: 'Web Designs' },
  { id: 12,category: 'Web Designs', image: web6, description: 'Web Designs' },
  { id: 13,category: 'Mobile Application', image: mb1, description: 'Mobile Application' },
  { id: 14,category: 'Mobile Application', image: mb2, description: 'Mobile Application' },
  { id: 15,category: 'Mobile Application', image: mb3, description: 'Mobile Application' },
  { id: 16,category: 'Mobile Application', image: mb4, description: 'Mobile Application' },
  { id: 17,category: 'Mobile Application', image: mb5, description: 'Mobile Application' },
  { id: 18,category: 'Mobile Application', image: mb6, description: 'Mobile Application' },
  { id: 27,category: 'SEO / SMM', image: seo1, description: 'SEO / SMM' },
  { id: 28,category: 'SEO / SMM', image: smm2, description: 'SEO / SMM' },
  { id: 29,category: 'SEO / SMM', image: smm1, description: 'SEO / SMM' },
  { id: 30,category: 'SEO / SMM', image: seo2, description: 'SEO / SMM' },
];

const categories = ['All Projects', 'Web Designs', 'SEO / SMM', 'Logo and Branding', 'Mobile Application'];

function ProjectSection() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = activeTab === 'All Projects'
    ? projectData
    : projectData.filter((project) => project.category === activeTab);

  const handleProjectClick = useCallback((image) => {
    setModalImage(image);
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-black">Our Recent Projects</h2>

        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${activeTab === category ? 'text-white' : 'bg-gray-200 text-white'}`}
              onClick={() => setActiveTab(category)}
              style={{backgroundColor:"#020825"}}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gap-4 p-4 bg-white border-2 border-gray-200 rounded-lg group"
              onClick={() => handleProjectClick(project.image)} 
              style={{ cursor: 'pointer' }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-orange-500 opacity-0 group-hover:opacity-100">
                  <FaArrowRight className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="px-6 py-2 text-white rounded-full hover:bg-transparent hover:border-2 hover:border-blue-900 hover:text-blue-900" style={{backgroundColor:"#020825"}}>
            All Projects
          </button>
        </div>
      </div>

      {/* Modal for full image display */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg" style={{ width: '405px', height: '890px' }}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-black">✖️</button>
            <img src={modalImage} alt="Full View" className="object-contain" style={{ width: '405px', height: '890px' }} />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;
