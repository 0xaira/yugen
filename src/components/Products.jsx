import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Navbar from './Navbar';
import Dropdown from './DropDown';
import DropdownMenu from './DropDownMenu';
import PriceSlider from './PriceSlider';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // Track the view mode (grid or list)
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

  // Function to toggle between grid and list view
  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <>
      <Navbar />

      <div className="w-5/6 mx-auto">
        <div className="flex items-center">
          <div className="flex items-center space-x-4 w-2/3">
            <input type="text" placeholder="Search" className="w-64 px-4 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400" />
            <button className="px-4 py-3 text-white bg-gray-400 hover:bg-purple-600 rounded-lg focus:outline-none focus:ring focus:border-purple-400"><IoSearch /></button>
          </div>
          <div className="flex items-center justify-between w-[2000px]">
            <div className='flex gap-2'>
              <button onClick={toggleViewMode}><HiOutlineViewGrid className={`w-8 h-8 ${viewMode === 'grid' ? 'text-purple-600' : 'text-gray-500'}`} /></button>
              <button onClick={toggleViewMode}><HiOutlineViewList className={`w-8 h-8 ${viewMode === 'list' ? 'text-purple-600' : 'text-gray-500'}`} /></button>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800">Total Items</span>
            </div>
            <DropdownMenu />
          </div>
        </div>

        <div className='flex'>

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
              <PriceSlider />
            </div>
            <button className="px-4 py-2 text-white bg-purple-500 rounded-lg mt-6 focus:outline-none focus:ring hover:bg-purple-600 transition duration-300">Clear Filters</button>
          </div>

          {/* Right Section */}
          <div className='w-[900px] ml-10'>
            <div className="container mx-auto py-12">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : (
                <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-8' : 'flex flex-col gap-4'}`}>
                  {products.map((product) => (
                    <div key={product.id} className={`${viewMode === 'grid' ? 'bg-white shadow-lg rounded-lg overflow-hidden' : 'bg-gray-100 p-4 rounded-lg'}`}>
                      <Link to={`/products/${product.id}`} className="relative">
                        <img src={product.image} alt={product.title} className={`w-full h-34 object-cover transition duration-300 transform hover:scale-110 ${viewMode === 'list' ? 'mb-4' : ''}`} />
                        <div className={`${viewMode === 'grid' ? 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100' : 'flex items-center justify-between'}`}>
                          {viewMode === 'grid' && <p className="text-white text-center">View Details</p>}
                          <div className="flex flex-col">
                            <h3 className="font-semibold mb-2 text-black">{product.name}</h3>
                            <p className="font-semibold text-purple-500">${product.price}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Products;
