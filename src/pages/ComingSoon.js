import React from "react";
import netflix_logo from "../images/Netflix_Logo.png";
import { Link } from "react-router-dom";
import construction_img from "../images/construction.png";

function ComingSoon() {
  return (
    <div className=" w-100 h-100 header-section">
    <div className="container h-100 w-100">
      <nav className="signin-nav">
        <img className="navbar_logo" src={netflix_logo} alt="Netflix Logo" />
        <Link to="/" className="sign_in">
          Home
        </Link>
      </nav>
      <div className="coming-soon-container">
        <img className="construction-img" src={construction_img} alt="Coming Soon" loading="lazy" />
        <h1 className="mt-3 text-white">Under Construction</h1>
      </div>
    </div>
  </div>
  )
}

export default ComingSoon;


