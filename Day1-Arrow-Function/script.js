// Arrow function & Callbacks

// Native function (or) Traditional function Syntax
let title = "Arrow function concept started";
function message(displayMessage) { // function head with parameter, parameter is a variable it receive only the argument value
    // function body
    console.log(displayMessage);
}

message(title); // function callback
// argument -> always looking for a actual value


// Arrow function syntax () =>
const welcome = () => {
    console.log("Basic arrow function syntax");
}

welcome();

// Difference between Native & Arrow functions

function dev1() {
    console.log("Native function executed");
}

dev1();

const dev2 = () => console.log("Arrow function executed");
dev2();

// Interview question
const greet = (name) => {
    // `` = Literals (or) Expression
    return `Welcome ${name}`;
}
// greet("Narasimhan");
console.log(greet("Narasimhan"));

// Multiple function example
function outerFunction(){
    console.log("Outer function executed");

    function innerFunction(){
        console.log("Inner function executed");
    }
    innerFunction(); // return statement
}

outerFunction();

// Callbacks -> Function optimization
function welcomeMessage(username){
    console.log(`Welcome back ${username}, you're logged in`);
}

// loggedUser function have a parameter variable as a name of callback
// it receives the welcomeMessage function as 
function loggedUser(callback){
    const username = "Narasimhan";
    callback(username);
}

loggedUser(welcomeMessage);

// Callback Scenario program
function userGreeting(username){
    console.log(`Welcome back, ${username}`);
}

function userRole(username){
    console.log(`${username} Your role is promoted to Mentor`);
}

function userNotification(username){
    console.log(`Hey ${username}, you have 3 new notifications`);    
}

function authUser(appFunc){
    const username = "Narasimhan";
    appFunc(username);
}

authUser(userGreeting);
authUser(userRole);
authUser(userNotification);