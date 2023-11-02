// A function is a set of statements that take inputs, 
// do some specific computation, and produce output. The 
// idea is to put some commonly or repeatedly done tasks 
// together and make a function so that instead of writing 
// the same code again and again for different inputs, 
// we can call that function. 

// The function is executed when something calls/invokes it.
// The name may contain letters, digits, dollar signs, and underscore.
// Parameters are listed inside round parenthesis after the name of the function.
// Arguments are values a function receives when it is invoked.
// When the control reaches the return statement, js will stop executing and the value is returned to the caller.

function myfunction(g1, g2){
    return g1/g2;
}
console.log(myfunction(8,2))

//It calls and returns a method with the owner object being the argument.

// function declaration :->  Function Declaration is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”.
//1. function expression:->Function Expression is another way to define a function in JavaScript. Here we define a function using a variable and store the returned value in that variable.
// 2. Arrow function:-> Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.

function add(a,b){
    console.log(a+b);
}
add(2,5);


const add1= function(a,b){
    console.log(a+b)
}
add1(2,3);


// method

//A JavaScript method is a property of an object that
// contains a function definition. Methods are functions stored as object properties. 


