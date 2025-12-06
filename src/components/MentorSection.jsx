import "./MentorSection.css";

import mentor1 from "../assets/mentor1.jpg";
import mentor2 from "../assets/mentor2.jpg";
import mentor3 from "../assets/mentor3.jpg";
import mentor4 from "../assets/mentor4.jpg";

export default function MentorSection() {
  const mentors = [
    {
      img: mentor1,
      name: "Alex Oluwatoyin",
      role: "UI/UX Mentor",
      experience:
        "Experience: 5+ years in UI/UX design, with expertise in user research, wireframing, and prototyping.",
      about:
        "About: Passionate about helping aspiring designers grow, I offer guidance on design principles, industry best practices, and portfolio development.",
      skills:
        "Skills: User-centered design, Figma, Sketch, Adobe XD, InVision, and more.",
      approach:
        "Mentorship Approach: Personalized sessions, hands-on projects, and constructive feedback to help you achieve your design goals.",
    },
    {
      img: mentor2,
      name: "Chinedu Obi",
      role: "Cybersecurity Mentor",
      experience:
        "Experience: 7+ years in cybersecurity, with expertise in threat analysis, penetration testing, and security architecture.",
      about:
        "About: Dedicated to empowering individuals in cybersecurity, I provide guidance on security frameworks, risk management, and industry certifications.",
      skills:
        "Skills: Network security, incident response, cloud security, compliance, and more.",
      approach:
        "Mentorship Approach: Hands-on training, real-world scenarios, and personalized coaching to help you excel in cybersecurity.",
    },
    {
      img: mentor3,
      name: "Aisha Mohammed",
      role: "Data Analyst Mentor",
      experience:
        "Experience: 6+ years in data analysis, with expertise in data visualization, SQL, and machine learning.",
      about:
        "About: Passionate about helping aspiring data analysts develop skills, I offer guidance on data storytelling, statistical analysis, and tools like Excel, Tableau, and Power BI.",
      skills:
        "Skills: Data visualization, SQL, Python, R, statistics, and data mining.",
      approach:
        "Mentorship Approach: Personalized sessions, real-world projects, and constructive feedback to help you improve data analysis skills.",
    },
    {
      img: mentor4,
      name: "Dr. Kofi Amadi",
      role: "AI Automation Mentor",
      experience:
        "Experience: 8+ years in AI, ML, and automation, with expertise in RPA, computer vision, and NLP.",
      about:
        "About: Passionate about empowering individuals to leverage AI automation, I provide guidance on intelligent process automation, machine learning, and AI-driven innovation.",
      skills:
        "Skills: RPA, AI, ML, DL, CV, NLP, Python, TensorFlow, and automation frameworks.",
      approach:
        "Mentorship Approach: Hands-on training, real-world case studies, and personalized coaching to help you master AI automation.",
    },
  ];

  return (
    <div className="mentor-container">
      <h1 className="mentor-title">Meet Our Incredible Mentors</h1>

      {mentors.map((m, index) => (
        <div key={index} className="mentor-card">
          <div className="mentor-image-container">
            <img src={m.img} alt={m.name} className="mentor-img" />
          </div>

          <div className="mentor-stars">★★★★</div>

          <p><strong>Name:</strong> {m.name}</p>
          <p><strong>Role:</strong> {m.role}</p>
          <p>{m.experience}</p>
          <p>{m.about}</p>
          <p>{m.skills}</p>
          <p>{m.approach}</p>

          <button className="book-btn">Book now</button>
        </div>
      ))}

      <button className="explore-btn">Explore other mentors</button>
    </div>
  );
}