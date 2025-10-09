import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{padding: "15px" ,display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "lightblue"}}>
        <h3>WebApp.</h3>

        <ul style={{display: "flex", gap: "14px", listStyleType: "none"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </div>
  )
}

export default Navbar