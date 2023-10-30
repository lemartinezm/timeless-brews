import "./styles.css";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="left-color"></div>
      <div className="right-color"></div>
      <h1>Timeless Brews</h1>
      <p>Roy Watts</p>
      <p>First Tisa brewmaster</p>
      <img
        src="portrait-2-sm.png"
        alt="Portrait founder"
        className="portrait-image"
      />
    </section>
  );
}
