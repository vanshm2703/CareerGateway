import React from 'react';
const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${require('./backgroundwebsite.jpg')})` }}></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <img src = {require('./wave.png')} alt="img" className="h-60 w-60 mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">What We Do</h2>
            <p className="text-lg">
              Our platform offers a comprehensive solution for job seekers and employers. Job seekers can easily search and apply for jobs, while employers can post job listings, manage applications, and find the right candidates quickly and efficiently.
            </p>
            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <img className="w-full h-30 object-cover transition-transform transform hover:scale-105" src={require('./about.jpg')} alt="What We Do" />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              Welcome to our job listing portal. We connect employers with top talent and help job seekers find their dream jobs. Our mission is to make the hiring process easy, efficient, and effective.
            </p>
            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <img className="w-full h-30 object-cover transition-transform transform hover:scale-105" src={require('./about2.jpg')} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
