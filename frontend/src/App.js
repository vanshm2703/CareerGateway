import React from 'react';
import Header from './components/Header';
import JobSearchBar from './components/JobSearchBar';
import PopularVacancies from './components/PopularVacancies';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import FeaturedJobs from './components/FeaturedJobs';
import TopCompanies from './components/TopCompanies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <JobSearchBar />
      <PopularVacancies />
      <HowItWorks />
      <Categories />
      <FeaturedJobs />
      <TopCompanies />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
