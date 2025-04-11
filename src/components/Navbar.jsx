import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  // centered navbar
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid d-flex align-items-center">
      <Link className="navbar-brand text-primary fw-bold me-auto" to="/">Resume Builder</Link>
      <div className="d-flex justify-content-center mx-auto">
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/form">Templates</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
