import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiCircleList } from "react-icons/ci";
import DropdownMenu from './DropDownMenu';
import PriceSlider from './PriceSlider';
import { IoSearch } from "react-icons/io5";
import Navbar from './Navbar'
import Dropdown from './DropDown';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const API = "https://api.pujakaitem.com/api/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <Navbar />

      <div className="w-5/6 mx-auto">
        <div className="flex items-center  ">
          <div className="flex items-center space-x-4 w-2/3 ">
            <input type="text" placeholder="Search" className="w-64 px-4 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400" />
            <button className="px-4 py-3 text-white bg-gray-400 hover:bg-purple-600 rounded-lg focus:outline-none focus:ring focus:border-purple-400"><IoSearch /></button>
          </div>
          <div className="flex items-center justify-between w-[2000px] ">
            <div className='flex gap-2'>
              <HiOutlineViewGrid className="w-8 h-8" />
              <CiCircleList className="w-8 h-8" />
            </div>
            <div className="flex items-center ">
              <span className="text-gray-800">Total Items</span>
            </div>
            <DropdownMenu />
          </div>
        </div>
        </div>
        <div className='flex '>

          {/* Left Section*/}
          <div className='w-[300px] h-[800px] text-black mt-4 p-6 ml-32 rounded-lg'>
            <div>
              <h1 className='font-bold text-2xl mb-4'>Categories</h1>
              <ul className="space-y-2 hover:cursor-pointer ">
                <li className="hover:text-purple-500 transition duration-300 hover:underline">All</li>
                <li className="hover:text-purple-500 transition duration-300 hover:underline">Mobile</li>
                <li className="hover:text-purple-500 transition duration-300 hover:underline">Laptop</li>
                <li className="hover:text-purple-500 transition duration-300 hover:underline">Computer</li>
                <li className="hover:text-purple-500 transition duration-300 hover:underline">Accessories</li>
                <li className="hover:text-purple-500 transition duration-300 hover:underline">Watch</li>
              </ul>
            </div>
            <div className="mt-6">
              <h1 className='font-bold text-2xl mb-4'>Company</h1>
              <Dropdown />
            </div>
            <div className="mt-6 ">
              <h1 className='font-bold text-2xl mb-4'>Price Range</h1>
              <PriceSlider/>
            </div>
            <button className="px-4 py-2 text-white bg-purple-500 rounded-lg mt-6 focus:outline-none focus:ring hover:bg-purple-600 transition duration-300">Clear Filters</button>
          </div>

          {/* Right Section */}
          <div className='w-[900px] ml-10'>
            <div className="container mx-auto py-12">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <Link to={`/products/${product.id}`} className="relative">
                        <img src={product.image} alt={product.title} className="w-full h-34 object-cover transition duration-300 transform hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
                          <p className="text-white text-center">View Details</p>
                        </div>
                      </Link>
                      <div className=" flex py-2 justify-between px-3">
                        <h3 className="font-semibold  mb-2 text-black">{product.name}</h3>
                        <p className=" font-semibold text-purple-500">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Products;
