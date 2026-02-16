function gcd(n1, n2) {
  let potentialAnswer = 1;
  if (n1 > n2) {
    for (let c = 2; c <= n2; c++) {
      if (n1 % c === 0 && n2 % c === 0) {
        potentialAnswer = c;
      }
    }
  } else
    for (let c = 2; c <= n1; c++) {
      if (n1 % c === 0 && n2 % c === 0) {
        potentialAnswer = c;
      }
    }

  console.log(potentialAnswer);
}

gcd(1980, 1540);
gcd(9876, 5432);
gcd(7, 11);
gcd(19, 79);

