import React from 'react';

const Categories = () => {
  return (
    <div className="py-10  bg-blue-50">
     <h3 className="text-2xl font-bold mb-4">Popular Categories</h3>
     <div className="container mx-auto text-center">
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded">IT & Software</div>
          <div className="bg-white p-4 shadow rounded">Healthcare</div>
          <div className="bg-white p-4 shadow rounded">Finance</div>
          <div className="bg-white p-4 shadow rounded">Education</div>
          {/* Add more categories as needed */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
