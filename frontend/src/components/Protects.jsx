import React from 'react'
import './protects.css'

const Protects = () => {
  return (
    <section className='protects'>
      <div className='protects-inner'>
        <h2>How ProofIt Protects You</h2>
        <p>Cutting-edge technology and comprehensive analysis to keep you safe from fraud</p>
      </div>
      <div className='protects-grid'>
        <ProtectCard
          title='Fraud Detection AI'
          description='Advanced machine learning algorithms trained on millions of verified and fraudulent content samples.'
          icon='fas fa-brain'
          tone='blue'
        />
        <ProtectCard
          title='Source Verification'
          description='Cross-reference content with trusted databases and verify the credibility of sources in real-time.'
          icon='fas fa-shield-alt'
          tone='green'
        />
        <ProtectCard
          title='Real-time Analysis'
          description='Get instant results in under 3 seconds. Fast, accurate, and reliable fraud detection at your fingertips.'
          icon='fas fa-bolt'
          tone='yellow'
        />
        <ProtectCard
          title='Multi-format Support'
          description='Analyze text, URLs, documents, and news articles. Support for PDF, DOCX, and web content.'
          icon='fas fa-file-lines'
          tone='purple'
        />
      </div>
    </section>
  )
}

function ProtectCard({ title, description, icon, tone }) {
  return (
    <article className='protects-card'>
      <span className={`protects-icon ${tone}`}>
        <i className={icon}></i>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Protects
