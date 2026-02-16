// function halfPattern(n) {
//     for(let row = 1; row <= n; row++){
//         let str = "";
//         for (let col = 1; col <= n - row; col++) {
//             str += " "
//         }
//          for (let col = 1; col <= row; col++) {
//             str += col;
//             // str += " ";
//         }
//         for (let col = row - 1; col >= 1; col--) {
//             str += col;
//             // str += " ";
//         }
//         console.log(str);
//     }
// }

// halfPattern(5);


//fibonacci

function f(n) {
    let a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        console.log(a);
        let c = a + b
        a = b
        b = c
    }
}

f(10)
