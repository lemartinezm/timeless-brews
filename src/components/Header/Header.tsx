import MenuSvg from "../Icons/Menu";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navlinks">
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
          <li className="logo-container">
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
      <div className="menu-container">
        <MenuSvg color="var(--secondary-color)" />
      </div>
    </header>
  );
}
