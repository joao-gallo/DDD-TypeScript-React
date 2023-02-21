import { Link } from "react-router-dom";
import ProductsList from '../components/ProductsList'
// import { useState } from "react";

const Home = () => {
    
  return (
    <div className="home">
      <ProductsList></ProductsList>
      <Link to='/'>Return</Link>
    </div>
  );
};

export default Home;