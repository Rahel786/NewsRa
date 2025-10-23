import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ mode, toggle }) => {
  const isLight = mode === "light";

  const lightBg = "#e9f0f5"; // soft bluish-gray
  const darkBg = "#1e1e2f"; // elegant dark navy

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        isLight ? "navbar-light" : "navbar-dark"
      }`}
      style={{
        backgroundColor: isLight ? lightBg : darkBg,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: isLight ? "#0d47a1" : "#f8f9fa",
          }}
        >
          NewsRa
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              "home",
              "business",
              "entertainment",
              "general",
              "health",
              "science",
              "sports",
              "technology",
            ].map((category) => (
              <li className="nav-item" key={category}>
                <Link
                  className={`nav-link text-${isLight ? "dark" : "light"}`}
                  to={`/${category === "home" ? "" : category}`}
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "500",
                  }}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="form-check form-switch mx-3"
          style={{ color: isLight ? "#212529" : "#f8f9fa" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onChange={toggle}
            checked={!isLight}
          />
          <label className="form-check-label" htmlFor="switchCheckDefault">
            {isLight ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
