// Ternary Operator
/* let x = 5;
let y = x > 10 ? "Yes" : "No";
let y1 = (true) ? (2+5) : (2-5);

console.log(y);
console.log(y1); */

// switch case

/* switch ("Avinash") {
  case "Ajay":
    console.log("Avinash is not here");
  // break;
  case "Avinash":
    console.log("Avinash Here");
  // break;
  case "Avinash":
    console.log("Avinash Here also");
    break
  case "Avinash":
    console.log("Avinash Here also again");
  default:
    console.log("Not found here");
    break;
}
 */


//problem square root of quadratic equation

function sqrtRoot(a,  b, c){
    if (b**2 > 4*a*c) {
        console.log("Real and Distinct roots");
        let x1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
        let x2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
        console.log(x1, x2);
    }
    else {
        console.log("Not having real and distinct roots");
    }
}


sqrtRoot(5, 5, 6);

