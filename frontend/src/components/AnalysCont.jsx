import React from 'react'
import './analysCont.css'
const AnalysCont = ({disabled}) => {
  return (
    <div className="analysCont">
      <button className="analysBtn" disabled={disabled}>Analyze Content</button>
    </div>
  )
}

export default AnalysCont