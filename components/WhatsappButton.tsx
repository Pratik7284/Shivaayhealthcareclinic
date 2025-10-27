import React from 'react';
import { CONTACT_INFO } from '../constants';
import { WhatsappIcon } from './icons/Icons';

const WhatsappButton = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-40"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8" />
    </a>
  );
};

export default WhatsappButton;
