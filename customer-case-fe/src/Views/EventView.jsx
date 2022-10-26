import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import moment from 'moment'

const Event = () => {
  const navigate = useNavigate()
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

  const handleClick = () => {
    fetch('http://localhost:8080/events/' + event.id, {
      method: 'DELETE'
    })
    setTimeout ( () => navigate(-1), 250); 
  }

  return (
    <div className='centered'>
      { loading && <div> Loading...</div> }
      <div className='listBody'>
        <div className='event-line disabled'>
          <h3>{event.title}</h3>
          <p>{moment(event.timeStamp).fromNow()}</p>
        </div>
      <p className='parag'>{event.description}</p>
      <button className='btn' onClick={handleClick}>delete</button>
      </div>
        
    </div>
  )
}

export default Event