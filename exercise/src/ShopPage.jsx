import React from "react";
import "./ShopPage.css";
import NavBar from "./NavBar";

const ShopPage = () => {
  return (
    <div className="shop-page-container">
        <NavBar/>
      <h1>Our Collections</h1>
      <div className="products">
        <div className="product-card">
          <img src="dress.jpg" alt="Elegant Dress" className="product-img" />
          <h3>Elegant Dresses</h3>
        </div>
        <div className="product-card">
          <img src="shirt.jpg" alt="Trendy Shirt" className="product-img" />
          <h3>Trendy Shirts</h3>
        </div>
        <div className="product-card">
          <img src="pants.jpg" alt="Stylish Pants" className="product-img" />
          <h3>Stylish Pants</h3>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
