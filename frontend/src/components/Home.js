// Home.js
import React from "react";
import "./Home.css";
import shoeModel from "./shoeModel.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>UrbanBuy</h1>
        <p>Best shoes at best price</p>
        <button className="btn-main">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={shoeModel} alt="Shoe" />
      </div>
    </div>
  );
};

export default Home;
