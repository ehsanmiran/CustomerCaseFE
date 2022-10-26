import React from 'react'
import { Link } from 'react-router-dom'

const Case = ({Case}) => {

  return (
    <div>
      <Link to={`/Case/${Case.id}`} className='event-line'>
        <h3>{Case.subject}</h3>
        <p>{Case.status}</p>
      </Link>
    </div>
  )
}

export default Case