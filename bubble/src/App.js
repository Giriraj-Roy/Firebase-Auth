import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hell from './components/Home';
import { AuthProvider } from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Hell/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App