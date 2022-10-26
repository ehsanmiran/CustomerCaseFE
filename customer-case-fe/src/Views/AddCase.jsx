import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCase = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [verification, setVerification] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length === 0 | subject.length === 0 | status.length === 0) {
      setVerification(false);
      return
    }else{
        setVerification(true)
    }
    
    const ccase = {email, customerName, subject, message, status};

    setLoading(true)

    fetch('http://localhost:8080/Cases', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ccase)
    }).then(() => {
      setEmail('')
      setCustomerName('')
      setSubject('')
      setMessage('')
      setStatus('')
      setLoading(false)
      
    })
    setTimeout ( () => navigate('/'), 500); 
  }


  return (
    <div>
      <div className='event-header'>
        <h1>Add Customer Case</h1>
      </div>
      <form className='subContainer' onSubmit={handleSubmit}>
        <div className='field-warp'>
          <input type="text" name='email' value={email} placeholder='Enter your email address...' className='input' onChange={(e) => { setEmail(e.target.value) }}/>
        </div>
        <div className='field-warp'>
          <input type="text" name='customerName' value={customerName} placeholder='Enter your full name...' className='input' onChange={(e) => { setCustomerName(e.target.value) }}/>
        </div>
        <div className='field-warp'>
          <input type="text" name='subject' value={subject} placeholder='Enter subject...' className='input' onChange={(e) => { setSubject(e.target.value) }}/>
        </div>
        <div className="timestamp input">
          <label className='input'>Select Status: </label>
          <select type="text" id='status' value={status} className="select select-input" onChange={(e) => { setStatus(e.target.value) }}>
            <option value="empty">Click Here!</option>
            <option value="New Case">New Case</option>
            <option value="Opened">Opened</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className='field-warp'>
          <textarea type="textarea" name='message' value={message} placeholder='Describe your case here...' className='input txt-area'  onChange={(e) => { setMessage(e.target.value) }}/>
        </div>
        {!loading && <button className='btn'>Send Customer Case</button>}
        {loading && <button className='btn'>Adding...</button>}
        {!verification && <p>* Email, Subject and Status fields can not be empty.</p>}
      </form>
    </div>
  )
}

export default AddCase