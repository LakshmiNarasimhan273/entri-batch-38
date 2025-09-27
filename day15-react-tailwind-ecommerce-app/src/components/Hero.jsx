import React from 'react'

function Hero() {
  return (
    <div className='bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-center items-center text-center px-4' 
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')"}}>
        <div className='bg-white/20 p-6 rounded max-w-2xl border border-white/30 backdrop-blur-md'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow'>15% Offer on Every Products</h2>
            <p className='text-md md:text-lg mb-6 text-white drop-shadow'>Stay ahead in fashion with our curated selections just for you</p>
            <button className='bg-red-500 px-6 py-3 text-white rounded text-lg'>Shop now</button>
        </div>
    </div>
  )
}

export default Hero