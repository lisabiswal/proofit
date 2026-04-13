import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <section className='about-hero'>
        <div className='about-hero-inner reveal'>
          <img className='about-brand-logo' src='/proofit-logo.svg' alt='ProofIt logo' />
          <span className='about-pill'>About ProofIt</span>
          <h1>Fighting Fraud with Truth</h1>
          <p>
            We are on a mission to create a safer, more trustworthy internet by empowering everyone
            with the tools to detect fraud and verify truth.
          </p>
        </div>
      </section>

      <section className='about-section about-mv'>
        <div className='about-mv-grid'>
          <div className='about-mv-card reveal'>
            <div className='mv-icon'>
              <i className='fas fa-bullseye'></i>
            </div>
            <h2>Our Mission</h2>
            <p>
              To protect people from online fraud and misinformation by providing accessible,
              AI-powered verification tools that anyone can use to make informed decisions.
            </p>
          </div>
          <div className='about-mv-card reveal'>
            <div className='mv-icon vision'>
              <i className='fas fa-eye'></i>
            </div>
            <h2>Our Vision</h2>
            <p>
              A world where everyone has the knowledge and tools to distinguish truth from
              deception, creating a safer internet built on trust and verified information.
            </p>
          </div>
        </div>
      </section>

      <section className='about-section about-story'>
        <div className='about-story-inner'>
          <div className='about-story-media reveal'>
            <img className='about-story-image' src='/proofit-hero-pic.jpg' alt='ProofIt team and research workflow' />
          </div>
          <div className='about-story-content reveal'>
            <span className='about-pill light'>Our Story</span>
            <h2>Born from a Need for Truth</h2>
            <p>
              ProofIt was founded by a team of cybersecurity experts, data scientists, and
              journalists who witnessed the impact of online fraud and misinformation firsthand.
            </p>
            <p>
              After seeing countless people lose money to sophisticated scams and fall victim to
              fake news, we knew something had to change. We built ProofIt to democratize fraud
              detection--making enterprise-grade verification technology available to everyone.
            </p>
          </div>
        </div>
      </section>

      <section className='about-section about-values'>
        <div className='about-section-inner reveal'>
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className='about-values-grid'>
          <div className='about-value-card reveal'>
            <div className='value-icon'>
              <i className='fas fa-shield-alt'></i>
            </div>
            <h3>Trust & Transparency</h3>
            <p>We provide clear explanations and verification context for every result.</p>
          </div>
          <div className='about-value-card reveal'>
            <div className='value-icon green'>
              <i className='fas fa-check-circle'></i>
            </div>
            <h3>Accuracy First</h3>
            <p>We never compromise on quality, no matter how fast we need to deliver results.</p>
          </div>
          <div className='about-value-card reveal'>
            <div className='value-icon purple'>
              <i className='fas fa-universal-access'></i>
            </div>
            <h3>Accessibility</h3>
            <p>Powerful verification tools should be available to everyone, not just experts.</p>
          </div>
          <div className='about-value-card reveal'>
            <div className='value-icon yellow'>
              <i className='fas fa-lightbulb'></i>
            </div>
            <h3>Innovation</h3>
            <p>We continuously evolve detection methods to stay ahead of new fraud tactics.</p>
          </div>
          <div className='about-value-card reveal'>
            <div className='value-icon red'>
              <i className='fas fa-lock'></i>
            </div>
            <h3>Privacy & Security</h3>
            <p>Your data is yours. We never sell content and use encrypted analysis by default.</p>
          </div>
          <div className='about-value-card reveal'>
            <div className='value-icon blue'>
              <i className='fas fa-star'></i>
            </div>
            <h3>Excellence</h3>
            <p>We hold ourselves to a high standard across technology, support, and design.</p>
          </div>
        </div>
      </section>

      <section className='about-section about-tech'>
        <div className='about-tech-inner'>
          <div className='about-tech-copy reveal'>
            <span className='about-pill light'>Our Technology</span>
            <h2>Powered by Advanced AI</h2>
            <p>
              ProofIt combines multiple cutting-edge technologies to deliver accurate fraud
              detection and fast, reliable verification for consumers.
            </p>
            <ul>
              <li>Natural Language Processing to detect manipulation patterns.</li>
              <li>Source verification engine connected to trusted databases.</li>
              <li>Pattern recognition to identify emerging fraud tactics.</li>
              <li>Continuous learning from verified data points.</li>
            </ul>
          </div>
          <div className='about-tech-visual reveal'>
            <img className='about-tech-image' src='/lock-proofit.jpg' alt='ProofIt advanced AI technology visualization' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
