import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
      <h3>Counter Component</h3>
        <div className='mb-5'>
            <h1 className='text-xl font-semibold'>Current State Value <span className='bg-teal-800 px-3 py-1 rounded-lg text-white font-bold'>{count}</span></h1>
        </div>

        <div className='flex gap-4'>
            <button onClick={() => dispatch(increment())} className='bg-green-500 cursor-pointer text-white px-3 py-1 rounded font-semibold'>Increase Count</button>
            <button onClick={() => dispatch(decrement())} disabled={count === 0} className='bg-yellow-500 cursor-pointer text-white px-3 py-1 rounded font-semibold'>Decrease Count</button>
            <button onClick={() => dispatch(reset())} className='bg-red-500 cursor-pointer text-white px-3 py-1 rounded font-semibold'>Reset Count</button>
        </div>
    </div>
  )
}

export default Counter