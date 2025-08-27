import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  // Array to generate multiple floating leaves
  const leaves = Array.from({ length: 8 });

  return (
    <footer className="footer">
      {/* Floating leaves overlay */}
      {leaves.map((_, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/assets/leaf.png`}
          alt="leaf"
          className="floatingLeaf"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            width: `${20 + Math.random() * 20}px`,
          }}
        />
      ))}

      <div className="footerContainer">
        {/* Column 1: About */}
        <div className="footerColumn">
          <h4 className="footerHeading">About Us</h4>
          <Link to="/our-story" className="fLink">Our Story</Link>
          <Link to="/careers" className="fLink">Careers</Link>
          <Link to="/contact" className="fLink">Contact Us</Link>
          <Link to="/stores" className="fLink">Locate Stores</Link>

          
        </div>

        {/* Column 2: Customer Care */}
        <div className="footerColumn">
          <h4 className="footerHeading">Customer Care</h4>
          <Link to="/faq" className="fLink">FAQs</Link>
          <Link to="/shipping" className="fLink">Shipping Policy</Link>
          <Link to="/privacy" className="fLink">Privacy Policy</Link>
          <Link to="/terms" className="fLink">Terms & Conditions</Link>

          <h4 className="footerHeading">Offers & Rewards</h4>
          <Link to="/rewards" className="fLink">Rewards Club</Link>
          <Link to="/coupons" className="fLink">Coupons</Link>
        </div>

        {/* Column 3: Newsletter & Contact */}
        <div className="footerColumn">
          <h4 className="footerHeading">Stay Connected</h4>
          <form className="newsletterForm">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>

          <h4 className="footerHeading">Contact Us</h4>
          <p className="fLink">WhatsApp: <a href="https://wa.me/8087087224">80870-87224</a></p>
          <p className="fLink">Call: <a href="tel:+919129912991">+91-91299-12991</a></p>
          <p className="fLink">Email: <a href="mailto:support@example.com">support@example.com</a></p>
        </div>

        {/* Column 4: Social & Payments */}
        <div className="footerColumn">
          <h4 className="footerHeading">Follow Us</h4>
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/8087087224" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>

          <h4 className="footerHeading">Payment Methods</h4>
          <div className="paymentIcons">
            <img src={`${process.env.PUBLIC_URL}/assets/visa.png`} alt="Visa" />
            <img src={`${process.env.PUBLIC_URL}/assets/mastercard.png`} alt="MasterCard" />
            <img src={`${process.env.PUBLIC_URL}/assets/paypal.png`} alt="PayPal" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footerBottom">
        © {new Date().getFullYear()} ShopifyX. All rights reserved.
      </div>
    </footer>
  );
}
