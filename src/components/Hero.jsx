import React from 'react';
import heroImage from '../img/hero.png';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-24 lg:px-32 xl:px-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Welcome to</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">YUGEN</h1>
          <p className="text-gray-700 leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-purple-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-purple-600 transition duration-300 ease-in-out">Shop Now</button>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
