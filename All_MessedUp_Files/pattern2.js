// function trianglePattenR(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     let spaces = n - i;
//     for (let j = 1; j <= spaces; j++) {
//       str += "  ";
//     }
//     let stars = i;
//     for(let k= 1; k <= stars; k++){
//         str += " *"
//     }
//     console.log(str);
//   }
//   console.log("---------------------------");
// }

// trianglePattenR(3);

// function trianglePattenR(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       if (j <= n - i) {
//         str += "  ";
//       } else {
//         str += " *";
//       }
//     }
//     console.log(str);
//   }
// }

// trianglePattenR(3);

// function sumOfNaturalNumber(n){
//   return n * (n + 1)/2;
// }

// console.log(sumOfNaturalNumber(5));

// //recursion

// function sumOfNaturalNumberR(n){
//   if(n == 1){
//     return 1;
//   }
//   return n + sumOfNaturalNumberR(n-1);
// }

// console.log(sumOfNaturalNumberR(5));