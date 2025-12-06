import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <div className="how-wrapper">

      {/* SWIPE CARDS */}
      <div className="cards-container">

        <div className="how-card">
          <FaRegUser className="how-icon" />
          <h3>Create Your Profile.</h3>
          <p>Sign up and tell us your career goals and interests.</p>
        </div>

        <div className="how-card">
          <PiUsersThreeLight className="how-icon" />
          <h3>Connect With Mentors.</h3>
          <p>We pair you with mentors and opportunities that fit your goal.</p>
        </div>

        <div className="how-card">
          <FiTrendingUp className="how-icon" />
          <h3>Learn and Grow.</h3>
          <p>Take courses, attend sessions and gain practical experience.</p>
        </div>

        <div className="how-card">
          <HiOutlineBriefcase className="how-icon" />
          <h3>Apply for Internship.</h3>
          <p>Land your dream job or internship with confidence.</p>
        </div>

      </div>

      {/* TITLE BELOW */}
      <h2 className="how-title">How it works.</h2>
    </div>
  );
}