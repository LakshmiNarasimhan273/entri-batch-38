import React from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality product with best offers",
    price: 2000,
    rating: 4.5,
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/425.png?v=1645772065"
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "High-quality product with best offers",
    price: 5000,
    rating: 4.2,
    image: "https://istarmax.com/wp-content/uploads/2024/01/gts7-pro-smart-watch-view-2-en-jpg.webp"
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    description: "High-quality product with best offers",
    price: 4500,
    rating: 4.6,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MW443?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=a3lUcVlDNGVTQmNGSWJLSitWOEc1QWtuVHYzMERCZURia3c5SzJFOTlPakJhdnFhdktNQ1ZocVltL0ZlbGxwZzdQMlFqSlBkSVZaTlNRY3dUSTBDZlE"
  }
]

function Home() {
  const dispatch = useDispatch();
  const handleaddtoCart = (product) => {
    dispatch(addtoCart(product));
    toast.success(`${product.title} added to your cart`);
  }
  
  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-center mt-4 text-gray-700'>Our Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
          products.map(data => (
            <div key={data.id} className='bg-white shadow-md rounded-2xl p-4 text-center'>
              <img className='h-50 w-full object-cover rounded-xl mb-4' src={data.image} alt="" />
              <h2 className='font-bold text-lg text-gray-800'>{data.title}</h2>
              <p className='text-gray-500 text-sm mb-2'>{data.description}</p>
              <h3 className='text-gray-900 font-bold mb-2 text-xl text-indigo-800'>${data.price}</h3>
              <h4 className='text-yellow-600 font-semibold text-lg'>{data.rating}</h4>
              <button onClick={() => handleaddtoCart(data)} className='bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer'>Add to Cart</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home