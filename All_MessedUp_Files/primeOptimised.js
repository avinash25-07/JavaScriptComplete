function isPrime(num) {
  if (num <= 1) return false;
  let c = 2;
  while (c < num) {
    if (num % c === 0) {
      return false;
    }
    c += 1;
  }
  return true;
}

let number = 7;
if(isPrime(number)){
    console.log("It is Prime");
}
else {
    console.log("It is Not Prime");
}
