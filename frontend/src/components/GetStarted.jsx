import React from 'react'
import "./getstarted.css"
import { Link } from 'react-router-dom'
const GetStarted = () => {
  return (
    <>
      <Link to="/analyze"><button className='getStartedBtn'>Get Started Free</button></Link>
      <Link to="/how-it-works"><button className='howItWorks'>How It Works</button></Link>
    </>
  )
}

export default GetStarted