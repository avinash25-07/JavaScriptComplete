// console.log(temporal);  // error TDZ
// let temporal = "TDZ";

console.log(teacher);
var teacher = "Sanket";  //GC
function fun() {    //GC
    console.log(teacher);  // b/c var gives function scope so this teacher available everywhere in function even before the declaration
                            // no error here
    // console.log(content);   //throws error
    var teacher = "Pulkit";  // scope of fun
    let content = "JS";  // content will be access only post declaration
    if (content == "JS"){
        let hours = "123+";
        console.log(hours);
        console.log(content);  //can access here
    }
    console.log(teacher, content); //ok
    // console.log(hours);  //error
}

fun();
console.log(teacher);
// console.log(content);  //so this can't access o0utside block

// {
//   let x = 10;
//   console.log(x);
//   {
//     console.log(x);
//   }

//   {
//     function f() {
//       console.log(x);
//     }
//     f();
//   }
// }
// console.log(X); //error here


// {
//     name = "Avinash";
//     console.log(name);
//     var name = "Vijay"
//     console.log(name);
// }