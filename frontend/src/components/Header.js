import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-300 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl text-purple-800 font-bold">Career Gateway</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#login" className="text-black">Login</a></li>
            <li><a href="#register" className="text-black">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
