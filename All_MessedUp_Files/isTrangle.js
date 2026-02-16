let a = 14;
let b = 14;
let c = 14;

if (a+b > c && b+c > a && c+a > b) {
    if(a == b && b == c && c==a) {
        console.log("Equilateral");
    }
    else if(a == b || b == c || c == a) {
        console.log("Isoceles");
    }
    else {
        console.log("Scalene");
    }
}
else {
    console.log("can't form a triangle");
}