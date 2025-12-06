import React from "react";
import "./CareerHero.css";
import im1 from "../assets/im2.jpg";

export default function Career() {
  return (
    <div className="career-hero">
      <div className="career-left">
        <h1>
          Having Difficulties in the <br /> career to choose?
        </h1>

        <p>
          That’s why Learnexity exists, we help you discover the talent in you.
        </p>

        <div className="career-buttons">
          <button className="btn-primary">Register now</button>
          <button className="btn-secondary">Book a session</button>
        </div>
      </div>

      <div className="career-right">
        <img src={im1} alt="thinking person" className="career-img" />
      </div>
    </div>
  );
}