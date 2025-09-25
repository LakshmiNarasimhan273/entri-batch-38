import React from 'react'

function Cards() {
  return (
    // height: 100vh
    <div className='p-4 sm:p-8 bg-gray-50 min-h-screen'>
        <h1 className='text-3xl font-extrabold text-gray-900 mb-8'>Entri Elevate Courses</h1>

        {/* parent grid container div */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {/* card 1 design */}
            <div className='bg-white rounded-xl shadow-lg p-6 border border-gray-300'>
                <h3 className='text-xl font-bold text-blue-600 mb-2'>Fullstack Web development</h3>
                <p className='text-gray-700'>You will learn about the entire Fullstack web development in MERN stack</p>
            </div>

            {/* Card 2 design */}
            <div className='bg-white rounded-xl shadow-lg p-6 border border-gray-300'>
                <h3 className='text-xl font-bold text-blue-600 mb-2'>Data Science</h3>
                <p className='text-gray-700'>You will learn about the entire Data Science Concepts using Python & MySQL</p>
            </div>

            {/* Card 3 design */}
            <div className='bg-white rounded-xl shadow-lg p-6 border border-gray-300'>
                <h3 className='text-xl font-bold text-blue-600 mb-2'>Data Analytics</h3>
                <p className='text-gray-700'>You will learn about the entire Data Analytics process using Excel</p>
            </div>
        </div>
    </div>
  )
}

export default Cards