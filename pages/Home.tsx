import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { DOCTORS, CARDIOLOGY_SERVICES, GENERAL_MEDICINE_SERVICES } from '../constants';
import { HeartIcon } from '../components/icons/Icons';

const Home = () => {
  const featuredServices = [...CARDIOLOGY_SERVICES.slice(0, 3), ...GENERAL_MEDICINE_SERVICES.slice(0, 3)];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-light-bg pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-white to-sky-50 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary tracking-tight">Shivaay Heart Care & Medical Centre</h1>
              <p className="mt-4 text-xl text-slate-600">Comprehensive Heart & Health Care Under One Roof.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/teleconsultation" className="bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                  Book Appointment
                </Link>
                <Link to="/contact" className="bg-white border-2 border-secondary text-secondary hover:bg-sky-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
               <img src="https://picsum.photos/seed/doc1/300/400" alt="Doctor" className="rounded-xl shadow-2xl w-1/2 transform rotate-3 hover:rotate-0 transition-transform"/>
               <img src="https://picsum.photos/seed/doc2/300/400" alt="Doctor" className="rounded-xl shadow-2xl w-1/2 transform -rotate-3 hover:rotate-0 transition-transform mt-8"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our Key Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We offer a wide range of services to meet your health needs, from routine check-ups to specialized cardiac care.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="text-center p-4 group">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-light-bg group-hover:bg-secondary mx-auto transition-all transform group-hover:scale-110">
                  <service.icon className="h-10 w-10 text-secondary group-hover:text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-800">{service.name}</h3>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
                <Link to="/services" className="text-secondary font-semibold hover:text-primary">
                    View All Services &rarr;
                </Link>
            </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Meet Our Expert Doctors</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Our dedicated team of doctors is here to provide you with the best possible care.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {DOCTORS.map(doctor => (
              <div key={doctor.name} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                <img src={doctor.imageUrl} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto -mt-16 border-4 border-white shadow-md" />
                <h3 className="mt-4 text-2xl font-bold text-primary">{doctor.name}</h3>
                <p className="text-secondary font-semibold">{doctor.specialty}</p>
                <p className="mt-2 text-slate-600 text-sm">{doctor.bio.substring(0, 100)}...</p>
                <Link to="/doctors" className="mt-4 inline-block text-secondary font-semibold hover:text-primary">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
