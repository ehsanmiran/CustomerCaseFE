import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import './App.css';

import Navbar from './components/Navbar';
import EventsList from './Views/EventsList'
import AddEvent from './Views/AddEvent'
import PastEventsList from './Views/PastEventsList'
import EventView from './Views/EventView'

function App() {

  // const [events, setEvents] = useState([
  // ])


  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={ <EventsList /> } />
          <Route path='/addevent' element={ <AddEvent /> } />
          <Route path='/pastevents' element={ <PastEventsList /> } />
          <Route path='/event/:id' element={ <EventView /> } />
        </Routes>

        {/* <Routes>
          <Route path='/' element={ <EventsList events={events}/> } />
          <Route path='/addevent' element={ <AddEvent /> } />
          <Route path='/pastevents' element={ <PastEventsList events={events}/> } />
          <Route path='/event/:id' element={ <EventView events={events}/> } />
        </Routes> */}

      </div>
    </div>
  );
}

export default App;
