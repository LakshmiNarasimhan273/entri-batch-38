import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>B38 Introduction to React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Like our course is {count}
        </button>
        <p>
          Entri | FSD Program
        </p>
      </div>
      <p className="read-the-docs">
        React Day 1 Session
      </p>
    </>
  )
}

export default App
