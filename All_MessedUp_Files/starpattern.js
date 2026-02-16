// let num = 10;
// for (let row = 1; row < num+1; row++) {
//   let str = "";
//   for (let col = 1; col < num+1; col++) {
//     str += " *";
//   }
//   console.log(str);
// }

// function pattern(num) {
//   for (let row = 1; row < num + 1; row++) {
//     let str = "";
//     for (let col = 1; col < num + 1; col++) {
//       str += " *";
//     }
//     console.log(str);
//   }
//   console.log("--------------------------------------");
// }

// pattern(2);
// pattern(3);
// pattern(4);
// pattern(5);
// function trianglePatten(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += " *";
//     }
//     console.log(str);
//   }
//   console.log("---------------------------");
// }

// trianglePatten(2)
// trianglePatten(3)
// trianglePatten(4)
// trianglePatten(5)

function trianglePattenR(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= (n+1)-i; j++) {
      str += " *";
    }
    console.log(str);
  }
  console.log("---------------------------");
}

trianglePattenR(5);

// function trianglePattenR(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       str += i;
//     }
//     console.log(str);
//   }
//   console.log("---------------------------");
// }

// trianglePattenR(5)