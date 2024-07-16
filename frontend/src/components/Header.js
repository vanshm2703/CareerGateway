// Header.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header className="bg-blue-300 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl text-purple-800 font-bold">Career Gateway</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              {isAuthenticated ? (
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="text-black"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="text-black"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
