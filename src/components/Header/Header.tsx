import { useState } from "react";
import MenuSvg from "../Icons/Menu/Menu";
import "./styles.css";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <header>
      <nav className="navbar">
        <ul className={showNavbar ? "navlinks active" : "navlinks"}>
          <li className="link-left">
            <a href="#history" className="link">
              Our History
            </a>
          </li>
          <li className="link-left">
            <a href="#beers" className="link">
              Our Beers
            </a>
          </li>
          <li className="link-logo">
            <img src="logo-3-sm-light.webp" alt="Logo" className="logo" />
          </li>
          <li className="link-right">
            <a href="#live-timeless" className="link">
              Live Timeless
            </a>
          </li>
          <li className="link-right">
            <a
              href="https://zentia-store.vercel.app/search?search=timeless"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Find Timeless
            </a>
          </li>
        </ul>
      </nav>
      <div className="logo-container">
        <img src="logo-3-sm-light.webp" alt="Logo" className="logo" />
      </div>

      <div className="menu-container">
        <MenuSvg
          className=""
          isOpen={showNavbar}
          onClick={() => setShowNavbar((val) => !val)}
        />
      </div>
    </header>
  );
}
// TODO: terminar la animacion del header mobile
