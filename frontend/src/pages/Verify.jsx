import React, { useState } from 'react'
import '../components/Verify.css'
import TextVerify from '../components/TextVerify'
import UrlVerify from '../components/UrlVerify'
import DocVerify from '../components/DocVerify'
import AnalysCont from '../components/AnalysCont'

const Verify = () => {
  const [activeTab, setActiveTab] = React.useState("text")
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [doc, setDoc] = useState("");

  const isDisabled =
    (activeTab === "text" && !text.trim()) ||
    (activeTab === "url" && !url.trim()) ||
    (activeTab === "doc" && !doc); // for file, no trim
  const handelSubmit = (e) => {
    e.preventDefault()
    const text = e.target.file.value
    console.log(text)
  }
  return (
    <div className='outerBox'>
      <div className='bar'>

        <div
          className={`textCont ${activeTab === "text" ? "bg" : ""}`}
          onClick={() => setActiveTab("text")}
        >
          Text Content
        </div>


        <div
          className={`url ${activeTab === "url" ? "bg" : ""}`}
          onClick={() => setActiveTab("url")}
        >
          URL / Link
        </div>

        <div
          className={`document ${activeTab === "doc" ? "bg" : ""}`}
          onClick={() => setActiveTab("doc")}
        >
          Document Upload
        </div>

      </div>
      <form action="" onSubmit={handelSubmit}>

        {activeTab === "text" && (
          <TextVerify value={text} setValue={setText} />
        )}

        {activeTab === "url" && (
          <UrlVerify value={url} setValue={setUrl} />
        )}

        {activeTab === "doc" && (
          <DocVerify value={doc} setValue={setDoc} />
        )}


        <AnalysCont disabled={isDisabled} />
      </form>


    </div>
  )
}

export default Verify