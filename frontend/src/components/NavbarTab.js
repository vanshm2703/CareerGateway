import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

const Navbar = () => {
   const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    
    <nav className="bg-zinc-500 p-4 text-white flex justify-between items-center shadow-zinc-500-20px">
      <div className="flex items-center">
        <img src={require('./icon.png')} alt="Company Logo" className="h-10 w-10 mr-2" />
        <span className="font-bold text-2xl">Career Gateway</span>
      </div>
      <div className="space-x-10 flex items-center">
        <Link to="/" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">Home</Link>
        <Link to="/aboutus" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">About Us</Link>
        <Link to="/contactus" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">Contact Us</Link>
      </div>
      {isAuthenticated ? (
        <div>
          <button class="Btn"    onClick={() => logout({ returnTo: window.location.origin })}>

            <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

            <div class="text">Logout</div>
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
    </nav>
  );
};

export default Navbar;

