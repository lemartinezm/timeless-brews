import MenuSvg from "../Icons/Menu";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navlinks">
          <li className="link-left">Our History</li>
          <li className="link-left">Our Beers</li>
          <li className="logo-container">
            <img src="logo-3-sm-light.png" alt="Logo" className="logo" />
          </li>
          <li className="link-right">East Meet West</li>
          <li className="link-right">Find Timeless</li>
        </ul>
      </nav>
      <div className="menu-container">
        <MenuSvg color="var(--secondary-color)" />
      </div>
    </header>
  );
}
