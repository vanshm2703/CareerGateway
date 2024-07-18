import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Roles from './components/Roles';
import Jobseeker from './components/jobseeker-dashboard';
import Profile from './components/Profiles';

import Navbar from './components/NavbarTab';

function App() {
  return (
      <div>
        
  
      <Router>
     
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/jobseeker-dashboard" element={<Jobseeker />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      </div>
  );
}

export default App;
