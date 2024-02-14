import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Trusted from './Trusted';
import FeaturedProducts from './FeaturedProducts';
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>

  );
}

export default Home;
