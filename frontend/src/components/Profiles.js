import React, { useState, useEffect } from 'react';
import api from '../services/api'; // assuming you have the api service as mentioned earlier
import { useAuth0 } from '@auth0/auth0-react';



const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [role, setRole] = useState('');
  const [resume, setResume] = useState(null);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchProfile = async () => {
      if (isAuthenticated) {
        try {
          const response = await api.get('/jobseeker/profile');
          const { fullName, email, skills, role } = response.data;
          setFullName(fullName);
          setEmail(email);
          setSkills(skills);
          setRole(role);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('skills', skills);
    formData.append('role', role);
    formData.append('resume', resume);

    try {
      await api.put('/jobseeker/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${require("./backgroundwebsite.jpg")})` }}
      ></div>
      <div className="container mx-auto flex items-center justify-between px-6 z-10">
        <div className="relative bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto border-4 border-blue-500 glow-effect">
          <h2 className="text-2xl font-bold mb-6 text-blue-500">Student Info</h2>
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
                accept=".pdf,.doc,.docx,.jpg"
                required
              />
            </div>
            <button
              class="text-zinc-700 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-black via-[rgba(121,121,121,0.16)] to-black rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700"
          type='submit'  >
              Submit
            </button>

          </form>
        </div>
        <div className="max-w-lg ml-10 text-white z-10">
          <h2 className="text-4xl font-bold mb-8 heading-animation">
            Welcome to the Student Info Page
          </h2>
          <p className="text-lg leading-relaxed">
            <span className="line-animation">This page allows students to enter and update their personal information,</span>
            <span className="line-animation"> including full name, email, skills, and the role they are interested in.</span>
            <span className="line-animation"> You can also upload your resume here.</span>
            <span className="line-animation"> Make sure to fill in all the required fields and click the submit button to save your information.</span>
          </p>
        </div>
      </div>
      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 20px white;
          border-radius: 20px;
        }
        @keyframes flash {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .heading-animation {
          position: relative;
          overflow: hidden;
          font-weight: bold;
          font-size: 2.5rem;
          background: linear-gradient(90deg, #ff7e5f, #feb47b, #ff7e5f);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: flash 3s linear infinite;
          display: inline-block;
        }
        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-animation {
          display: block;
          opacity: 0;
          animation: appear 1s ease-in-out forwards;
        }
        .line-animation:nth-child(1) { animation-delay: 0.5s; }
        .line-animation:nth-child(2) { animation-delay: 1s; }
        .line-animation:nth-child(3) { animation-delay: 1.5s; }
        .line-animation:nth-child(4) { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default Profile;




