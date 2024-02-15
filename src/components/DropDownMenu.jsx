import React, { useState } from 'react';
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-purple-400"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">
                Option 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">
                Option 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
