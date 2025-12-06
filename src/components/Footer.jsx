import "./Footer.css";
import logo from "../assets/logo.jpg";

// React Icons
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Left Logo + Tagline */}
        <div className="footer-left">
          <img src={logo} alt="Learnexity Logo" className="footer-logo" />
          <p className="footer-tagline">
            Empowering Careers through mentorship and learning.
          </p>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Course Catalog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career Services</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Mentors</a></li>
            <li><a href="#">Internship</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact + Social Icons */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="mailto:info@learnexity.com">info@learnexity.com</a></li>
            <li><a href="tel:+12782528415">+1 (278) 252-8415</a></li>
          </ul>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © 2025 Learnexity — All rights reserved.
      </div>
    </footer>
  );
}