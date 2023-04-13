import React from "react";
import netflix_logo from "../images/Netflix_Logo.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <img className="navbar_logo" src={netflix_logo} alt="Netflix Logo" />
      <Link to="/signin" className="sign_in">
        Sign in
      </Link>
    </nav>
  );
}
export default Nav;
