import React from 'react'
import Hero from '../components/Hero'
import WhyChooseProofIt from '../components/WhyChooseProofIt'
import Security from '../components/Security'
import Footer from '../components/Footer'
import { Suspense, lazy } from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseProofIt />
      <Suspense fallback={<div>Loading...</div>}>
        <Security />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home