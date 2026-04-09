import React from 'react'
import "./footer.css"
import GetStarted from './GetStarted'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="cta2">
        <h2>Ready to Verify Content?</h2>
        <p>Join thousands of users protecting themselves from fraud and misinformation</p>
        <GetStarted/>
      </div>
      <div className="footerSection">
        <div className="description">
          <img src="proofit-logo.svg" alt="proofit logo" width={50} height={50} />
          <p>Detect fraud and verify the authenticity of online content. Trust verified.</p>
        </div>
        <div className="products">
          <h3>Products</h3>
          <Link to="/analyze"><p>Verify</p></Link>
          <Link to="/how-it-works"><p>How It Works</p></Link>
          <Link to="/about"><p>About</p></Link>
        </div>
        <div className="links">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer