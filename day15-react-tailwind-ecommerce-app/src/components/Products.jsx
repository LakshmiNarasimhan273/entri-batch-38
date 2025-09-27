import React, { useEffect, useState } from 'react'

function Products() {
    // const products = [];
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  return (
    <div className='p-4 md:p-8'>
        <h3 className='text-2xl md:text-3xl font-bold text-center mb-6'>Our Products</h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                products.map(item => (
                    <div className='bg-gray-100 shadow-md rounded p-4 flex flex-col items-center'>
                        <img className='h-40 w-auto mb-4 object-contain' src={item.image} alt="" />
                        <h4 className='text-lg md:text-xl font-semibold mb-2 text-center'>{item.title}</h4>
                        <p className='text-red-600 font-bold text-lg mb-2'>${item.price}</p>
                        <button className='bg-red-500 px-6 py-2 cursor-pointer text-white rounded text-lg'>Buy now</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products