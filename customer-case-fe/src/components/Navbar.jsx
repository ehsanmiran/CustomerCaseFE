import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImage from '../img/events.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-brand'>
        <img className='logoImage' src={logoImage} alt="logo" />
        <h1>MY EVENTS</h1>
      </Link>
      <ul className='nav-links'>
        <NavLink to="/addevent" className='liActive'><li className="nav-link">Add Event</li></NavLink>
        <NavLink to="/pastevents" className='liActive'><li className="nav-link">Past Events</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar