import React from 'react'
import "./urlVerify.css"
const UrlVerify = ({value, setValue}) => {
  
  return (
    <>
      <div className="urlVerify">
          <input type="url" required name="url" id="urlVerify" placeholder='paste url here' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  )
}

export default UrlVerify