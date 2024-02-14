import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const cartItems = useSelector((state) => state.cart.items.length);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-purle-500'>
        <Link to='/'>YUGEN.</Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        <li className='p-4 hover:bg-purple-500 rounded-xl m-2 cursor-pointer'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4 hover:bg-purple-500 rounded-xl m-2 cursor-pointer'>
          <Link to='/about'>About</Link>
        </li>
        <li className='p-4 hover:bg-purple-500 rounded-xl m-2 cursor-pointer'>
          <Link to='/products'>Products</Link>
        </li>
        <li className='p-4 hover:bg-purple-500 rounded-xl m-2 cursor-pointer'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='p-4 hover:bg-purple-500 rounded-xl m-2 cursor-pointer'>
          <Link to='/cart'>Cart</Link>
        </li>
        <span className='w-6 h-6 mb-4 flex items-center justify-center bg-black text-white rounded-full hover:bg-purple-500'>
          {cartItems}
        </span>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-purple-500 m-4'>
          <Link to='/'>Yugen.</Link>
        </h1>

        {/* Mobile Navigation Items */}
        <li className='p-4 border-b rounded-xl hover:bg-purple-500 cursor-pointer border-gray-600 text-white'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-purple-500 cursor-pointer border-gray-600 text-white'>
          <Link to='/about'>About</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-purple-500 cursor-pointer border-gray-600 text-white'>
          <Link to='/products'>Products</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-purple-500 cursor-pointer border-gray-600 text-white'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-purple-500 cursor-pointer border-gray-600 text-white '>
          <Link to='/cart'>Cart</Link>
        </li>
        <span className='w-6 h-6 mb-4 flex items-center justify-center bg-black text-white rounded-full hover:bg-purple-500'>
          {cartItems}
        </span>
      </ul>
    </div>
  );
};

export default Navbar;