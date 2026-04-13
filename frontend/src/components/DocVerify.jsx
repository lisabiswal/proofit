import React, { useState, useRef } from 'react'
import AnalysCont from './AnalysCont'
import "./dropVerify.css"

const DocVerify = () => {
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handelSubmit = (e) => {
    e.preventDefault()
    const text = e.target.file.value
    console.log(text)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    setFile(e.dataTransfer.files[0])
  }

  const handleClick = () => {
    fileInputRef.current.click()   // open file dialog
  }

  return (
    <div className="urlVerify">
      <form className="doc-form" onSubmit={handelSubmit}>

        <div
          className={`file-drop-input ${dragActive ? "active" : ""}`}
          onClick={handleClick}   // whole box clickable
          onDragOver={(e) => {
            e.preventDefault()
            setDragActive(true)
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            name='file'
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />

          <p>
            {file ? file.name : "Drag & Drop your document or click to browse"}
          </p>
        </div>

        <AnalysCont />

      </form>
    </div>
  )
}

export default DocVerify