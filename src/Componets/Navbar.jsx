import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/bloglogo.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="blogwebsite" />
          </div>
          <div className="links">
            <Link className="links" to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="links" to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="links" to="/?cat=technology">
              <h6> TECHNOLOGY</h6>
            </Link>
            <Link className="links" to="/?cat=cinema">
              <h6> CINEMA</h6>
            </Link>
            <Link className="links" to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="links" to="/?cat=food">
              <h6> FOOD</h6>
            </Link>
            {/* logged in user name */}
            <span>Tushar</span>
            <Link className="links" to="/login">
              <span>Logout</span>
            </Link>
            <span className="write">
              <Link className="links" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
