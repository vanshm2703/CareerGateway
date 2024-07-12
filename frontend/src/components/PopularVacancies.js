import React from 'react';

const PopularVacancies = () => {
  return (
    <div className="py-10 bg-blue-50">
     <h3 className="text-2xl font-bold mb-4">Most Popular Vacancies</h3>
      <div className="container mx-auto text-center">
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">Software Engineer</div>
          <div className="bg-white p-4 shadow rounded">Data Scientist</div>
          <div className="bg-white p-4 shadow rounded">Project Manager</div>
          {/* Add more vacancies as needed */}
        </div>
      </div>
    </div>
  );
};

export default PopularVacancies;
