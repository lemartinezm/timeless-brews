import "./App.css";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <DescriptionSection />
        <ProductsSection />
      </main>
    </div>
  );
}

export default App;
