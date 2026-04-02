import React from 'react'
import './Navbar.css'
import logo from '/proofit-logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Proofit Logo" width={50} height={50} />
        <span className='site-name'>Proofit</span>
      </div>
      <ul className="nav-links">
        <li>Verify</li>
        <li>How it works</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Navbar