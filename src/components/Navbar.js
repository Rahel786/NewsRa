import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ mode, toggle }) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          mode === "light" ? "navbar-dark bg-dark" : "navbar-dark bg-dark"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`form-check form-switch text-${
              mode === "light" ? "light" : "light"
            } mx-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={toggle}
            />
            <label
              className="form-check-label"
              htmlFor="switchCheckDefault"
            >
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
