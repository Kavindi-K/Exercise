import React from "react";
import "./ContactPage.css";
import NavBar from "./NavBar";

const ContactPage = () => {
  return (
    <div className="contact-container">
        <NavBar/>
      <h1>Contact Us</h1>
      <p>Have any questions? Reach out to us!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
