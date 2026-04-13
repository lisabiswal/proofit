import React, { useRef, useState } from 'react'
import "./dropVerify.css"

const DocVerify = ({ value, setValue }) => {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) setValue(droppedFile)
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="urlVerify">
      <div
        className={`file-drop-input ${dragActive ? "active" : ""}`}
        onClick={handleClick}
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
          onChange={(e) => {
            const selectedFile = e.target.files[0]
            if (selectedFile) setValue(selectedFile)
          }}
          name="file"
          hidden
        />

        <p>
          {value ? value.name : "Drag & Drop your document or click to browse"}
        </p>
      </div>
    </div>
  )
}

export default DocVerify