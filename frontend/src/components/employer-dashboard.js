import React, { useState } from 'react';

const Employer = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage form visibility
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job posting submission logic here, e.g., send data to server
    console.log({
      jobTitle,
      companyName,
      location,
      jobDescription,
      experience,
      salary,
      requiredSkills,
    });
    // You can implement logic to send this data to your backend for job posting
    // Reset form fields after submission if needed
    setJobTitle('');
    setCompanyName('');
    setLocation('');
    setJobDescription('');
    setExperience('');
    setSalary('');
    setRequiredSkills('');
  };

  const toggleForm = () => {
    setIsOpen(!isOpen); // Toggle form visibility
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Employers Gateway</h2>
        <button
          onClick={toggleForm}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          {isOpen ? 'Hide Form' : 'Post a Job'}
        </button>
        {isOpen && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Job Title</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Job Description</label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Experience Required</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Required Skills</label>
              <textarea
                value={requiredSkills}
                onChange={(e) => setRequiredSkills(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Post Job
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Employer;
