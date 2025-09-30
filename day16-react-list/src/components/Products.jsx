import React from 'react';
import { products } from '../data';

function Products() {
    const handleCart = (productName) => {
        alert(`${productName} added to cart`);
    }
    return (
        <div>
            <h2 className='text-2xl mt-5 mb-6 font-semibold text-center'>Our Products</h2>
            <div className='flex items-center justify-center py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4'>
                    {/* Product Card */}
                    {
                        products.map(product => (
                            <div key={product.id} className='bg-gray-100 shadow-lg rounded-2xl p-6'>
                                <h2 className='text-xl font-bold'>{product.title}</h2>
                                <p className='text-gray-600 mt-2 text-sm'>{product.description}</p>

                                <div className='mt-4 flex items-center justify-between'>
                                    <span>${product.price}</span>

                                    <span>{product.rating} ⭐</span>
                                </div>
                                <button onClick={() => handleCart(product.title)} className='mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer'>Add to Cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products