import React from 'react'
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // Username data
  let username = "Narasimhan";
  let role = "buyer"; // buyer & seller
  return (
    <div>
      <Login />
      <Register />
      {/* name variable is a props, it carrying the username variable value into Home component */}
      <div style={{marginTop: "300px"}}>
      <Home name={username} userRole = {role} />
      </div>
    </div>
  )
}

export default App