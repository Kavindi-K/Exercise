import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="home" className="nav-link">Home</a>
      <a href="shop" className="nav-link">Shop</a>
      <a href="about" className="nav-link">About Us</a>
      <a href="contact" className="nav-link">Contact</a>
    </nav>
  );
};

export default NavBar;
