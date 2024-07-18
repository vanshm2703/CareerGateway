import React from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: "Technical Support Specialist",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
    salary: "$3000 - $5000",
    time: "Full-time"
  },
  {
    title: "Senior UX Designer",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
    salary: "$3000 - $5000",
    time: "Full-time"
  },
  // Add more jobs here
];

const JobListing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Optional elements can be added here */}
          </div>
          <nav className="flex flex-grow justify-center space-x-4"> {/* Updated class */}
            <Link to="/" className="text-gray-700">Home</Link>
            <Link to="/roles" className="text-gray-700">Change Role</Link>
            <Link to="/job-alerts" className="text-gray-700">Job Alerts</Link>
            <Link to="/profile" className="text-gray-700">Profile</Link>
          </nav>
          <div className="flex items-center space-x-4">
            {/* Optional elements can be added here */}
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Find Job</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="City, state, or zip code"
              className="border rounded px-4 py-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Find Job</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-700">{job.location}</p>
              <p className="text-gray-700">{job.salary}</p>
              <p className="text-gray-700">{job.time}</p>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <button className="border px-4 py-2 mx-1">1</button>
          <button className="border px-4 py-2 mx-1">2</button>
          <button className="border px-4 py-2 mx-1">3</button>
          <button className="border px-4 py-2 mx-1">4</button>
          <button className="border px-4 py-2 mx-1">5</button>
        </div> */}
      </main>
     
    </div>
  );
};

export default JobListing;
