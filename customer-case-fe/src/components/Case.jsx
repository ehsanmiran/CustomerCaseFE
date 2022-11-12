import React from 'react'
import { Link } from 'react-router-dom'

const Case = ({Case}) => {
  // console.log(new Date(Case.created).toLocaleString())
  return (
    <div>
      <Link to={`/Case/${Case.id}`} className='event-line'>
        <div>
            <h3>{Case.subject}</h3>
            <p>From: {Case.email}</p>
          </div>
          <div className='to-right'>
            <p>{Case.status}</p>
            <p>{new Date(Case.created).toLocaleString()}</p>
          </div>
      </Link>
    </div>
  )
}

export default Case