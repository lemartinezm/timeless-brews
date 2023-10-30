import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navlinks">
          {/* <li>Our History</li>
            <li>Our Beers</li> */}
          <li>
            <img src="logo-3-sm-light.png" alt="Logo" className="logo" />
          </li>
          {/* <li>East Meet West</li>
            <li>Find Timeless Brews</li> */}
        </ul>
      </nav>
    </header>
  );
}
