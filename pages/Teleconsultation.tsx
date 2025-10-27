import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const Teleconsultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    contact: '',
    doctor: 'Dr. Saket Khetan',
    consultationType: 'Video',
    dateTime: '',
    healthConcern: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <div className="bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Online Consultation</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Book an appointment from the comfort of your home. Fill out the form below to request a teleconsultation.
          </p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
            {submitted ? (
              <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-primary">Thank You!</h2>
                <p className="mt-4 text-slate-600">Your appointment request has been submitted. Our team will contact you shortly with a confirmation and further details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
                    <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
                  </div>
                   <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-slate-700">Contact (Phone/Email)</label>
                    <input type="text" name="contact" id="contact" value={formData.contact} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="doctor" className="block text-sm font-medium text-slate-700">Select Doctor</label>
                        <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md">
                            <option>Dr. Saket Khetan</option>
                            <option>Dr. Sowmya Ramesh</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="consultationType" className="block text-sm font-medium text-slate-700">Consultation Type</label>
                        <select id="consultationType" name="consultationType" value={formData.consultationType} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md">
                            <option>Video</option>
                            <option>Phone</option>
                        </select>
                    </div>
                </div>

                <div>
                  <label htmlFor="dateTime" className="block text-sm font-medium text-slate-700">Preferred Date & Time</label>
                  <input type="datetime-local" name="dateTime" id="dateTime" value={formData.dateTime} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
                </div>

                <div>
                  <label htmlFor="healthConcern" className="block text-sm font-medium text-slate-700">Health Concern</label>
                  <textarea id="healthConcern" name="healthConcern" rows={4} value={formData.healthConcern} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"></textarea>
                </div>
                
                <div className="text-center">
                    <p className="text-sm text-slate-500 mb-4">Once you submit, our team will contact you with confirmation and a video link if applicable.</p>
                    <button type="submit" className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
                        Submit Request
                    </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Teleconsultation;
