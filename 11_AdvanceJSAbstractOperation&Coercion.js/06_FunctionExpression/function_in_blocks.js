// {
//     function fun(){
//         return "123";
//     }
// }
// let y = fun()
// console.log(y);   //string - 123
// console.log(fun); //function declarartion


// if (true){
//     function newFun(){
//         console.log("new function inside if block");
//     }
// }

// newFun();   //function doesn't care about any block but have to consider function scope
// function outer(){
//     console.log("inside outer function");
//     let y = function inner() {
//         console.log("new function inside outer");
//         return "abc"
//     };
//     inner() //error 
//     console.log(inner()); //error
//     y()
//     console.log(y());
// }

// outer();
// console.log();
// inner();