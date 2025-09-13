// Questions
const questions = [
    {
        q: "Which keyword declares a constant?",
        options: ["var", "let", "const", "function"],
        answer: "const"
    },
    {
        q: "Method to convert JSON string to object?",
        options: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "toObject()"],
        answer: "JSON.parse()"
    },
    {
        q: "Array method to filter elements?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        answer: "filter()"
    },
    {
        q: "typeof null gives?",
        options: ["object", "null", "undefined", "number"],
        answer: "object"
    },
    {
        q: "Symbol for single-line comments?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    }
]

// Needed variables
let index = 0;
let score = 0;
let username = "";

// Id Elements
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// Show modal on page load
window.onload = () => {
    const modal = new bootstrap.Modal(document.getElementById("usernameModal"));
    modal.show();
}

// Start Quiz
function startQuiz(){
    const input = document.getElementById("usernameInput").value.trim();
    if(!input){
        alert("Please enter your name and continue the Quiz");
        return;
    }
    username = input;

    const modalElement = document.getElementById("usernameModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    loadQuestion();
}

// Loading questions in the Browser
function loadQuestion(){
    const q = questions[index];
    questionText.innerText = q.q;

    optionsBox.innerHTML = "";
    q.options.forEach(data => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-primary";
        btn.innerText = data;
        btn.onclick = () => checkAnswer(data, btn);
        optionsBox.appendChild(btn);
    })
}

// Check Answer
function checkAnswer(selected, btn){
    const correct = questions[index].answer;

    // Answer checking condition
    if(selected === correct){
        btn.classList.replace("btn-outline-primary", "btn-success");
        score++;
    }else{
        btn.classList.replace("btn-outline-primary", "btn-danger");
        // score--;
    }

    // Disable other options if one is selected
    Array.from(optionsBox.children).forEach(button => button.disabled = true);
    nextBtn.classList.remove("d-none");
}

// Next question functionality
function nextQuestion(){
    index++;
    if(index < questions.length){
        nextBtn.classList.add("d-none");
        loadQuestion();
    }else{
        showResult();
    }
}

function showResult(){
    quizBox.classList.add("d-none");
    resultBox.classList.remove("d-none");
    resultText.innerHTML = `
    ${username}, you scored ${score} out of ${questions.length}
    `
}