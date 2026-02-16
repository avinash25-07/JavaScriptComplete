//problem square root of quadratic equation

function solve(a, b, c) {
  let sqrt = Math.sqrt(b ** 2 - 4 * a * c);
  let divisor = 2 * a;
  let numerator1 = -b + sqrt;
  let numerator2 = -b - sqrt;

  console.log("Real and Distinct roots");
  let root1 = numerator1 / divisor;
  let root2 = numerator2 / divisor;
  console.log(root1, root2);
}

solve(1, 5, 5);
