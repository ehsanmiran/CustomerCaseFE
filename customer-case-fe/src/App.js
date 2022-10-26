import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import CasesList from './Views/CasesList'
import AddCase from './Views/AddCase'
import CaseView from './Views/CaseView'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={ <CasesList /> } />
          <Route path='/addcase' element={ <AddCase /> } />
          <Route path='/case/:id' element={ <CaseView /> } />
        </Routes>

      </div>
    </div>
  );
}

export default App;
