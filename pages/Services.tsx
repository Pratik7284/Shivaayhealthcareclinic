import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { CARDIOLOGY_SERVICES, GENERAL_MEDICINE_SERVICES } from '../constants';
import { HeartIcon, StethoscopeIcon } from '../components/icons/Icons';
import { Service } from '../types';

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transform hover:shadow-xl hover:scale-105 transition-all">
    <div className="bg-light-bg p-3 rounded-full">
      <service.icon className="h-8 w-8 text-secondary" />
    </div>
    <h3 className="text-lg font-semibold text-slate-800">{service.name}</h3>
  </div>
);

const Services = () => {
  return (
    <PageWrapper>
      <div className="bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Our Medical Services</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            We provide a comprehensive range of services in Cardiology and General Medicine to ensure your complete well-being.
          </p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cardiology Services */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <HeartIcon className="h-10 w-10 text-primary" />
              <h2 className="ml-4 text-3xl font-bold text-primary">Cardiology Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CARDIOLOGY_SERVICES.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* General Medicine Services */}
          <div>
            <div className="flex items-center mb-8">
              <StethoscopeIcon className="h-10 w-10 text-primary" />
              <h2 className="ml-4 text-3xl font-bold text-primary">General Medicine Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GENERAL_MEDICINE_SERVICES.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;
