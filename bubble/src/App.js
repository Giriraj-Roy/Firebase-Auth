import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home';
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <PrivateRoute exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App