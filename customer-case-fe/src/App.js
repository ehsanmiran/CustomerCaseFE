import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import EventsList from './Views/EventsList'
import AddEvent from './Views/AddEvent'
import EventView from './Views/EventView'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={ <EventsList /> } />
          <Route path='/addevent' element={ <AddEvent /> } />
          <Route path='/event/:id' element={ <EventView /> } />
        </Routes>

      </div>
    </div>
  );
}

export default App;
