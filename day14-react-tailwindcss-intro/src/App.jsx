import React from 'react'
import Cards from './components/Cards'

function App() {
  return (
    <div>

    <div className='flex justify-between items-center p-4 bg-teal-800 text-white'>
      {/* Title Div */}
      <div>
        <h1 className='font-semibold text-2xl'>FSD Session</h1>
      </div>

      {/* Navbar links */}
      <ul className='flex gap-4'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Syllabus</li>
        <li className='cursor-pointer'>Live Sessions</li>
        <li className='cursor-pointer'>Help & Support</li>
      </ul>
    </div>

    <Cards />
    </div>
  )
}

export default App