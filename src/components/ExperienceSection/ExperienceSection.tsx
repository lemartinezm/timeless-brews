import { useRef } from "react";
import "./styles.css";

export default function ExperienceSection() {
  const liveTimeless = useRef(null);
  return (
    <section
      className="experience-container"
      id="live-timeless"
      ref={liveTimeless}
    >
      <h2 className="experience-title">Live the experience</h2>
      <p className="experience-subtitle">#LiveTimeless</p>
      <div className="experience-images-container">
        <img
          src="/experience-7.webp"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-3.webp"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-4.webp"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-5.webp"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-6.webp"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-8.webp"
          alt="Experience image"
          className="experience-image"
        />
      </div>
    </section>
  );
}
