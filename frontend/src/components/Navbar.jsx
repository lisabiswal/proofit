import React, { useState } from 'react'
import './Navbar.css'
import logo from '/proofit-logo.svg'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Proofit Logo" width={35} height={35} />
        </Link>
        <span className='site-name'>Proofit</span>
      </div>

      {/* Burger Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/analyze">Verify</Link></li>
        <li><Link to="/how-it-works">How it works</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="cta">
        <Link to="/analyze"><Button /></Link>
      </div>
    </nav>
  )
}

export default Navbar