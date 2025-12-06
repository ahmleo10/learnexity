import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section">

      {/* TOP TITLE */}
      <h2 className="title">What Our Students Are Saying About Us</h2>

      {/* VIDEOS */}
      <div className="videos-container">

        {/* VIDEO 1 */}
        <div className="video-card">
          <video
            controls
            poster="/thumbnails/thumb1.jpg"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* VIDEO 2 */}
        <div className="video-card">
          <video
            controls
            poster="/thumbnails/thumb2.jpg"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* VIDEO 3 */}
        <div className="video-card">
          <video
            controls
            poster="/thumbnails/thumb3.jpg"
          >
            <source src="/videos/video3.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}