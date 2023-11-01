import "./styles.css";

export default function ProductsSection() {
  return (
    <section className="products-container">
      <article className="product-card">
        <img src="/blue-nobg.png" alt="Timeless Blue Beer" />
        <h3 className="product-title">Blue Beer</h3>
        <p className="product-description">
          A full-bodied all-malt beer with intense complexity.
        </p>
      </article>

      <article className="product-card">
        <img src="/premium-nobg.png" alt="Timeless Premium Beer" />
        <h3 className="product-title">Premium Beer</h3>
        <p className="product-description">
          Amazingly crisp, perfectly balanced taste.
        </p>
      </article>

      <article className="product-card">
        <img src="/light-nobg.png" alt="Timeless Light Beer" />
        <h3 className="product-title">Light Beer</h3>
        <p className="product-description">
          A smooth and clean taste inherited from Timeless Premium.
        </p>
      </article>
    </section>
  );
}
// TODO: terminar la seccion de productos. quitar los fondos?
