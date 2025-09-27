import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white text-center p-4 mt-10 text-sm md:text-base'>
        <p>&copy; {new Date().getFullYear()} | Shopyfy. All Rights Reserved</p>
    </footer>
  )
}

export default Footer