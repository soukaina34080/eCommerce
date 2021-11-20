import React from "react";
import './hero.css';

export const Hero = () => {
  return (
    <div className="Hero">
      <p>
        Welcome in our e-commerce Website where you can buy, sell, any types of
        products
      </p>
      <br/>
      <input type="text" id="myInput" class="searchBar"  placeholder="Search for products.."/>

    </div>
  );
};

export default Hero;