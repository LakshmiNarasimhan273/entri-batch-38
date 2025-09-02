// API STRUCTURE - https://fakestoreapi.com/products?limit=10
// https - secure connection (protocol)
// fakestoreapi.com - domain name
// /products - endpoint it should be changes based on requirement
// either products or users or cart 
// (optional) - query parameters - using *limit* to fetch data with limited response


// using *fetch* function to make a api call from the external server
// then & catch - promises | promises chaining
fetch("https://fakestoreapi.com/products?limit=8").then(response => {
    // condition to check the response variable having a data or not
    if(!response.ok){
        throw new Error("API Fetching failed");
    }
    // keep the api data as json data type
    return response.json();
}).then(data => {
    // take the api response in data parameter variable
    // and print it in our console
    console.log(data);
}).catch(error => {
    // catch block to find any errors and print, it prevent our application from
    // crash or break due to from any errors.
    console.error(error);
});
