document.addEventListener("DOMContentLoaded", function(){


const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total");

let count = 0;
let total = 0;

function addTocart(event){
    const price = Number(event.target.getAttribute("data-price"));
    count++;
    total += price; // pre increment
    cartCount.textContent = count;
    totalPrice.textContent = total;
}

// DOM
document.querySelectorAll(".add").forEach(function (btn) {
    btn.addEventListener("click", addTocart);
})

})