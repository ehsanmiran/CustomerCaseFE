import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-brand'>
        <h1>CUSTOMER CASES</h1>
      </Link>
      <ul className='nav-links'>
        <NavLink to="/" className='liActive'><li className="nav-link">Received Cases</li></NavLink>
        <NavLink to="/addcase" className='liActive'><li className="nav-link">Add Customer Case</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar