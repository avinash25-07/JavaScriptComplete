// function patternLeft(n) {
//     for (let row = 1; row <= n; row++) {
//         let str = ""
//         for (let col = 1; col <= n - row; col++) {
//             str += "  "
//         }
//         for (let col = 1; col <= row; col++){
//             str += " *"
//         }
//         console.log(str);
//     }
    
// }

// function patternRight(n) {
//     for (let row = 1; row <= n; row++) {
//         let str = ""
//         for (let col = 1; col <= row - 1; col++){
//             str += " *"
//         }
//         console.log(str);
//     }
    
// }

function pattern (n) {
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let col = 1; col <= n - row; col++) {
            str += "  "
        }
        for (let col = 1; col <= 2 * row - 1; col++){
            str += " *"
        }
        console.log(str);
    }
    
}

pattern(5)