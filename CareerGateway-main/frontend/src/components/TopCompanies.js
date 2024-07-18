import React from 'react';

const TopCompanies = () => {
  return (
    <div className="py-10  bg-blue-50">
        <h3 className="text-2xl font-bold mb-4">Top Companies</h3>
      <div className="container mx-auto text-center">
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded">Company A</div>
          <div className="bg-white p-4 shadow rounded">Company B</div>
          <div className="bg-white p-4 shadow rounded">Company C</div>
          <div className="bg-white p-4 shadow rounded">Company D</div>
          {/* Add more companies as needed */}
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
