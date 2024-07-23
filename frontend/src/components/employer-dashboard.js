import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import api from "../services/api";


const Employer = () => {
  const [activeSection, setActiveSection] = useState('postJob');
  const [animation, setAnimation] = useState('');

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [numberOfOpenings, setNumberOfOpenings] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const token = localStorage.getItem('authToken');
      // Replace 'API_ENDPOINT' with your backend URL
      const response = await api.post('https://cc4c0690-d7b5-4b84-981a-468c45c5b449-00-pwlz3kc5shs6.sisko.replit.dev:5000/api/jobs', {
        jobTitle,
        companyName,
        location,
        jobDescription,
        experience,
        salary,
        requiredSkills,
        numberOfOpenings,
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      // Reset form fields after successful submission
      setJobTitle('');
      setCompanyName('');
      setLocation('');
      setJobDescription('');
      setExperience('');
      setSalary('');
      setRequiredSkills('');
      setNumberOfOpenings('');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const handleSectionChange = (section) => {
    setAnimation('slide-out');
    setTimeout(() => {
      setActiveSection(section);
      setAnimation('slide-in');
    }, 500); // Match this duration with the slide-out animation duration
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'postJob':
        return (
          <div className={`section-content ${animation}`}>
            <h2 className="text-2xl font-bold mb-6 px-4">Post a Job</h2>
            <form onSubmit={handleSubmit} className="space-y-4 transition-opacity duration-500 px-4 max-w-lg mx-auto bg-gray-800 p-6 pb-16 rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-200">Job Title</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Job Description</label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Experience Required</label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Salary</label>
                <input
                  type="text"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Required Skills</label>
                <textarea
                  value={requiredSkills}
                  onChange={(e) => setRequiredSkills(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-200">Number of Openings</label>
                <input
                  type="number"
                  value={numberOfOpenings}
                  onChange={(e) => setNumberOfOpenings(e.target.value)}
                  className="border rounded px-4 py-2 w-full bg-gray-700 text-white"
                  required
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                Post Job
              </button>
            </form>
          </div>
        );
      case 'manageJobs':
        return (
          <div className={`section-content ${animation}`}>
            <h2 className="text-2xl font-bold mb-6 px-4">Manage Jobs</h2>
            {/* Fetch and display job listings from backend */}
            {/* Implement job management functionalities */}
          </div>
        );
      case 'applicants':
        return (
          <div className={`section-content ${animation}`}>
            <h2 className="text-2xl font-bold mb-6 px-4">Applicants</h2>
            {/* Fetch and display applicants from backend */}
            {/* Implement applicant management functionalities */}
          </div>
        );
      case 'analytics':
        return (
          <div className={`section-content ${animation}`}>
            <h2 className="text-2xl font-bold mb-6 px-4">Analytics</h2>
            {/* Fetch and display analytics data from backend */}
            {/* Implement analytics functionalities */}
          </div>
        );
      case 'settings':
        return (
          <div className={`section-content ${animation}`}>
            <h2 className="text-2xl font-bold mb-6 px-4">Settings</h2>
            {/* Implement settings functionalities */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-900 text-gray-100">
      <header className="bg-gray-900 shadow py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-100 text-lg font-semibold">Employer Dashboard</Link>
          </div>
          <nav className="flex flex-grow justify-center space-x-4">
            <Link to="/job-alerts" className="text-gray-100">Notifications</Link>
          </nav>
        </div>
      </header>

      <div className="flex min-h-screen">
        <aside className="bg-gray-800 text-gray-100 shadow-lg p-4 w-52 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleSectionChange('postJob')}
                  className={`w-full px-4 py-2 text-center text-white rounded transition-all duration-300 ${
                    activeSection === 'postJob' ? 'bg-blue-600' : 'bg-transparent hover:bg-blue-400'
                  }`}
                >
                  Post a Job
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionChange('manageJobs')}
                  className={`w-full px-4 py-2 text-center text-white rounded transition-all duration-300 ${
                    activeSection === 'manageJobs' ? 'bg-blue-600' : 'bg-transparent hover:bg-blue-400'
                  }`}
                >
                  Manage Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionChange('applicants')}
                  className={`w-full px-4 py-2 text-center text-white rounded transition-all duration-300 ${
                    activeSection === 'applicants' ? 'bg-blue-600' : 'bg-transparent hover:bg-blue-400'
                  }`}
                >
                  Applicants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionChange('analytics')}
                  className={`w-full px-4 py-2 text-center text-white rounded transition-all duration-300 ${
                    activeSection === 'analytics' ? 'bg-blue-600' : 'bg-transparent hover:bg-blue-400'
                  }`}
                >
                  Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionChange('settings')}
                  className={`w-full px-4 py-2 text-center text-white rounded transition-all duration-300 ${
                    activeSection === 'settings' ? 'bg-blue-600' : 'bg-transparent hover:bg-blue-400'
                  }`}
                >
                  Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="relative flex-grow bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 p-4">
            {renderSection()}
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .slide-in {
          animation: slideIn 0.5s forwards;
        }

        .slide-out {
          animation: slideOut 0.5s forwards;
        }

        .section-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Employer;

