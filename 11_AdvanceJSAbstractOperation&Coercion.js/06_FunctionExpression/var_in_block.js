// function fun() {
//     var i = 5;
//     while(i < 10) {
//         var x = i;    //here while block doesn't have any effect on var so gets FC
//         i++;
//     }
//     console.log(x);
// }

// fun();  

// let i = 1;
// console.log(y);  //undefined
// while (i < 5) {
//     var y = 10;  //y get GC
//     i++;
// }
// console.log(y);  10


//redeclaration is allowed with var
var x = 10;
var x = 20;

//redeclararation is not allowed with let
// let y = 10;
// let y = 20;  //error