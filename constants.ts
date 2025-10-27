import { Doctor, Service } from './types';
import { HeartIcon, StethoscopeIcon, PlusIcon } from './components/icons/Icons';

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Saket Khetan',
    specialty: 'Interventional Cardiologist',
    bio: 'Dr. Saket Khetan is a highly skilled interventional cardiologist with years of experience in managing complex cardiac conditions. He is dedicated to providing patient-centered care with a focus on evidence-based medicine.',
    timings: ['Mon–Sat: 9 AM – 10 AM, 5 PM – 8 PM', 'Sun: 11 AM – 1 PM'],
    imageUrl: 'https://picsum.photos/seed/drsaket/400/400',
  },
  {
    name: 'Dr. Sowmya Ramesh',
    specialty: 'General Physician',
    bio: 'Dr. Sowmya Ramesh is a compassionate general physician with a comprehensive approach to primary care. She specializes in managing chronic diseases and promoting preventive health for all age groups.',
    timings: ['Mon–Sat: 10 AM – 2 PM, 5 PM – 8 PM', 'Sun: 11 AM – 1 PM'],
    imageUrl: 'https://picsum.photos/seed/drsowmya/400/400',
  },
];

export const CARDIOLOGY_SERVICES: Service[] = [
  { name: 'ECG', icon: HeartIcon },
  { name: '2D Echo', icon: HeartIcon },
  { name: 'TMT', icon: HeartIcon },
  { name: 'Holter Monitoring', icon: HeartIcon },
  { name: 'Angiography', icon: HeartIcon },
  { name: 'TAVI', icon: HeartIcon },
  { name: 'Pacemaker', icon: HeartIcon },
  { name: 'BP/Cholesterol Management', icon: HeartIcon },
  { name: 'Lifestyle Counseling', icon: HeartIcon },
  { name: 'Cardiac Rehab', icon: HeartIcon },
];

export const GENERAL_MEDICINE_SERVICES: Service[] = [
  { name: 'Health Check-ups', icon: StethoscopeIcon },
  { name: 'Fever/Infection Treatment', icon: StethoscopeIcon },
  { name: 'Diabetes/Thyroid/BP Management', icon: StethoscopeIcon },
  { name: 'Vaccinations', icon: PlusIcon },
  { name: 'Preventive Screenings', icon: StethoscopeIcon },
  { name: 'Geriatric Care', icon: StethoscopeIcon },
  { name: 'Nutrition Guidance', icon: PlusIcon },
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Services', path: '/services' },
  { name: 'Teleconsultation', path: '/teleconsultation' },
  { name: 'Contact', path: '/contact' },
];

export const CONTACT_INFO = {
  address: 'Street No. 5, SBI Colony, Gandhi Nagar, Hyderabad – 500080, TS',
  phone: '9949402470',
  email: 'shivaayheartcare@gmail.com',
};
