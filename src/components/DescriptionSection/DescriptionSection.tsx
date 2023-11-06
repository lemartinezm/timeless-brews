import "./styles.css";

export default function DescriptionSection() {
  return (
    <section className="description-container" id="history">
      <article className="description-left">
        <h2 className="description-title">Forged from steel</h2>
        <p className="description-subtitle">
          Find out a few interesting facts about our signature steel timeless
          can
        </p>
        <div className="image-container">
          <img src="/timeless-1-nobg.webp" alt="Timeless brews image" />
        </div>
      </article>
      <article className="description-right">
        <h2 className="description-title">Tisa's beer in America</h2>
        <p className="description-subtitle">
          Products sold in the U.S. are brewed in the U.S., Canada and Vietnam.
        </p>
        <img src="/logo-3-lg-light.webp" alt="Logo" />
        <p className="description-text">
          Timeless brews premium lagers using the highest-quality ingredients we
          cand find giving each of our beers our signature crisp, refreshing
          flavor and clean finish. Whatever your taste, we've got a beer for
          you.
        </p>
      </article>
    </section>
  );
}
