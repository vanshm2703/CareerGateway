import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-around mb-4">
          <div>
            <h1 className="font-bold">JobPortal</h1>
            <p>Address line 1</p>
            <p>Address line 2</p>
          </div>
          <div>
            <h4 className="font-bold">Quick Links</h4>
            <ul>
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#jobs" className="text-white">Jobs</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Contact Us</h4>
            <p>Email: info@jobportal.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <p>&copy; 2024 JobPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
