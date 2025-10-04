import React, { useEffect, useState } from 'react'

function Products() {
    const[products, setProducts] = useState([]);

    // COMPONENTS LIFECYCLE METHODS - 1) componentMOUNT, 2) componentUPDATE, 3) componentUNMOUNT

    // useEffect
    useEffect(() => {  // MOUNTING
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())              // UPDATES
        .then(data => setProducts(data));
    }, [])  // UNMOUNT
    console.log(products);
  return (
    <div>
        {
            products.map(product => (
                <h3 key={product.id}>{product.title}</h3>
            ))
        }
    </div>
  )
}

export default Products