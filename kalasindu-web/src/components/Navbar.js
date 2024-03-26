import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/core.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <>
      <nav className="navbar custom-nav navbar-expand-lg " style={{background: 'rgba(0, 0, 0, 1)', position:'fixed', top:'0', zIndex:'999999', width:'100%'}}>
        <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} height='60' alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0">
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/education">Education</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/collaborate">Collaborate</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/support">Support</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
