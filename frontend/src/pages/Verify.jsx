import React from 'react'
import '../components/Verify.css'
import AnalysCont from '../components/AnalysCont'
import TextVerify from '../components/TextVerify'

const Verify = () => {
  const [activeTab, setActiveTab] = React.useState("text")

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
      <TextVerify/>
    </div>
  )
}

export default Verify