import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Post from './components/pages/Post'
import './app.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'


function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
