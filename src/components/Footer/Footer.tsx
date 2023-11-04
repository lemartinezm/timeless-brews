import FacebookSvg from "../Icons/Facebook";
import InstagramSvg from "../Icons/Instagram";
import TwitterSvg from "../Icons/Twitter";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-title">
          <a href="#home">
            <img
              src="logo-3-sm-light.webp"
              alt="Logo"
              className="footer-logo"
            />
          </a>
          <a href="#home" className="link no-hover">
            Timeless
          </a>
        </div>
        <nav className="footer-navbar">
          <ul className="footer-navlinks">
            <li className="footer-link">
              <a href="#history" className="link">
                Our History
              </a>
            </li>
            <li className="footer-link">
              <a href="#beers" className="link">
                Our Beers
              </a>
            </li>
            <li className="footer-link">
              <a href="#live-timeless" className="link">
                Live Timeless
              </a>
            </li>
            <li className="footer-link">
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
        <div className="icons-container">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookSvg
              color="var(--secondary-color)"
              className="icon-animation"
            />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSvg
              color="var(--secondary-color)"
              className="icon-animation"
            />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterSvg
              color="var(--secondary-color)"
              className="icon-animation"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
