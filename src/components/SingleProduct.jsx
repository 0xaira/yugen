import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.pujakaitem.com/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  console.log('Product Image:', product?.image); // Log the product image URL

  return (
    <div className="container mx-auto py-12">
      {product ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {product.image && ( // Ensure that product.image is not null or undefined
            <img src={product.image[1].url} alt={product.title} className="w-full h-64 object-cover" />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-semibold">${product.price}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
