import React from 'react'
import Profile from './components/Profile'
import Home from './components/Home'
import Jobs from './components/Jobs'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App