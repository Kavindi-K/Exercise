import React from "react";
import "./AboutUsPage.css";
import NavBar from "./NavBar";

const AboutUsPage = () => {
  return (
    <div className="about-container">
        <NavBar/>
      <h1>About Us</h1>

      <img 
        src="/about.jpg" // Path to your image in the 'public' folder
        alt="About StyleFusion"
        className="about-image"
      />

      <h3>Welcome to StyleFusion</h3>
        <p>At StyleFusion, we believe that clothing is more than just fabric—it's a way of expressing individuality and celebrating the art of personal style. Our mission is to seamlessly blend timeless designs with contemporary trends, creating apparel that resonates with the spirit of modern living.
        </p>
      <h3>Our Journey</h3>
        <p>Founded with a passion for fashion and a vision to redefine everyday wear, StyleFusion has grown into a brand that stands for quality, creativity, and authenticity. From humble beginnings, we've been committed to crafting collections that inspire confidence and empower our customers to embrace their unique style.
        </p>
      <h3>What We Stand For</h3>
        <p>StyleFusion is more than just a clothing brand; it’s a community of fashion enthusiasts who value comfort, elegance, and versatility. Every piece in our collection is thoughtfully designed to reflect a fusion of aesthetics and practicality, ensuring you look and feel your best in every moment.
        </p>
      <h3>Our Commitment</h3>
        <p>Sustainability and ethical practices are at the heart of everything we do. From sourcing eco-friendly materials to working with artisans who share our values, we strive to make a positive impact on the planet and the people who bring our creations to life.
        </p>
      <h3>Join the StyleFusion Family</h3>
        <p>Whether you're looking for statement pieces or wardrobe staples, StyleFusion is here to help you define your fashion story. Thank you for choosing us to be a part of your style journey—we're thrilled to have you with us!
        </p>
    </div>

  );
};

export default AboutUsPage;
