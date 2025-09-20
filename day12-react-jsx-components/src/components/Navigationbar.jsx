import React from 'react'
import "./Navigationbar.css"

function Navigationbar() {
  return (
    <div className='navbar-container'>
        <h1>MyApp</h1>

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navigationbar