import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <header className="bg-blue-300 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl text-purple-800 font-bold">Career Gateway</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-black">About Us</a>
            </li>
            <li>
              <a href="#contact" className="text-black">Contact Us</a>
            </li>
            <li className='ml-auto'>
              {isAuthenticated ? (
                <button 
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="text-black float-right"
                >
                  <i className="fas fa-right-to-bracket fa-xl"></i> 
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="text-black"
                >
                  <i className="fas fa-right-to-bracket fa-xl"></i> 
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
