x = NaN;
console.log(isNaN("Sanket")); // true b/c isNaN try converts input to number to handle it we uses Number.isNaN b/c it don't do coercion
console.log(Number.isNaN("Sanket"));   // false
console.log(Number.isNaN(1));  // false


function signCheck(){
    
}