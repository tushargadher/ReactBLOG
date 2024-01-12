import React from "react";
import logo from "../Images/bloglogo.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} alt="footerlogo" />
        <span>
          MADE WITH &#10084; BY
          <a href="https://tushargadher.netlify.app/">TUSHAR</a>
        </span>
      </div>
    </>
  );
};
export default Footer;
