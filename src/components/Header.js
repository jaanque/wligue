import React from 'react';
import logo from '../assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Postman" className="logo" />
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">Product</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Enterprise</li>
            <li className="nav-item">Resources and Support</li>
            <li className="nav-item">Public API Network</li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="btn btn-outline">Contact Sales</button>
        <button className="btn btn-outline">Sign In</button>
        <button className="btn btn-primary">Sign Up for Free</button>
      </div>
    </header>
  );
};

export default Header;
