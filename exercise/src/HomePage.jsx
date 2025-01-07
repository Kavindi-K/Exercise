import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="home-container"> 
    <NavBar/>
    <img src="/home.jpg" alt="Home Background" className="home-image" />
      <header className="header">
        <h1 className="brand-name">StyleFusion</h1>
      </header>

      <section className="hero">
        <h2>Where style speaks, trends resonate, fashion flourishes</h2>
        <p>Discover trendy clothing for every occasion.</p>
        <button 
          className="shop-now-btn" 
          onClick={() => window.location.href = "#shop"}
        >
          Shop Now
        </button>
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
