import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "./backgroundwebsite.jpg";
import jobListingImage from "./home1.jpg";
import easyApplicationImage from "./home2.jpg";
import jobAlertsImage from "./home3.jpg";
import companyReviewsImage from "./home4.jpg";
import createAccountImage from "./home5.jpg";
import searchJobsImage from "./home6.jpg";
import applyOnlineImage from "./home7.jpg";
import getHiredImage from "./home8.jpg";
import "./custom.css";

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="bg-gray-900 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-none">
          <div className="container mx-auto px-4 py-16 relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Welcome to Career Gateway
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Your dream job is just a click away.
                </motion.p>
                {isAuthenticated ? (
                  <div>
                    <motion.button
                      onClick={() => logout({ returnTo: window.location.origin })}
                      className="text-black bg-white hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300 ease"
                      whileHover={{ scale: 1.1 }}
                    >
                      Logout
                    </motion.button>
                    <motion.button
                      onClick={() => navigate("/roles")}
                      className="ml-4 text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md transition duration-300 ease"
                      whileHover={{ scale: 1.1 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    onClick={() => loginWithRedirect()}
                    className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition duration-300 ease"
                    whileHover={{ scale: 1.1 }}
                  >
                    Login
                  </motion.button>
                )}
                {isAuthenticated && (
                  <div className="mt-8">
                    <motion.img
                      src={user.picture}
                      alt={user.name}
                      className="rounded-full w-16 h-16 mb-4"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.h2
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Welcome! {user.name}
                    </motion.h2>
                    <motion.p
                      className="text-lg text-gray-300"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {user.email}
                    </motion.p>
                  </div>
                )}
              </div>
              <div className="card mt-8 md:mt-10 mr-40">
                <div class="item item--1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="rgba(149,149,255,1)"></path></svg>
                  <span class="quantity"> 90+ </span>
                  <span class="text-white text--1"> Recruiters</span>
                </div>
                <div class="item item--2">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L24 0 24 24 0 24z" fill="none"></path><path fill="rgba(252,161,71,1)" d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"></path></svg>    <span class="quantity"> 70+ </span>
                  <span class="text-white text--2"> Companies </span>
                </div>
                <div class="item item--3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path></svg>
                  <span class="quantity"> 150+ </span>
                  <span class="text-white text--3"> Vacancies </span>
                </div>
                <div class="item item--4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(220,91,183,1)"></path></svg>
                  <span class="quantity"> 1000+ </span>
                  <span class="text-white text--4"> Job Seekers </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Job Listings",
                    description: "Browse through thousands of job listings from top companies.",
                    image: jobListingImage,
                  },
                  {
                    title: "Easy Application",
                    description: "Apply to jobs quickly with our user-friendly application process.",
                    image: easyApplicationImage,
                  },
                  {
                    title: "Job Alerts",
                    description: "Get notified about new job postings that match your preferences.",
                    image: jobAlertsImage,
                  },
                  {
                    title: "Company Reviews",
                    description: "Read reviews about companies from current and past employees.",
                    image: companyReviewsImage,
                  },
                  {
                    title: "Create Account",
                    description: "Create a personalized account to save your favorite jobs.",
                    image: createAccountImage,
                  },
                  {
                    title: "Search Jobs",
                    description: "Use our advanced search to find jobs that fit your skills.",
                    image: searchJobsImage,
                  },
                  {
                    title: "Apply Online",
                    description: "Easily apply to jobs online with just a few clicks.",
                    image: applyOnlineImage,
                  },
                  {
                    title: "Get Hired",
                    description: "Increase your chances of getting hired by top companies.",
                    image: getHiredImage,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h2>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
