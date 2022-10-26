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
    <div className='centered'>
      { loading && <div> Loading...</div> }
      <div className='listBody'>
        <div className='event-line disabled'>
          <h3>{ccase.subject}</h3>
          <p>{ccase.status}</p>
        </div>
        <p className='parag'>{ccase.message}</p><br></br>
        <Link to="/" className='liActive nav-link'>Back to the list of Cases</Link>
      </div>        
    </div>
  )
}

export default Case