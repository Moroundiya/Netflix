import React, { useRef, useState, useEffect } from "react";
import netflix_logo from "../images/Netflix_Logo.png";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const showPw = useRef();
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [passwordLength, setPasswordLength] = useState(null);

  function clickPasswordIcon() {
    setPasswordIcon((passwordIcon) => !passwordIcon);
    console.log("Use State" + passwordIcon);
  }

  useEffect(() => {
    setPasswordIcon(passwordIcon);
    console.log("Use Effect " + passwordIcon);
  }, [passwordIcon]);

  function formSubmit(event) {
    event.preventDefault();
    passwordLength > 8 ? (
      navigate("/404")
    ) : alert('Your password must be more than 8 characters!')
  }

  return (
    <div className="w-100 header-section">
      <div className="container h-100 w-100">
        <nav className="signin-nav">
          <img className="navbar_logo" src={netflix_logo} alt="Netflix Logo" />
          <Link to="/" className="sign_in">
            Home
          </Link>
        </nav>

        <div className="signin-parent-container py-5">
          <div className="signin-child-container mx-auto">
            <h2 className="text-white">Sign In</h2>
            <form className="w-100" class="signin-form" onSubmit={formSubmit}>
              <div className="w-100 signin-email-parent">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-100 mt-4 signin-email rounded border-0"
                  required
                />
              </div>
              <div className="position-relative w-100 signin-password-parent">
                <input
                  type={passwordIcon ? "text" : "password"}
                  placeholder="Password"
                  className={
                    passwordLength > 8
                      ? "password-allowed w-100 mt-4 signin-password rounded"
                      : "w-100 mt-4 signin-password rounded"
                  }
                  ref={showPw}
                  onChange={(event) =>
                    setPasswordLength(event.target.value.length)
                  }
                  required
                />
                <Icon
                  icon={
                    passwordIcon ? "ic:baseline-remove-red-eye" : "mdi:eye-off"
                  }
                  className="toggle-password"
                  onClick={clickPasswordIcon}
                />
              </div>
              <button
                type="submit"
                className="w-100 signin-btn rounded border-0"
              >
                Sign in
              </button>
              <div className="d-flex justify-content-between align-items-center mt-4 need-help-container">
                <p className="mb-0 d-flex justify-content-center align-items-center">
                  <input type="checkbox" className="login-checkbox" />{" "}
                  <span className="ms-1 pt-1">Remember me</span>
                </p>
                <a href="/">Need help?</a>
              </div>
            </form>

            <p className="new-text mt-5">
              New to Netflix?{" "}
              <a
                href="/404"
                className="sign-up-link text-white text-decoration-none"
              >
                Sign up now.
              </a>
            </p>
            <p className="protected-text">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
