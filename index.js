console.log("Hello JS");

// Create variable in JS
const one = "one";
let two = "two";

// Creating function
function sayHello(name){
    console.log("Hello " + name);
    function sayTitle(title) {
        console.log("Title: " + title);
    }
    return sayTitle;
}

const firstFunction = sayHello;
const returnedFunction = firstFunction();
returnedFunction("Singh");

sayHello("Rishabh");

// Declaring functions with Lambda
// Functions are also types

const sayMyName = (name) => {
    console.log("Hello lambda " + name);
}

sayMyName("Rishabh");
