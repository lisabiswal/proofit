import React from 'react'
import './security.css'
import Button from './Button'
const Security = () => {
  return (
    <div>
      <section className='text'>
        <h2>Protect Yourself from Online Fraud</h2>
        <p>Every day, millions of people fall victim to online scams, fake news, and fraudulent content. ProofIt uses cutting-edge AI technology to analyze and verify content authenticity, helping you make informed decisions about what to trust online.</p>
        <ul>
          <li><i className='fas fa-check'></i> <strong>Real-time verification</strong> of news articles, social media posts, and websites</li>
          <li><i className='fas fa-check'></i> <strong>Detailed fraud scoring</strong> with transparent breakdown of risk factors</li>
          <li><i className='fas fa-check'></i> <strong>Source credibility analysis</strong> backed by global fact-checking networks</li>
        </ul>
      </section>
        {/* <Button /> */}
    </div>
  )
}

export default Security