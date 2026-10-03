import { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall,FiSearch,FiAlignJustify,FiShoppingCart} from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import LogoImg from "../assets/Logo-3-with-name 1 (1).png";
import "./Header.css";

function Header() {
  const [open,closeopen] = useState(false);

  return (
    <header>
      {/*  Header1 */}
      <div className="top-header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <ul>
              <li>Track Order</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
            <ul>
            <li className="d-flex gap-1 align-items-center"><FiPhoneCall size={17} /> +237 xxx xxx xxx</li>
              <li>English</li>
              <li>USD </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header main */}
      <div className="main-header">
        <div className="container">
          < div className="row align-items-center">

            {/* responsiv hamburger */}
            <div className="col-2 d-md-none">
              <button
                onClick={() => closeopen(!open)}
                className="btn text-white fs-4 p-0 border-0"
              >
                <FiAlignJustify />
              </button>
            {open && (
                <div className="responsive-menu">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <Link to="/about">About</Link>
                  <Link to="/faq">FAQ</Link>
                </div>
              )}
            </div>

            {/* Logo */}
            <div className="col-6 col-md-2">
              <div className="logo">
                <div className="LogoImg">
                  <img src={LogoImg} alt="Logo" />
                </div>

                <div className="text-white">
                  <h5>Sante</h5>
                  <h6>Consciente</h6>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="col-12 col-md-6 order-3 order-md-2">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products..."
                />
                <button type="button"><FiSearch /></button>
              </div>
            </div>

            {/* Icons */}
            <div className="col-6 col-md-4 order-2 order-md-3">
              <div className="header-icons">
                <button className="user-btn">
                  <LuUserRound size={25} />
                  <div className="user-text">
                    <span className="Welcome">Welcome</span>
                    <span className="name">Jhon</span>
                    </div>
                  </button>
                <button className="icon-btn"><FaRegHeart /></button>
                <button className="icon-btn"><FiShoppingCart /></button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navg... */}
      <nav className="navigation">
        <div className="container">
          <div className="nav-links">
          <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

