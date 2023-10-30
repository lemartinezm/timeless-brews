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
          <h1>Timeless Brews</h1>
          <p>Robert Watson</p>
          <p>First Tisa brewmaster</p>
        </div>
      </section>
    </>
  );
}
