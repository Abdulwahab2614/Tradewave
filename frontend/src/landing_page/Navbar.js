import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clearAuth, getStoredAuth } from "../utils/auth";

function Navbar() {
  const [auth, setAuth] = useState(getStoredAuth());

  useEffect(() => {
    const handleAuthChange = () => {
      setAuth(getStoredAuth());
    };

    window.addEventListener("tradewave-auth-changed", handleAuthChange);

    return () => {
      window.removeEventListener("tradewave-auth-changed", handleAuthChange);
    };
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="TradeWave logo" style={{ width: "30%" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ms-auto align-items-center flex-wrap" role="navigation">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/support">
                    Support
                  </Link>
                </li>
              </ul>

              <div className="auth-nav">
                {auth?.user ? (
                  <>
                    <span className="auth-nav-user">Hi, {auth.user.fullName}</span>
                    <button
                      type="button"
                      className="auth-nav-button secondary"
                      onClick={clearAuth}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="auth-nav-button secondary" to="/login">
                      Login
                    </Link>
                    <Link className="auth-nav-button primary" to="/signup">
                      Signup
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
