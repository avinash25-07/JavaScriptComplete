//case 1
function fun(fn) {
    console.log("Welcome to fun.");
    fn();
}

// fun(function (){
//     console.log("Wow so much fun.");
// })  // code readability not good here

fun(function askingAboutFun() {
    console.log("Wow so much fun");
    console.trace();
})  // here reaability increases b/c of named function 

//case 2
//for recursive cases named function are also helpful