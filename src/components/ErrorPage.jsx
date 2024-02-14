import React from 'react';

const Error = () => {
  return (
    <section className="page_404 bg-white py-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg bg-cover bg-center h-96">
              <h1 className="text-center text-6xl text-white">404</h1>
            </div>
            <div className="contant_box_404 mt-10">
              <h3 className="text-4xl">Look like you're lost</h3>
              <p className="text-gray-600 mt-4">The page you are looking for is not available!</p>
              <a href="/" className="link_404 inline-block text-white bg-green-500 py-2 px-6 mt-4 rounded-md hover:bg-green-600">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
