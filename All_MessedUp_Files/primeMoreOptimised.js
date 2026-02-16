// function isPrime(num) {
//   if (num <= 1) return false;
//   let c = 2;
//   while (c*c < num) {     // it id actually checks 
//     if (num % c === 0) {  
//       return false;
//     }
//     c += 1;
//   }
//   return true;
// }

// let number = 36;
// if(isPrime(number)){
//     console.log("It is Prime");
// }
// else {
//     console.log("It is Not Prime");
// }



function checkPrime(num) {
  if( num <= 1){
    return false;
  }
  for(let c = 2; c * c <= num; c++){
    if (num % c === 0){
      return false;
    }
  }
  return true;
}

function checkPrime1(num){
  for(let c = 2; c <= num - 1; c++){
    if(num % 2 === 0){
      return false;
    }
  }
  return true;
}
let res = checkPrime1(11);
console.log(res);
