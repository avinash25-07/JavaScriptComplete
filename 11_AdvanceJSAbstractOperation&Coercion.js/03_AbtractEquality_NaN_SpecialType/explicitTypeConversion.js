let obj = {
  valueOf() {
    return Math.random();
  }
};

console.log(obj != obj);  // true 😈

let obj1 = {
  [Symbol.toPrimitive]() {
    return NaN;
  }
};

// console.log(obj1);

console.log(obj1 != obj1);  // true

let obj3 = {
  valueOf() {
    console.log("called");
    return Math.random();
  }
};

console.log(obj3 != 5);

