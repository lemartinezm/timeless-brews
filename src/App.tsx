import "./App.css";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";
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
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
