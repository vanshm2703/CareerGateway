import React from 'react';

const Testimonials = () => {
  return (
    <div className=" bg-blue-50 py-10">
         <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>
      <div className="container mx-auto text-center">
       
        <div className="flex justify-around">
          <div className="bg-white p-4 shadow rounded">
            <p>"Great service!"</p>
            <p>- User A</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p>"Helped me find my dream job!"</p>
            <p>- User B</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p>"Highly recommend!"</p>
            <p>- User C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
