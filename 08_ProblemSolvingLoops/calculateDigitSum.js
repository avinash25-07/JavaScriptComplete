function digitSSum(num){
    let sum = 0;
     while (num) {
        rem = num % 10;
        sum += rem;
        num = floor(num / 10, rem); // or can use num = Math.floor(num/10);
     }
     console.log(sum);
}

digitSSum(1234);
/* here we are using floor function to get the floor value of the number */
function floor(num, rem){
    num = num - (rem/10);
    return num;
}

Math.floor(1234/10);