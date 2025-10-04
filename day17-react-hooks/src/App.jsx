import React, { useState } from 'react'
import Counter from './components/Counter'
import Like from './components/Like'
import Register from './components/Register';
import Products from './components/Products';

function App() {
  const[isDarkmode, setIsDarkmode] = useState(false);

  const changeTheme = () => {
    setIsDarkmode(!isDarkmode);
  }
  return (
    <div style={{background: isDarkmode ? "#333" : "fff", color: isDarkmode ? "#fff" : "333"}}>
      <button onClick={changeTheme}>Change theme</button>
      <h1>{isDarkmode ? "Dark" : "Light"}</h1>
      <Counter />
      <Like />
      <Register />
      <Products />
    </div>
  )
}

export default App