/**
 * 1. inversion of control(promises can resolve this issue)
 * 2. callback hell - readability problem
 */

let arr = [1, 10, 9, 100, 1000, 11, 13, 12, 14, 3, 2];

arr.sort(function cmp(a, b){
    return a - b;
});

console.log(arr);

function dotask(fn, x){
    //whole implementation is done by team A
    fn(x*x);  //calling my callback with square of x
    fn(x*x);  // when someone changed it called twice ot removed callback so then error occur this is IOC  
}  //team A

//here team B tries to use it 
dotask(function exec(num){  //due to callbacks, I am passing control of how exec should be called to doTask
    //this is inversion of control
    console.log("Whoh num is", num);
}, 9);