import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleEmailClick = () => {
    const email = 'singhAsh1234@gmail.com';
    const subject = 'Business Inquiry for FlexWork';
    const body = `Hi FlexWork team,
I'm interested in learning more about your freelance services. I'm looking to discuss potential collaboration opportunities.
Looking forward to hearing from you.
Best regards`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '918005958095';
    const message = 'Hi FlexWork team, I would like to discuss about your services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Transform your skills into success at FlexWork. Join our community of digital professionals offering web development, 3D modeling, SEO, digital marketing, and architectural services. Connect with clients, showcase your expertise, and build your freelance career on your own terms.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={() => navigate('/')} className="cursor-pointer hover:text-primary transition-colors">
              Home
            </li>
            <li onClick={() => navigate('/about')} className="cursor-pointer hover:text-primary transition-colors">
              About us
            </li>
            <li onClick={() => navigate('/doctors')} className="cursor-pointer hover:text-primary transition-colors">
              All Freelancers
            </li>
            <li onClick={() => navigate('/contact')} className="cursor-pointer hover:text-primary transition-colors">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6 text-gray-600">
              <div className="relative inline-block group">
                <div className="absolute inset-[-8px] group-hover:animate-bubble rounded-[50%] bg-primary/40 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <FaWhatsapp className="relative text-2xl cursor-pointer group-hover:text-primary transition-colors" onClick={handleWhatsAppClick} />
              </div>
              <div className="relative inline-block group">
                <div className="absolute inset-[-8px] group-hover:animate-bubble rounded-[50%] bg-primary/40 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <FaEnvelope className="relative text-2xl cursor-pointer group-hover:text-primary transition-colors" onClick={handleEmailClick} />
              </div>
              <div className="relative inline-block group">
                <div className="absolute inset-[-8px] group-hover:animate-bubble rounded-[50%] bg-primary/40 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <FaInstagram className="relative text-2xl cursor-pointer group-hover:text-primary transition-colors" onClick={() => window.open('https://instagram.com', '_blank')} />
              </div>
              <div className="relative inline-block group">
                <div className="absolute inset-[-8px] group-hover:animate-bubble rounded-[50%] bg-primary/40 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <FaYoutube className="relative text-2xl cursor-pointer group-hover:text-primary transition-colors" onClick={() => window.open('https://youtube.com', '_blank')} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025 @ FlexWork - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;