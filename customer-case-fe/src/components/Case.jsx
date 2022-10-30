import React from 'react'
import { Link } from 'react-router-dom'

const Case = ({Case}) => {

  return (
    <div>
      <Link to={`/Case/${Case.id}`} className='event-line'>
        <div>
            <h3>{Case.subject}</h3>
            <p>From: {Case.email}</p>
          </div>
          <div>
            <p>{Case.status}</p>
            <p>time and date</p>
          </div>
      </Link>
    </div>
  )
}

export default Case