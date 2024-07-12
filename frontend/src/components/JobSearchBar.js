import React from 'react';

const JobSearchBar = () => {
  return (
    <div className=" bg-blue-50 py-10">
        <h3 className="text-3xl font-bold mb-4">Find a job that suits your interest & skills.</h3>
      <div className="container mx-auto text-center">
        
        <form className="flex justify-center space-x-4">
          <input type="text" placeholder="Job title, keywords" className="p-2 border rounded" />
          <input type="text" placeholder="Location" className="p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
        </form>
      </div>
    </div>
  );
};

export default JobSearchBar;
