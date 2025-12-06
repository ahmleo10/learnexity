import React from "react";
import { FiSearch } from "react-icons/fi";
import im3 from "../assets/im3.jpg";   // your image path
import "./CareerTracks.css";

export default function CareerTracks() {
  const courses = [
    "Full stack dev.",
    "UI/UX",
    "Front end",
    "Back end",
    "AI automation",
    "Cyber security",
    "Product manager",
    "Web3",
    "Data analysis",
    "Video editing",
  ];

  return (
    <div className="career-container">

      {/* TOP IMAGE */}
      <div className="career-img-wrapper">
        <img src={im3} alt="career illustration" className="career-img" />
      </div>

      {/* TITLE */}
      <h1 className="career-title">Strugling to Launch Your Career?</h1>

      <p className="career-sub">
        Connect with expert mentors, access real internship and develop the
        skills you need to succeed in your career journey.
      </p>

      {/* SEARCH TITLE */}
      <h2 className="career-mentor-title">Get mentored by our team</h2>

      {/* SEARCH BAR */}
      <div className="career-search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* TRACK TITLE */}
      <h2 className="track-title">Choose your track</h2>

      {/* COURSES LIST */}
      <div className="career-list">
        {courses.map((course, index) => (
          <div key={index} className="career-item">
            {course}
          </div>
        ))}
      </div>

    </div>
  );
}