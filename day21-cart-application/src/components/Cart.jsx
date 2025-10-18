import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromCart } from '../redux/cartSlice';

function Cart() {
  const {items, totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Your Cart</h1>

      {
        items.length === 0 ? (
          <p className='text-center text-gray-500'>Your Cart is empty!</p>
        ) : (
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='md:col-span-2 space-y-4'>
              {
                items.map(data => (
                  <div key={data.id} className='flex items-center bg-white shadow-md rounded-xl p-4 justify-between'>
                    <div className='flex items-center gap-4'>
                      <img className='w-20 h-20 object-cover rounded-lg' src={data.image} alt="" />

                      <div>
                        <h2 className='font-semibold text-gray-800'>{data.title}</h2>
                        <p className='text-sm text-gray-500'>{data.quantity}</p>
                        <p className='text-indigo-600 font-bold text-lg'>{data.price}</p>
                      </div>
                    </div>
                    <button className='text-red-500 cursor-pointer' onClick={() => dispatch(removefromCart(data.id))}>Remove</button>
                  </div>
                ))
              }
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md h-fit'>
              <h3 className='text-xl font-semibold mb-4 '>Order Summary</h3>
              <p className='text-gray-600 mb-2'>Total Items: {items.length}</p>
              <p className='text-lg font-bold mb-6'>Order Amount: ${totalAmount}</p>
              <button className='bg-green-600 text-white px-4 py-2 w-full rounded-lg'>Buy now</button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Cart