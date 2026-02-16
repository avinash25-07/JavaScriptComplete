// toString
// let obj = {
//     toString() {
        //By default gives [object Object] string
//         // return "Lets Learn JAVASCRIPT";
//         // return true;
//         // return 10;
//         return {name : "Lets Learn JAVASCRIPT"};

//     }
// }
// console.log(obj.toString());
// console.log(typeof obj.toString());

//valueOf
// let obj = {
//     // valueOf() {
//     //     //By default it return same object
//     //     // return "Lets Learn JAVASCRIPT";
//     //     // return true;
//     //     // return 10;
//     //     return {name : "Lets Learn JAVASCRIPT"};

//     // }
// }

// const obj = {
//   valueOf() {
//     return 10;
//   }
// };

// let obj = {x: 10};
// console.log(typeof obj.valueOf());

// console.log(obj.valueOf());


// console.log(obj.valueOf());
// console.log(typeof obj.valueOf());


//Substraction Operation
// let obj = {};

// console.log(10 - obj);  //obj.valueOf() ->object,  obj.toString() -> [object Object] -> NaN

// console.log("10" - obj); //obj.valueOf() ->object,  obj.toString() -> [object Object] -> NaN
// console.log(obj - obj); //obj.valueOf() ->object,  obj.toString() -> [object Object] -> NaN

// let obj1 = {x : 9, y : 10};
// console.log(100 - obj1);

// let obj2 = {x: 7, valueOf() {return 99;}}
// console.log(100 - obj2);

// let obj3 = {x: 7, toString() {return "88";}};
// console.log(90 - obj3);

// // let obj4 = {x: 7, toString() {return {};}};
// // console.log(100 - obj4);  //type error


// let obj5 = {x: 7, toString() {return [];}};
// console.log(100 - obj5);

//Addition Operation
let obj = {};
console.log(10 + obj);  //obj.valueOf() ->object,  obj.toString() -> [object Object]  -> 10[object Object]

let obj1 = {x : 9, y : 10};
console.log(100 + obj1);


let obj2 = {x: 7, valueOf() {return 99;}}
console.log(100 + obj2);

let obj3 = {x: 7, toString() {return "88";}};
console.log(90 + obj3);


// let obj4 = {x: 7, toString() {return {};}};
// console.log(100 + obj4);  //type error

// let obj5 = {x: 7, toString() {return [];}};
// console.log(100 + obj5); // type error



// let obj6 = {x: 7, toString() {return [10];}};
// console.log(100 + obj6); // type error       
// console.log(100 + obj6.toString());          

let obj7 = {x: 7, toString() {return [10, 20];}};
// console.log(100 + obj7); // type error
console.log(100 + obj7.toString());