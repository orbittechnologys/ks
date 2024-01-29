import React from 'react'
import '../assets/styles/core.css'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <>
     <nav className="navbar custom-nav navbar-expand-lg navbar-white" style={{background: 'rgba(0, 0, 0, 1)'}}>
        <div className="container">
            <a className="navbar-brand" href="/">
            <img src={logo} height='60' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0">
                    <li className="nav-item px-3">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="/events">Events</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="/education">Education</a>
                    </li>

                    <li className="nav-item px-3">
                        <a className="nav-link" href="/collaborate">Collaborate</a>
                    </li>

                    <li className="nav-item px-3">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>

                    <li className="nav-item px-3">
                        <a className="nav-link" href="/support">Support</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar