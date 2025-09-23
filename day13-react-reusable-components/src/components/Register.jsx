import React from 'react'
import Button from './Button'

function Register() {
    const handleRegister = () => {
        alert("Registration Successfully Completed");
    }
  return (
    <div style={{marginTop: "50px"}}>
        <h1>Register Form</h1>

        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <input type="number" placeholder='Mobile Number' />
        <input type="password" placeholder='Password' />
        <Button label="Register" clickFunction={handleRegister} />
    </div>
  )
}

export default Register