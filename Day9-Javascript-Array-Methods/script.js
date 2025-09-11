// 1 - forEach method
const developers = ['Arun', 'Gowtham', 'Someone'];
console.log("forEach Method");
developers.forEach(person => {
    console.log(person);
});

// 2 - map method * Very important for react development
const cartPrice = [5000, 20000, 10000]; // 35,000
const gstPrice = cartPrice.map(price => price * 1.20);
console.log("Map Method",gstPrice);

// 3 - filter method * Very important for frontend and backend development
const products = [
    {id: 1, title: "Watch", price: 3000, rating: 3.9, category: "electronics"},
    {id: 2, title: "Mobile", price: 30000, rating: 3, category: "electronics"},
    {id: 3, title: "Laptop", price: 100000, rating: 4.7, category: "electronics"},
    {id: 4, title: "Notebook", price: 50, rating: 4.8, category: "stationary"},
    {id: 5, title: "Pen", price: 10, rating: 4.6, category: "stationary"},
]

const filteredProducts = products.filter(product => {
    return product.rating > 3.5;
});

console.log("Filter method",filteredProducts);

// 4 - find method * Important for Backend development
const searchProduct = products.find(product => {
    return product.title === "Notebook";
});
console.log("Find method", searchProduct);

// 5 - reduce method * Important for interviews
// Interview problem - Add all the elements from an array
// const cartPrice = [5000, 20000, 10000]; // 35,000
const totalCartPrice = cartPrice.reduce((a, b) => {
    return a + b;
    // 5000 + 20000 = 25000
    // 25000 + 10000 = 35000
});
console.log("Reduce Method",totalCartPrice);

// 6 - includes method * Important for backend development
const fruits = ['apple', 'banana', 'jackfruit'];
console.log('Includes method',fruits.includes('apple'));

// 7 - sort method * Important for interviews and projects
const numbers = [8, 4, 1, 3, 2, 6, 7, 5];
numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers);

// Insertion & Deletion methods
// [2, 3, 4, 5];
const num = [2, 3, 4, 5];
// Insertion
num.push(6); // it will add the element into the end of the array
num.unshift(1); // it will add the element into starts of the array

// Deletion
num.pop(); // remove the element from end
num.shift(); // remove the element from starts
console.log("Insertion & Deletion", num);

// Slice - immutable -> Shallow copy
const transport = ['roadway', 'waterway', 'airway', 'railway'];
const sliced = transport.slice(1, 3);
console.log("Slice method",transport);
console.log("Slice method",sliced);

// Splice - mutable -> doesn't take any shallow copy
// Deletion | Insertion | Replace
// Deletion
const alpha = ['a', 'b', 'c', 'd', 'e'];
alpha.splice(1, 2);
console.log("Splice method", alpha);

// Delete a specific element
const animals = ['dog', 'cat', 'lion', 'tiger'];
animals.splice(2, 1);
console.log(animals);

// Insertion using Splice
const colors = ['red', 'blue', 'green'];
colors.splice(1, 0, 'yellow');
console.log(colors);

// Replace
const languages = ['C', 'Java', 'Python'];
languages.splice(1, 1, 'JavaScript');
console.log(languages);

// Rest & Spread operator

// Spread operator
// Basic problem
// Merging 2 arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log("Spread operator", [...a, ...b]);

// Real time example for Spread operator
const existingUser = {
    id: 1,
    name: "Narasimhan",
    role: "Mentor",
    skills: ['JavaScript', 'NodeJs', 'ReactJS']
};

const contactInfo = {
    mail: "lakshminarasimhan@mail.com",
    skills: [...existingUser.skills, 'MongoDB']
}

console.log({...existingUser, ...contactInfo});

// Rest operator
// Basic problem
function processBill(customerName, ...purchasedItems){
    console.log("Customer Name",customerName);
    console.log("Purchased products", purchasedItems);
}
processBill("Narasimhan", 'Groceries', 'Biscuits', 'Vegetable', 'Fruits');

// Interview problem
function makeBill(customerName, ...purchasedAmount){
    console.log('Customer', customerName);

    const total = purchasedAmount.reduce((currentValue, nextValue) => {
        return currentValue + nextValue
    });
    console.log('Total Amount', total);
}
makeBill('Lakshmi Narasimhan', 200, 550, 50, 300, 100);

// Product level interview question
// Logging system using rest operator
function logMessage(level, ...details){
    const timeStamps = new Date().toISOString();
    console.log(`${timeStamps} | ${level}`, ...details);
}

logMessage('info', 'User logged in', {id: 1, name: 'Narasimhan'});
logMessage('error', 'Payment failed', 'Transaction ID: TXN123');

// Current date
const date = new Date();
console.log(date);
const format = date.toLocaleString();
console.log(format);

// Real time api fetching with filter method
fetch("https://dummyjson.com/products?limit=10").then(response => {
    if(!response.ok){
        throw new Error("Data fetching failed");
    }
    return response.json();
}).then(data => {
    // console.log(item)
    const products = data.products
    const filteredProducts = products.filter(item => item.price < 10);
    console.log(filteredProducts);
})