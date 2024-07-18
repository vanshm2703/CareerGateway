import React, { useState } from 'react';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [role, setRole] = useState('');
  const [resume, setResume] = useState(null); // State to store the uploaded resume file

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or update state
    console.log({ fullName, email, skills, role, resume });
    // Here you can send the form data (including resume) to your backend or perform other actions
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file (single file selection)
    setResume(file);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Skills</label>
            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="border rounded px-4 py-2 w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role Interested In</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Resume</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border rounded px-4 py-2 w-full"
              accept=".pdf,.doc,.docx,.jpg" // Limit accepted file types if needed
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
