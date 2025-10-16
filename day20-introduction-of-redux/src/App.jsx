import React from 'react'
import Counter from './components/Counter'
import { useSelector } from 'react-redux'
import Todos from './components/Todos';

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      {/* <p>App component data {count}</p> */}
      {/* <Counter /> */}
      <Todos />
    </div>
  )
}

export default App