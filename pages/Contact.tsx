import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { CONTACT_INFO } from '../constants';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '../components/icons/Icons';

const ContactInfoCard = ({ icon: Icon, title, children }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-light-bg mx-auto">
      <Icon className="h-8 w-8 text-secondary" />
    </div>
    <h3 className="mt-4 text-xl font-bold text-primary">{title}</h3>
    <div className="mt-2 text-slate-600">{children}</div>
  </div>
);

const Contact = () => {
  const mapQuery = encodeURIComponent(CONTACT_INFO.address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}&q=${mapQuery}`;

  return (
    <PageWrapper>
      <div className="bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Get in Touch</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            We're here to help. Contact us for appointments, inquiries, or any support you may need.
          </p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactInfoCard icon={MapPinIcon} title="Our Address">
              <p>{CONTACT_INFO.address}</p>
            </ContactInfoCard>
            <ContactInfoCard icon={PhoneIcon} title="Phone">
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-secondary">{CONTACT_INFO.phone}</a>
            </ContactInfoCard>
            <ContactInfoCard icon={EnvelopeIcon} title="Email">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-secondary break-all">{CONTACT_INFO.email}</a>
            </ContactInfoCard>
            <ContactInfoCard icon={ClockIcon} title="Working Hours">
              <p>Mon-Sat: 9am - 8pm</p>
              <p>Sun: 11am - 1pm</p>
            </ContactInfoCard>
          </div>
        </div>
      </div>
      <div className="w-full">
         <iframe
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          ></iframe>
      </div>
    </PageWrapper>
  );
};

export default Contact;
