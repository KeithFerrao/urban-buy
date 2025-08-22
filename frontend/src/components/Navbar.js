import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar shadow-sm sticky-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#">
          Urban<span className="text-primary">Buy</span>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>

          {/* Right Side Icons + Buttons */}
          <div className="d-flex align-items-center gap-3">
            <FaSearch className="nav-icon" />
            <FaShoppingCart className="nav-icon" />
            <FaUser className="nav-icon" />

            <button
              className="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
