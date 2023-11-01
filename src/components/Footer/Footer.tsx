import FacebookSvg from "../Icons/Facebook";
import InstagramSvg from "../Icons/Instagram";
import TwitterSvg from "../Icons/Twitter";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-title">
          <img src="logo-3-sm-light.png" alt="Logo" className="footer-logo" />
          <span>Timeless</span>
        </div>
        <nav className="footer-navbar">
          <ul className="footer-navlinks">
            <li className="footer-link">Our History</li>
            <li className="footer-link">Our Beers</li>
            <li className="footer-link">East Meet West</li>
            <li className="footer-link">Find Timeless</li>
          </ul>
        </nav>
        <div className="icons-container">
          <FacebookSvg color="var(--secondary-color)" />
          <InstagramSvg color="var(--secondary-color)" />
          <TwitterSvg color="var(--secondary-color)" />
        </div>
      </footer>
    </div>
  );
}
