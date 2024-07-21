import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    fresher: false,
    role: '',
    salary: '',
    skills: '',
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  // Fetch applied jobs from backend
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get('/api/job-applications');
        setAppliedJobs(response.data);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };
    fetchAppliedJobs();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleApplyJob = async (job) => {
    try {
      const response = await axios.post('/api/job-applications', { jobId: job._id });
      setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (!filters.fresher || job.time.toLowerCase() === 'fresher') &&
      (filters.role === '' || job.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (filters.salary === '' || job.salary.toLowerCase().includes(filters.salary.toLowerCase())) &&
      (filters.skills === '' || job.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase())))
    );
  });

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <header className="bg-gray-1000 shadow py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-100 text-lg font-semibold">Job Seeker Dashboard</Link>
          </div>
          <nav className="flex flex-grow justify-center space-x-20 ">
           
            <Link to="/job-alerts" className="text-gray-100">Job Alerts</Link>
            <Link to="/profile" className="text-gray-100">Profile</Link>
          </nav>
        
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Find Job</h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded px-4 py-2 bg-gray-800 text-gray-100"
            />
            <input
              type="text"
              placeholder="City, state, or zip code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded px-4 py-2 bg-gray-800 text-gray-100"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Find Job</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="md:w-1/4 bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Role</label>
              <input
                type="text"
                name="role"
                value={filters.role}
                onChange={handleFilterChange}
                className="border rounded px-4 py-2 w-full bg-gray-700 text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Salary</label>
              <input
                type="text"
                name="salary"
                value={filters.salary}
                onChange={handleFilterChange}
                className="border rounded px-4 py-2 w-full bg-gray-700 text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Skills</label>
              <input
                type="text"
                name="skills"
                value={filters.skills}
                onChange={handleFilterChange}
                className="border rounded px-4 py-2 w-full bg-gray-700 text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Fresher Jobs</label>
              <input
                type="checkbox"
                name="fresher"
                checked={filters.fresher}
                onChange={handleFilterChange}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 shadow rounded transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => handleCardClick(job)}
                >
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-2">{job.company}</p>
                  <p className="text-gray-400 mb-2">{job.location}</p>
                  <p className="text-gray-400 mb-2">{job.salary}</p>
                  <p className="text-gray-400 mb-2">{job.time}</p>
                  <p className="text-gray-400 mb-2">{job.role}</p>
                  <p className="text-gray-400">Skills: {job.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Applied Jobs</h3>
          {appliedJobs.length === 0 ? (
            <p className="text-gray-400">You have not applied for any jobs yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appliedJobs.map((job, index) => (
                <div key={index} className="bg-gray-800 p-6 shadow rounded">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-2">{job.company}</p>
                  <p className="text-gray-400 mb-2">{job.location}</p>
                  <p className="text-gray-400 mb-2">{job.salary}</p>
                  <p className="text-gray-400 mb-2">{job.time}</p>
                  <p className="text-gray-400 mb-2">{job.role}</p>
                  <p className="text-gray-400 mb-2">Skills: {job.skills.join(', ')}</p>
                  <p className="text-gray-400 mb-2">Status: {job.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-gray-100 p-8 rounded shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedJob.title}</h3>
            <p className="text-gray-400 mb-2">{selectedJob.company}</p>
            <p className="text-gray-400 mb-2">{selectedJob.location}</p>
            <p className="text-gray-400 mb-2">{selectedJob.salary}</p>
            <p className="text-gray-400 mb-2">{selectedJob.time}</p>
            <p className="text-gray-400 mb-2">{selectedJob.role}</p>
            <p className="text-gray-400 mb-2">Skills: {selectedJob.skills.join(', ')}</p>
            <p className="text-gray-400 mb-6">{selectedJob.description}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => handleApplyJob(selectedJob)}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListing;
