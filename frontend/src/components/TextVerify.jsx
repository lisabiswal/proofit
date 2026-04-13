import './textVerify.css'
const TextVerify = ({value, setValue}) => {

  return (
    <div className="verifyText">
      <textarea name="verifyText" placeholder='paste text, news article, social media post, email content, or any text you want to verify for authenticity...' id="verifyText" rows={20} cols={148} value={value} onChange={(e) => setValue(e.target.value)}></textarea>
    </div>
  )
}

export default TextVerify