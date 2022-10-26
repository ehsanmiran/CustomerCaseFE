import { useState, useEffect } from 'react'
import Event from '../components/Event'

const PastEventsList = () => {

  const [events, setEvents] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(' http://localhost:8080/events')
      .then(res => {
        return res.json();
      })
      .then(data => {
        data.sort((a, b) => { return b.timeStamp - a.timeStamp })
        setEvents(data);
        setLoading(false)
      })
  }, []);

  return (
    <div className='listBody pastevents'>
      { loading && <div> Loading...</div> }
      {events.length ? events.map(event => (
        event.timeStamp < Date.parse(Date()) &&
        <Event key={event.id} event={event}/>
      ))
      : 
      !loading && <p>No listed event has past yet.</p> 
      }
    </div>
  )
}

export default PastEventsList