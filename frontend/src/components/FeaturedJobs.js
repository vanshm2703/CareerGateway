import React from 'react';

const FeaturedJobs = () => {
  return (
    <div className=" bg-blue-50 py-10">
          <h3 className="text-2xl font-bold mb-4 text-left">Featured Jobs</h3>
      <div className="container mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-bold">Frontend Developer</h4>
            <p>Company ABC</p>
            <p>Location XYZ</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-bold">Backend Developer</h4>
            <p>Company DEF</p>
            <p>Location UVW</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-bold">Fullstack Developer</h4>
            <p>Company GHI</p>
            <p>Location RST</p>
          </div>
          {/* Add more featured jobs as needed */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
