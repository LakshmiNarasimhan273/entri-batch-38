function changeTitle(){
    // DOM - getElementById
    const title = document.getElementById("title");
    title.innerText = "Hello welcome to Entri FSD Program";
    title.style.color = "red";
}

function changeTextcolor(){
    // DOM - getElementsByClassName
    const sentences = document.getElementsByClassName("sentence");
    // looping statement
    for(let i = 0; i < sentences.length; i++){ // 0 < 3
        sentences[i].style.color = "green";
        sentences[i].style.fontWeight = "bold";
    }
}

function highlightBox(){
    // DOM - querySelector
    const box = document.querySelector(".highlight");
    box.style.backgroundColor = "yellow";
    box.style.fontWeight = "bold";
}