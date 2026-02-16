// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let obj = new User("Avinash", 25);
// console.log();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const u1 = new User("Avinash", 26);
// console.log(u1);
// console.log(User);

// function xyz(){
//     let num = 10;
// }
// console.log(num);

//ternary ooperator
// let a = 10;
// let b = 20;
// console.log(a > b? "a is greater": "b is greater");



// console.log(10>>2);

// let user1 = {
//     name: "Avinash",
//     age: 25
// }

// function user(name, age){
//     this.name = name;
//     this.age = age;
// }
// console.log(user1);
// user1 = new user("sanket", 20);
// let user2 = new user("sanket", 20);
// console.log(user1);
// console.log(user2);
// console.log(user1.name);
// console.log("Avinash");

let arr = [10, 20 , 30];
let newarr = arr.map((arr)=>{
    return arr*20;
})
console.log(arr);
console.log(newarr);

const names = ["Avinash", "Raj", "Rahul", "Sanket"];
console.log(names);
names.map((name)=> {
    console.log(name);        // don't use map just like this b/c map always return new array
})
console.log("----------------------------------");
let newNames = names.map((name)=> {
    console.log(name);
})
console.log(newNames);
