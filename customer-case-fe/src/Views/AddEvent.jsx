import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEvent = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [verification, setVerification] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length === 0 | subject.length === 0) {
      setVerification(false);
      return
    }else{
        setVerification(true)
    }
    
    const event = {email, fullname, subject, message, status};

    setLoading(true)

    fetch('http://localhost:8080/events', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    }).then(() => {
      setEmail('')
      setFullname('')
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
          <input type="text" name='fullname' value={fullname} placeholder='Enter your full name...' className='input' onChange={(e) => { setFullname(e.target.value) }}/>
        </div>
        <div className='field-warp'>
          <input type="text" name='subject' value={subject} placeholder='Enter subject...' className='input' onChange={(e) => { setSubject(e.target.value) }}/>
        </div>
        <div className="timestamp input">
          <label className='input'>Select Status: </label>
          <select name='status' value={status} className="select select-input" onChange={(e) => { setStatus(e.target.value) }}>
            <option value="new">New Case</option>
            <option value="opened">Opened</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className='field-warp'>
          <textarea type="textarea" name='message' value={message} placeholder='Describe your case here...' className='input txt-area'  onChange={(e) => { setMessage(e.target.value) }}/>
        </div>
        {!loading && <button className='btn'>Send Customer Case</button>}
        {loading && <button className='btn'>Adding...</button>}
        {!verification && <p>Title, Date and Time can not be empty.</p>}
      </form>
    </div>
  )
}

export default AddEvent