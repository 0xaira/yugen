import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdSecurity } from 'react-icons/md';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import Star from './Star';
import IncrementDecrement from "./IncrementDecrement"
const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.pujakaitem.com/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.image[0].url); // Set initial selected image
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={selectedImage} alt={product?.title} className="w-full h-auto" />
          <div className="flex justify-center mt-4">
            {product?.image &&
              product.image.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={product.title}
                  className="w-16 h-16 object-cover m-1 cursor-pointer"
                  onClick={() => handleImageClick(img.url)}
                />
              ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <nav className="text-sm" aria-label="breadcrumb">
            <ol className="flex">
              <li className="breadcrumb-item">
                <Link to="/" className="text-purple-600">
                  Home
                </Link>
              </li>
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                {product?.name}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold my-4">{product?.name}</h1>
          <div className="flex items-center mb-4">
            <Star stars={product?.stars} reviews={product?.reviews} />
          </div>
          <p className="text-gray-600 mb-4">{product?.description}</p>
          <div className="flex items-center mb-4">
            <TbTruckDelivery className="w-6 h-6 mr-2 text-purple-600" />
            <p>Free Delivery</p>
          </div>
          <div className="flex items-center mb-4">
            <TbReplace className="w-6 h-6 mr-2 text-purple-600" />
            <p>30 Days Replacement</p>
          </div>
          <div className="flex items-center mb-4">
            <MdSecurity className="w-6 h-6 mr-2 text-purple-600" />
            <p>2 Year Warranty</p>
          </div>
          <p className="text-gray-800 font-semibold mb-2">
            MRP: <del>${product?.price + 250000}</del>
          </p>
          <p className="text-gray-800 font-semibold">Deal of the Day: ${product?.price}</p>
          <p className="text-gray-600 mb-4">Available: {product?.stock > 0 ? 'In Stock' : 'Not Available'}</p>
          <IncrementDecrement/>
          {product?.stock > 0 && (
            <>
            
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;