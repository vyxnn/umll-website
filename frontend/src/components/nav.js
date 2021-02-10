import React from "react";
import {Link} from "gatsby";
import logo from "../images/WhiteHeartLogo.png";
import "../assets/css/nav.css";

const Nav = () => {
  return (
    <div className="nav">
        <div className="logo-nav">
          <Link to="/">
            <img src={logo} className="image-nav" />
          </Link>
        </div>
        <div className="pages-nav">
          <Link to="/about" className="link">
            ABOUT
          </Link>
          <Link to="/signup" className="link">
            SIGN UP
          </Link>
          <Link to="/events" className="link">
            EVENTS
          </Link>
          <Link to="/merch" className="link">
            MERCH
          </Link>
          <Link to="/sponsors" className="link">
            SPONSORS
          </Link>
        </div>
    </div>
  );
};
export default Nav;
