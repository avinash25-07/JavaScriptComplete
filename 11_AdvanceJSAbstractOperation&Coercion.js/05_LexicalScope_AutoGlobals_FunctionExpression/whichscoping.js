// var teacher = "sanket";  // teacher -> GC -> sanket
// function ask(question) {   // ask -> GC, question -> ask scope
//     console.log(teacher, question); //teacher -> Sanket // o/p - Sanket Why?
// }

// function fun() {  // fun -> GC
//     var teacher = "Pulkit";  //teacher -> FC -> Pulkit
//     ask("Why?");
// }

// fun();


// // Another example 
// var fun = "123";

// function fun() {
//     return "fun2";
// }

// // console.log(fun);  // 123
// console.log(fun()); // TypeError: fun is not a function

// // Another example 
// var fun = "123";

// var fun = function() {
//     return "fun2";
// }

// console.log(fun);  // function defination return
// console.log(fun()); // prints fun2 

// Another example 
var fun;

function fun() {
    return "fun2";
}

console.log(fun);  // function defination return
console.log(fun()); // prints fun2 