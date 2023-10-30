import "./styles.css";

export default function HeroSection() {
  return (
    <>
      <section className="hero-container">
        <img
          src="portrait-2-sm.png"
          alt="Portrait founder"
          className="portrait-image"
        />

        <div className="title-container">
          <h1 className="title">Timeless Brews</h1>
          <p className="subtitle-name">Robert Watson</p>
          <p className="subtitle-description">Tisa's first brewmaster</p>
        </div>

        <p className="catchphrase">Discover the unexpected</p>
      </section>
    </>
  );
}
