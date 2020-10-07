import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";
import bell from "../media/bell.webp";

function Header() {
  return (
    <header className="container top_header flex padding">
      <div className="logo_section">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
      </div>
      <div className="navigation_section ">
        <div className="nav_bar">
          <ul>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="#">Search</Link>
            </li>
            <li>
              <Link to="#">feedback&support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="user_section">
        <div className="hide">
          <Link to="#">
            <img src={bell} alt="notificatian"></img>
          </Link>
          <button className="dropbtn">
            My Account
            <i className="fa fa-caret-down"></i>
          </button>
          <button>
            log <span>Out</span>
          </button>
        </div>
        <button className="openbtn">☰</button>
      </div>
    </header>
  );
}

export default Header;
