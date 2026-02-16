// function isPrime(num) {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let x = 13;


// if(isPrime(x) <= 2) {
//     console.log("It is Prime");
// }
// else{
//     console.log("Not Prime");
// }



function isPrime(num){
   for(let c = 2; c <= num - 1; c++){
    if(num % c === 0) {
        return false;
    }
    return true;
   }
}

let x = 13;
if(isPrime(x)){
    console.log("Tt is Prime");
}
else{
    console.log("Not Prime");
}