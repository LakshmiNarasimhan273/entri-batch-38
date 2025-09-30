import React from 'react'
import { navbarLinks } from '../data'

function Navbar() {
  return (
    <div className='flex items-center justify-around p-6 bg-gray-500 text-white'>

        <div>
            <h1>MyWeb.</h1>
        </div>

        <div>
            <ul className='flex gap-5'>
                {/* Elements reusuability */}
                {
                    navbarLinks.map(link => (
                        <li key={link.id}>{link.name}</li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}

export default Navbar