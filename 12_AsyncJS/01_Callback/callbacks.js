/**
 * fun -> hof ? -> it takes fn (which is a function) as argument
 * 
 * x -> number
 * fn -> function
 */

function fun(x, fn) {
    for(let i = 0; i < x; i++){
        console.log(i);
    }
    fn();
}

fun(10, function exec() {   //callbackset
    console.log(" I am executed also.");
})