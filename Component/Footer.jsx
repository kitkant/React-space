import logo from "../assets/logo.svg";
import "./Style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} className="logo" alt="logo SpaceX" />
      <nav className="footer-nav">
        <ul className="list">
          <li className="item">
            <a href="#" className="item-link">
              Twitter
            </a>
          </li>
          <li className="item">
            <a href="#" className="item-link">
              Youtube
            </a>
          </li>
          <li className="item">
            <a href="#" className="item-link">
              Instagram
            </a>
          </li>
          <li className="item">
            <a href="#" className="item-link">
              Flickr
            </a>
          </li>
          <li className="item">
            <a href="#" className="item-link">
              LinkedIn
            </a>
          </li>
          <li className="item">
            <a href="#" className="item-link">
              Privacy
            </a>
          </li>
          <li className="item">
            <a href="#" className="item-link">
              Policy
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer-text">
        For additional questions, contact
        <a className="footer-link" href="mailto:rideshare@spacex.com">
          rideshare@spacex.com
        </a>
      </p>
      <a href="#" className="button">
        Contact us
      </a>
    </footer>
  );
};

export default Footer;
