import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";
import "../assets/bootstrap.min.css";

const Header = () => {
  const curr_user = sessionStorage.getItem("username");

  const logout = async (e) => {
    e.preventDefault();

    try {
      await fetch("/djangoapp/logout", {
        method: "GET",
      });
    } catch (error) {
      console.log(error);
    }

    sessionStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "darkturquoise", height: "1in" }}
      >
        <div className="container-fluid">
          <h2 style={{ paddingRight: "5%" }}>Dealerships</h2>

          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ fontSize: "larger" }}
                  to="/dealers"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ fontSize: "larger" }}
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ fontSize: "larger" }}
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="navbar-text">
              {curr_user ? (
                <div className="input_panel">
                  <span className="username" style={{ marginRight: "15px" }}>
                    {curr_user}
                  </span>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </div>
              ) : (
                <div>
                  <Link to="/login" style={{ marginRight: "15px" }}>
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
