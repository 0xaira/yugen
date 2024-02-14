import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';

const FeaturedProducts = () => {
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
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">Featured Products</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-2">{product.description.slice(0, 30)}...</p>
                <p className="text-gray-800 font-semibold">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;