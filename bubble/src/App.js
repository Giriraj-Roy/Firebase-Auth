import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hell from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hell/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App