import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <div className="space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#contact" className="hover:underline">
          Contact Us
        </a>
        <a href="#about" className="hover:underline">
          About Us
        </a>
      </div>
      <p className="mt-4">&copy; 2024 Career Getaway. All rights reserved.</p>
      <a href="#top" className="text-blue-300 hover:underline">
        Back to top
      </a>
    </footer>
  );
};

export default Footer;
