import React from 'react'
import Button from './Button'
import Input from './Input';

function Login() {
    const handleLogin = () => {
        alert("Login Successfully completed");
    }
  return (
    <div>
        <h1>Login Form</h1>

        <Input type="text" placeholder="john@mail.com" />
        <Input type="password" placeholder="*****" />
        
        <Button label="Login" clickFunction={handleLogin} />
    </div>
  )
}

export default Login