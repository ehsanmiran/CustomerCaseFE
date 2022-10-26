import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'




const Event = ({event}) => {
  function refreshPage() {
    window.location.reload(false);
  }
  const handleClick = () => {
    fetch('http://localhost:8080/events/' + event.id, {
      method: 'DELETE'
    })
    refreshPage()
  }


  return (
    <div className='grid'>
    <Link to={`/event/${event.id}`} className='event-line'>
      <h3>{event.title}</h3>
      <p>{moment(event.timeStamp).fromNow()}</p>
    </Link>
    <button className='btn' onClick={handleClick}>x</button>
    </div>
  )
}

export default Event