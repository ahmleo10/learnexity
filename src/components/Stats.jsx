import React, { useEffect, useRef } from "react";
import "./stats.css";

export default function Stats() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
  }, []);

  const stats = [
    { number: "350+", label: "Students", icon: "👥" },
    { number: "5h+", label: "Time spent on content", icon: "⏱️" },
    { number: "3+", label: "Countries", icon: "🌍" },
    { number: "15+", label: "Courses", icon: "📚" },
  ];

  return (
    <div className="stats-container">
      {stats.map((item, i) => (
        <div
          key={i}
          className="stat-card"
          ref={el => (cardsRef.current[i] = el)}
        >
          <div className="icon-wrapper">
            <span className="icon">{item.icon}</span>
          </div>

          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}