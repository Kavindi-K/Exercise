import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="brand-name">StyleFusion</h1>
        <nav className="navbar">
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Where style speakes, trends resonate, fashion flourishes</h2>
        <p>Discover trendy clothing for every occasion.</p>
        <button className="shop-now-btn">Shop Now</button>
      </section>

      <section id="shop" className="collection">
        <h2>Our Collections</h2>
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
      </section>

      <footer className="footer">
        <p>&copy; 2025 StyleFusion. All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
