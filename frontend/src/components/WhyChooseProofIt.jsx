import React from 'react'
import './WhyChooseProofIt.css'

const WhyChooseProofIt = () => {
  return (
    <div className='why-us'>
      <div className="inner">
        <h2>Why Choose ProofIt?</h2>
        <p>In a world full of misinformation, ProofIt is your trusted guardian</p>
      </div>
      <div className="cards">
        <Card title="AI-Powered Verification" description="Our advanced AI algorithms analyze content for accuracy, ensuring you get the truth." icon="fas fa-shield-heart" />
        <Card title="Real-Time Fact-Checking" description="Get instant verification of news, social media posts, and more, right at your fingertips." icon="fas fa-clock-rotate-left" />
        <Card title="User-Friendly Interface" description="Our intuitive design makes it easy for everyone to verify information quickly and efficiently." icon="fas fa-users" />
      </div>
    </div>
  )
}

function Card({ title, description, icon }) {
  return (
    <div className='card'>
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default WhyChooseProofIt