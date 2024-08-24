import React, { useState } from 'react';
import logo from "../assets/akLogo.png";
import profilePhoto from "../assets/profilePhoto.jpeg"; // Replace with your actual profile photo
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <img src={logo} alt='logo' className='mx-1 w-20'/>
          <h1 className='text-2xl font-bold  mb-1'>Portfolio</h1>
        </div>
        
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        
          <a href="https://www.linkedin.com/in/ajaykrishnanue/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ajayunnikrishnann" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub/>
          </a>
          <a href="https://leetcode.com/u/ajay_unnikrishnan/" target="_blank" rel="noopener noreferrer" title="LeetCode">
            <FaCode />
          </a>
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className='w-10 h-10  rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-500' 
            onClick={openModal} 
            title="Profile"
          />
          
       
        </div>
      </nav>

      {modalIsOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
          onClick={closeModal}
        >
          <div 
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative" 
            onClick={(e) => e.stopPropagation()} // Prevent click events from closing the modal
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ajaykrishnan U.E</h2>
            <p className="text-lg font-medium mb-2 text-black">Email: <a href="mailto:ajaykrishnan1968@gmail.com" className="text-blue-600 hover:underline">ajaykrishnan1968@gmail.com</a></p>
            <p className="text-lg font-medium mb-2 text-black">Phone: <a href="tel:+919539686940" className="text-blue-600 hover:underline">+91 9539686940</a></p>
            <p className="text-lg font-medium mb-2 text-black">LinkedIn: <a href="https://www.linkedin.com/in/ajay-krishnan-ue-ba78b7218/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a></p>
            <p className="text-lg font-medium mb-2 text-black">GitHub: <a href="https://github.com/ajayunnikrishnann" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Profile</a></p>
            <p className="text-lg font-medium mb-2 text-black">LeetCode: <a href="https://leetcode.com/u/ajay_unnikrishnan/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LeetCode Profile</a></p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
