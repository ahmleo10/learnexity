import { useState } from "react";
import "./careerLaunch.css";

export default function CareerLaunch() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who are we?",
      answer:
        "Learnexity is an innovative eLearning platform designed to equip learners with the skills and knowledge needed to succeed in today's fast-paced digital world. With a focus on mentorship, internship, and career support, Learnexity provides a comprehensive learning experience that goes beyond traditional education."
    },
    {
      question: "Why are we here?",
      answer:
        "At Learnexity, we're on a mission to bridge the gap between education and industry. We're here to empower learners, professionals, and organizations to upskill, reskill, and thrive in an ever-evolving digital landscape."
    },
    {
      question: "Why should you choose us over others?",
      answer:
        "Industry-Experienced Mentors: Learn from professionals with real-world experience, not just theorists. Curriculum Designed by Experts: Our courses are crafted in collaboration with industry leaders to ensure you're learning the latest skills and trends."
    },
    {
      question: "What is our aim?",
      answer:
        "At Learnexity, our aim is simple: to empower individuals to unlock their full potential and achieve their goals through expert-led learning, practical experience, and career support."
    },
    {
      question: "Are we the best out there?",
      answer:
        "At Learnexity, we believe we're not just good, we're the best. Sign up to know more."
    }
  ];

  return (
    <div className="launch-container">

      <h1 className="launch-title">Ready to Launch<br />Your Career?</h1>
      <p className="launch-subtitle">
        Join hundreds of students who are already<br />
        on their path to success...
      </p>

      <div className="launch-buttons">
        <button className="btn white-btn">Join our community</button>
        <button className="btn purple-btn">Sign Up</button>
      </div>

      <p className="launch-note">Start your 7 days free trial. No credit card required</p>

      <div className="faq-wrapper">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "-" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}