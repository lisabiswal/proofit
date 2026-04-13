import React from 'react'
import AnalysCont from './AnalysCont'
import "./urlVerify.css"
const UrlVerify = () => {
  const handelSubmit = (e) => {
    e.preventDefault()
    const text = e.target.url.value
    console.log(text)
  }
  return (
    <>
      <div className="urlVerify">
        <form action="" onSubmit={handelSubmit}>
          <input type="url" required name="url" id="urlVerify" placeholder='paste url here' />
          <AnalysCont />
        </form>
      </div>
    </>
  )
}

export default UrlVerify