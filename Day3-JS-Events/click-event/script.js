// function alertMessage(){
//     alert("Hi");
// }

// Event

// click event syntax
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const button = document.getElementById("changeTitle");

    button.addEventListener("click", function(){
        // innerText | textContent | innerHTML
        title.textContent = "Welcome to Entri Elevate FSD program";
    })
})