import React from 'react'
import './textVerify.css'
import AnalysCont from './AnalysCont'
const TextVerify = () => {
  const handelSubmit = (e) => {
    e.preventDefault()
    const text = e.target.verifyText.value
    console.log(text)
  }
  return (
    <div className="verifyText">
      <form action="" onSubmit={handelSubmit}>
        <textarea name="verifyText" placeholder='paste text, news article, social media post, email content, or any text you want to verify for authenticity...' id="verifyText" rows={20} cols={148}></textarea>
        <AnalysCont/>
      </form>
    </div>
  )
}

export default TextVerify