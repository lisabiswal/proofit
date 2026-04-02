import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/how-it-works' element={<HowItWorks/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App