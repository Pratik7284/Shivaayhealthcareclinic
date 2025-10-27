import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { HeartIcon, StethoscopeIcon, PlusIcon } from '../components/icons/Icons';

const About = () => {
  return (
    <PageWrapper>
      <div className="bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">About Shivaay Heart Care</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner in cardiac and general health, committed to providing compassionate and comprehensive care.
          </p>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="mt-4 text-lg text-slate-600">
                Our mission is to deliver state-of-the-art medical care with a focus on patient well-being and satisfaction. We strive to be a center of excellence in cardiology and general medicine, offering accessible, affordable, and high-quality healthcare services to our community in Hyderabad.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <HeartIcon className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>To provide accurate diagnosis and effective treatment for a wide range of health conditions.</span>
                </li>
                 <li className="flex items-start">
                  <StethoscopeIcon className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>To promote preventive care and health education to empower our patients.</span>
                </li>
                 <li className="flex items-start">
                  <PlusIcon className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>To create a welcoming and supportive environment for patients and their families.</span>
                </li>
              </ul>
            </div>
            <div>
              <img src="https://picsum.photos/seed/about1/600/400" alt="Clinic interior" className="rounded-xl shadow-lg"/>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 md:order-1">
              <img src="https://picsum.photos/seed/about2/600/400" alt="Medical equipment" className="rounded-xl shadow-lg"/>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary">Patient-First Philosophy</h2>
              <p className="mt-4 text-lg text-slate-600">
                At Shivaay Heart Care, you are at the center of everything we do. We believe in a holistic approach to healthcare, where we not only treat diseases but also care for the individual. Our team listens to your concerns, respects your decisions, and works with you to develop personalized treatment plans that align with your health goals.
              </p>
               <h3 className="text-2xl font-bold text-primary mt-6">Comfort-Oriented Facilities</h3>
               <p className="mt-2 text-lg text-slate-600">
                Our clinic is designed to provide a calm and comfortable experience. From a clean, modern waiting area to advanced diagnostic equipment, we ensure your visit is as pleasant and efficient as possible. We are equipped to provide a seamless healthcare journey from consultation to diagnosis and management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
