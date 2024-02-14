// ProductComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchSingleProduct } from './actions';
import { selectProducts, selectSingleProduct, selectLoading, selectSingleLoading, selectError } from './selectors';

const ProductComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const singleProduct = useSelector(selectSingleProduct);
  const loading = useSelector(selectLoading);
  const singleLoading = useSelector(selectSingleLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSingleProduct());
  }, [dispatch]);

  // Render your component based on Redux state
};

export default ProductComponent;
