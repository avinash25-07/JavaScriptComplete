// let obj = {
//   valueOf() {
//     return Math.random();
//   }
// };

// console.log(obj != obj);  // false 😈

// let obj1 = {
//   [Symbol.toPrimitive]() {
//     return NaN;
//   }
// };

// // console.log(obj1);
// // obj === obj   // true
// // obj != obj    // false

// console.log(obj1 != obj1);  // false

// let obj3 = {
//   valueOf() {
//     console.log("called");
//     return Math.random();
//   }
// };

// console.log(obj3 != 5);

// // let obj4 = {
// //   [Symbol.toPrimitive]() {
// //     return "🔥";
// //   }
// // };

// // console.log(`Value: ${obj4}`);


// let obj = {
//   abc(){
//     return "Avinash";
//   }
// };

// console.log(typeof []);

let x = 0.1 + 0.2
let y = 0.3
console.log(typeof (x));
console.log("b"+      +     +    7  +  +   + "a");
console.log("b"+ "a"  +   + "a"   +  "a");
