function Product(n, p, d) {
    name = n;
    this.price = p;
    this.description = d;

    this.display = function () {
        console.log(name, this.price);
    }

    // return this;

    // return "10";
    // return {};
}

const p = new Product("Bag", 100, "a cool bag");
p.display();
// console.log(p); 






// function Counter() {
//   let count = 0; // Private variable

//   this.increment = function() {
//     count++; // Accesses private variable via closure
//     console.log(count);
//   };

//   this.getCount = function() {
//     return count;
//   };
// }

// const myCounter = new Counter();
// myCounter.increment(); // 1
// console.log(myCounter.count); // undefined (cannot access directly)







// class User {
//   #password; // Declare private field

//   constructor(name, password) {
//     this.name = name;      // Public
//     this.#password = password; // Assigned in constructor
//   }

//   checkPassword(input) {
//     return this.#password === input; // Accessible here
//   }
// }

