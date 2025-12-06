import React from 'react';
import './Hero.css';
// If you have the hero images, put them in src/assets/ and import below
import heroImg from '../assets/im1.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left side - Text */}
        <div className="hero-text">
          <h1>
            Launch Your Dream <span className="highlight">Career.</span>
          </h1>
          <p>
            End the struggle of fragmented learning. Get mentorship, real projects,
            and guaranteed internships, all in one platform.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get started</button>
            <button className="btn-secondary">Sign up</button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hero-image">
          <img 
            src={heroImg}
            alt="Students learning together" 
          />
        </div>
      </div>

      {/* Floating background dots */}
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}