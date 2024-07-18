import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Company Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-lg">Career Getaway</span>
      </div>
      <div className="space-x-4 flex items-center">
        <a href="#home" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">Home</a>
        <a href="#about" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">About Us</a>
        <a href="#contact" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">Contact Us</a>
      </div>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white">Login</button>
    </nav>
  );
};

export default Navbar;

