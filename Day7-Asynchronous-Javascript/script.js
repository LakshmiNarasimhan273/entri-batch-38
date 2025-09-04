async function fetchProducts(){
    try{
        // API CALL
        const response = await fetch("https://dummyjson.com/products?limit=20");
        if(!response.ok){
            throw new Error("API Fetching error");
        }
        const data = await response.json();
        displayProducts(data.products);
    }catch(err){
        console.error(err);        
    }
}

function displayProducts(products){
    const container = document.getElementById("products-container");

    products.forEach(singleProduct => {
        const column = document.createElement("div");
        column.className = "col-md-4 col-lg-3";

        column.innerHTML = `
        <div class="card product-card shadow-sm h-100">
        <img src="${singleProduct.thumbnail}" class="card-img-top p-3" />
        <div class="card-body d-flex flex-column">
            <h6 class="card-title text-truncate">${singleProduct.title}</h6>
            <div class="d-flex align-items-center justify-content-between">
            <p class="fw-bold">${singleProduct.rating}</p>
            <h6 class="card-text fw-bold text-success mb-2">$${singleProduct.price}</h6>
            </div>
            <h6 class="card-title text-truncate">${singleProduct.description}</h6>
            <button class="btn btn-primary mt-auto">Add to Cart</button>
        </div>
        </div>
        `;
        container.appendChild(column);
    })
}

fetchProducts();

// products: [
// {product 1},
// {product 2}
// ]

// div
// div -> img