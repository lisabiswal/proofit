import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Verify from './pages/Verify'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/how-it-works' element={<HowItWorks/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/analyze' element={<Verify/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App