// // pattern
// let n = 5;
// let pattern = "";
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j <= n; j++){
//         pattern += " *";
//     }
//     pattern += "\n";
// }
// console.log(pattern);
let n =5;
for(let row = 1; row <= n; row++ ){
    let str = "";
    for(let col = 1; col <= n; col++){
        str += " *";
    }
    console.log(str);
}