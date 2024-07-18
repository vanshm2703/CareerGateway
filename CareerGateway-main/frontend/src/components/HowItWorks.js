import React from 'react';

const HowItWorks = () => {
  return (
    <div className=" bg-blue-50 py-10">
    <h3 className="text-2xl font-bold mb-4">How JobPortal Works</h3>

      <div className="container mx-auto text-center">
       
        <div className="flex justify-around">
          <div className="bg-white p-4 shadow rounded">Create an Account</div>
          <div className="bg-white p-4 shadow rounded">Search for Jobs</div>
          <div className="bg-white p-4 shadow rounded">Apply for Jobs</div>
          <div className="bg-white p-4 shadow rounded">Get Hired</div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
