import "./styles.css";

export default function ExperienceSection() {
  return (
    <section className="experience-container">
      <h2 className="experience-title">Live the experience</h2>
      <p className="experience-subtitle">#LiveTimeless</p>
      <div className="experience-images-container">
        <img
          src="/experience-7.jpg"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-3.jpg"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-4.jpg"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-5.jpg"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-6.jpg"
          alt="Experience image"
          className="experience-image"
        />
        <img
          src="/experience-8.jpg"
          alt="Experience image"
          className="experience-image"
        />
      </div>
    </section>
  );
}
