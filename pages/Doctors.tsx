import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { DOCTORS } from '../constants';
import { Link } from 'react-router-dom';
import { ClockIcon } from '../components/icons/Icons';

const DoctorCard = ({ doctor }: { doctor: typeof DOCTORS[0] }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:-translate-y-2 transition-transform duration-300">
      <img className="md:w-1/3 h-80 md:h-auto object-cover" src={doctor.imageUrl} alt={doctor.name} />
      <div className="p-8 flex flex-col justify-between">
        <div>
          <p className="text-secondary font-semibold uppercase tracking-wide">{doctor.specialty}</p>
          <h3 className="mt-1 text-3xl font-bold text-primary">{doctor.name}</h3>
          <p className="mt-4 text-slate-600">{doctor.bio}</p>
        </div>
        <div className="mt-6">
            <h4 className="font-bold text-slate-800">Timings</h4>
            <ul className="mt-2 space-y-1 text-slate-600">
                {doctor.timings.map((time, index) => (
                    <li key={index} className="flex items-center">
                        <ClockIcon className="h-5 w-5 mr-2 text-secondary"/>
                        <span>{time}</span>
                    </li>
                ))}
            </ul>
            <Link to="/teleconsultation" className="mt-6 inline-block bg-secondary hover:bg-primary text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all">
                Book a Consultation
            </Link>
        </div>
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <PageWrapper>
       <div className="bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Our Experienced Doctors</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Meet our dedicated team of healthcare professionals, committed to providing you with personalized and expert care.
          </p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
                {DOCTORS.map(doctor => <DoctorCard key={doctor.name} doctor={doctor} />)}
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Doctors;
