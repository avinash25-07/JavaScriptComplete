// function x(y) {
//     console.log("Hii", y);
// };

// (function x(y) {
//     console.log("Hii", y);
// })("Avinash");  //this is an iife b/c immediatly called


// x();  

// usecase 1 - so to avoid naming collusion we uses iife

//case 2 - 
function f() {
    return 1;
}

function g() {
    return 2;
}

var i = 10;
// var res;


// if(i%2 == 0){
//     var res = f(); //instead defining outside use this
// } else {
//     var res = g();
// }

//this same problem can be silved using iife

var res = (function evaluate(i){
    if (i%2==0) return f();  
    else return g();
})(i);

console.log(res);