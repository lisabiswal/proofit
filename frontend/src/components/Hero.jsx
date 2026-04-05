import React from 'react'
import './hero.css'
import Button from './Button'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Detect Fraud. <br /> Verify Authenticity</h1>
        <p>Check if online content is real or fake in seconds. Our AI-powered platform analyzes text, news, links, and documents to protect you from misinformation</p>
        <div className="cta-hero">
          <Link to="/analyze"><Button /></Link>
        </div>
      </div>
      <div className="right">
        <img src="proofit-hero-pic.jpg" alt="hero image" width={500} height={400} />
        <div className="verify-badge">
          <p>Verified</p>
        </div>
      </div>
    </div>
  )
}



export default Hero