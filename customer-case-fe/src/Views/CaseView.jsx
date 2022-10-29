import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { useParams, Link } from 'react-router-dom'


const Case = () => {
  const { id } = useParams()
  const [ccase, setCcase] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCcase = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:8080/Cases/' + id)
      setCcase(res.data)
      setLoading(false)
    }
    getCcase()
  }, [id]);

  return (
    <div>
      { loading && <div> Loading...</div> }
      <div className='listBody'>
        <div className='event-line disabled'>
          <div>
            <h3>{ccase.subject}</h3>
            <p>Sender: {ccase.email}</p>
          </div>
          <div>
            <p>{ccase.status}</p>
            <p>time and date</p>
          </div>
        </div>
        <div className='parag'>
          <h4>Message:</h4>
          <p>{ccase.message}</p>
          <h4>Sender: {ccase.customerName}</h4>
          
        </div>
        <div className='centered'>
          <Link to="/" className='liActive nav-link'>Back to the list of Cases</Link>
        </div>
      </div>        
    </div>
  )
}

export default Case