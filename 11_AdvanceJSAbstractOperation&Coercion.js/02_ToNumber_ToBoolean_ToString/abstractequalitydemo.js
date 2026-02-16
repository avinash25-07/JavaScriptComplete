// console.log(null == undefined);
// console.log(12 == "12");

// console.log(false == "0");

/* 
    x -> boolean -> ToNumber -> false -> 0
    x = 0, y = "0"
    y -> ToNumber -> 0
    0 == 0 -> true
*/

// console.log("NaN" == NaN);

// let obj = {
//     x : 10, valueOf() {return 100;}
// }

// console.log(99 == obj);

// console.log(100 == obj);

// console.log([] + {});
// console.log({} + []);

// console.log([] == ![]);

/* [] == ![]
[] == false
[] == 0
"" == 0
0 == 0
true
 */

let arr = [];

let str = arr.toString();
console.log(arr);
console.log(typeof arr);
console.log("Result",str,"Here");
console.log(typeof str);