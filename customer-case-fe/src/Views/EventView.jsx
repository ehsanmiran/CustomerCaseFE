import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'

const Event = () => {
  const { id } = useParams()
  const [event, setEvent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getEvent = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:8080/events/' + id)
      setEvent(res.data)
      setLoading(false)
    }
    getEvent()
  }, [id]);

  return (
    <div className='centered'>
      { loading && <div> Loading...</div> }
      <div className='listBody'>
        <div className='event-line disabled'>
          <h3>{event.subject}</h3>
          <p>{moment(event.timeStamp).fromNow()}</p>
        </div>
        <p className='parag'>{event.message}</p><br></br>
        <Link to="/" className='liActive nav-link'>Back to the list of Cases</Link>
      </div>        
    </div>
  )
}

export default Event