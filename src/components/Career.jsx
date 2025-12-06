import "./Career.css";
import im4 from "../assets/im4.jpg";

export default function Career() {
  return (
    <div className="career-container">

      <div className="career-hero">
        {/* LEFT TEXT */}
        <div className="career-left">
          <h1>
            Gain Real <br />
            Work <br />
            EXperience <br />
            with <br />
            Learnenxity.
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="career-right">
          <img src={im4} alt="intern" />
        </div>
      </div>

      {/* MIDDLE PARAGRAPH */}
      <p className="career-desc">
        At learnexity we dont just teach we give you the opportunity to gain real
        work experience both our students and nonstundnts
      </p>

      {/* BUTTON */}
      <button className="career-btn">Apply for an Internship</button>

      {/* BELOW PARAGRAPH */}
      <p className="career-companies-text">
        We partner with reliable companies which you can eventually land ur self
        a job or get a paid internship opportunity
      </p>

      {/* LOGOS */}
      <div className="career-logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" alt="Cisco" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" />
 
</div>

    </div>
  );
}