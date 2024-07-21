import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Roles from './components/Roles';
import Jobseeker from './components/jobseeker-dashboard';
import Profile from './components/Profiles';
import Employer from './components/employer-dashboard';
import ContactUsPage from "./components/ContactUsPage";
import NotificationList from "./components/NotificationList";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/NavbarTab";


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
            <Route path="/employer-dashboard" element={<Employer />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/notifications" element={<NotificationList />} />
            <Route path="/aboutus" element={<AboutUs />} />
            
             
          </Routes>
          <Footer />
        </div>
      </Router>
      </div>
  );
}

export default App;
