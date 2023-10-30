import "./App.css";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <DescriptionSection />
      </main>
    </div>
  );
}

export default App;
