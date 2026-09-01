// setTimeout(function,delay);
// function -> code you want to execute
// delay -> time in  milliseconds
// 1000 milliseconds = 1 second

//1. Simple Example


// Enormous function


console.log("one");
console.log("two");
console.log("three");

setTimeout(function(){
    console.log("Hello after 5 seconds"); // hello comes after 5 seconds
},5000);

console.log("four");
console.log("five");


//Arrow function
setTimeout(() => {
    console.log("Hello after 3 seconds");
},3000);

//3. Real - Life Example
function welcome(){
    console.log("Welcome to JavaScript!");
}

setTimeout(welcome, 2000); // callback function-welcome(reference)

// 4.Passing Arguments
// You can also pass arguments to the function;

function greet(f_name,l_name){
    console.log("Hello " + f_name + l_name);
}

setTimeout(greet, 2000, "Rashmi", "Rajput"); // (callbackfunction (reference),timimg,parameter list)













