import React from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

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
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-8 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 animate-fade-in flex flex-row space-x-4 justify-center">
        <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5 flex flex-col justify-evenly">
          <div className="" onClick={() => navigate("/employer-dashboard")}>
            <div
              className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500"
              style={{
                backgroundImage: `url(${require("./card1.jpeg")})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
              <span className="text-xl font-bold">Employers</span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                "Attract top talent – post your job openings with us today!"
              </p>
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5 flex flex-col justify-evenly">
          <div className="" onClick={() => navigate("/jobseeker-dashboard")}>
            <div
              className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500"
              style={{
                backgroundImage: `url(${require("./card2.jpeg")})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
              <span className="text-xl font-bold">Job Seekers</span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                "Discover your next career move – apply with us today!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;