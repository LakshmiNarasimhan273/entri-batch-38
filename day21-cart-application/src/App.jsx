import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {
  return (
    <div>
      <nav className='flex justify-between items-center px-8 py-4 bg-white shadow-md'>
        <h1 className='text-2xl font-bold text-gray-800'>Cartify</h1>
        <div className='space-x-4'>
          <Link className='text-blue-600 font-semibold' to="/">Home</Link>
          <Link className='text-blue-600 font-semibold' to="/cart">My Cart</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App