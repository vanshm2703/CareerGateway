import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Roles = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("./backgroundwebsite.jpg")})`,
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center transition transform hover:scale-105 duration-300">
        Choose Your Gateway
      </h1>
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8 w-11/12 md:w-1/2 lg:w-1/3 animate-fade-in">
        <div
          className="cursor-pointer bg-blue-500 text-white font-bold py-4 px-8 rounded-md mb-4 transition transform hover:scale-105 duration-300"
          onClick={() => navigate('/employer-dashboard')}
        >
          Employer
        </div>
        <div
          className="cursor-pointer bg-green-500 text-white font-bold py-4 px-8 rounded-md transition transform hover:scale-105 duration-300"
          onClick={() => navigate('/jobseeker-dashboard')}
        >
          Jobseeker
        </div>
      </div>
    </div>
  );
};

export default Roles;
