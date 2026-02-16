// function trianglePattenR(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     let spaces = n - i;
//     for (let j = 1; j <= spaces; j++) {
//       str += "  ";
//     }
//     let stars = (2 * i) - 1;
//     for(let k= 1; k <= stars; k++){
//         str += " *"
//     }
//     console.log(str);
//   }
//   console.log("---------------------------");
// }

function trianglePattenR(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n + i - 1; j++) {
      if (j <= n - i) {
        str += "  ";
      } else {
        str += " *";
      }
    }
    console.log(str);
  }
  console.log("---------------------------");
}

trianglePattenR(5);