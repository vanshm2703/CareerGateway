import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavbarTab";
import "./backgroundwebsite.jpg";

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-900"
      style={{
        backgroundImage: `url(${require("./backgroundwebsite.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="bg-none">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                Welcome to Career Gateway
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your dream job is just a click away.
              </p>
              {isAuthenticated ? (
                <div>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="text-black bg-white hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300 ease"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => navigate("/roles")}
                    className="ml-4 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition duration-300 ease"
                  >
                    Get Started
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition duration-300 ease"
                >
                  Login
                </button>
              )}
            </div>
            <div className="hidden md:block">
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">
              Extensive job listings
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">
              Easy application process
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">Job alerts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">
              Company reviews
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">
              Create an account
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">
              Search for jobs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">Apply online</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-800">Get hired</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
