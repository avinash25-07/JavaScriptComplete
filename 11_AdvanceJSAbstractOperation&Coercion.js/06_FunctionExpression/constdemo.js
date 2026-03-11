// // const x = 10;
// // x = 9; //error

// const obj = {x: 10};
// obj.x = 9;  // can update

// obj = {}; //error here

// console.log(name);// can't access before initialization b/c of TDZ
// const name = "Sanket";


//
//
const x = 10;
x.val = 9;

console.log(x);  //10 what happning here -

// Primitive Immutability: Numbers, strings, and booleans are primitive types and immutable.

//Wrapper Object: When you try to access a property on a primitive, 
// JavaScript temporarily wraps it in an object (e.g., new Number(10)), 
// assigns the property, and immediately destroys that object.

// No Property Storage: Because the wrapper object is discarded,
//  x.val vanishes, and the original primitive x retains its value of 10.

// Error Handling: In strict mode, 
// x.val = 9 would throw a TypeError because you cannot add properties to primitives.
