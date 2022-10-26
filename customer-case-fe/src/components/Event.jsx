import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({event}) => {

  return (
    <div>
      <Link to={`/event/${event.id}`} className='event-line'>
        <h3>{event.subject}</h3>
        <p>{event.status}</p>
      </Link>
    </div>
  )
}

export default Event