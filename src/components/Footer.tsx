import "./Footer.css";
import playstore from "../assets/Frame 1000004112.png";
import appstore from "../assets/Frame 1000004085.png";
import paypal from "../assets/Frame 1000004123.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* Need help */}
          <div className="col-lg-3 col-md-6">
            <h5>Need help ?</h5>

            <p>
              Please feel free to contact the following
              numbers for any assistance regarding our services.
            </p>

            <h3>00 800 40 00 01</h3>

            <p>Email: info@santeconsciente.com</p>

            <p>Opening hours</p>
            <p>Monday - Saturday : 09:00 - 19:00</p>
          </div>

          {/* Navigation */}
          <div className="col-lg-2 col-md-6">
            <h5>Navigation</h5>

            <ul>
           <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/blog">Contact</Link></li>
  <li><Link  to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div className="col-lg-2 col-md-6">
            <h5>Blog</h5>

            <ul>
              <li><Link className="a" to="blog">Society</Link></li>
              <li><Link className="a" to="/blog">Alimentation</Link></li>
              <li><Link className="a" to="/blog">Miscellaneous</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-lg-3 col-md-6">
            <h5>Download App</h5>

            <button className="app-btn">
             <img src={playstore} alt="playstore" /> 
            </button>

            <button className="app-btn">
             <img src={appstore} alt="appstore" /> 
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom row">
          <div className="col-md-8">
            <p>Copyright 2024 © Santé Consciente</p>
          </div>

          <div className="col-md-4">
            <button className="paypal">
              <img src={paypal} alt="paypal" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;