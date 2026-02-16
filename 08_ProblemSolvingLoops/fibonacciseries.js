/* function fibonacci(n) {
  arr = [];
  if (n == 0) {
    arr[0] = 0;
  } else if (n == 1) {
    arr[0] = 0; 
    arr[1] = 1;
  } else {
    for (let i = 2; i <= n; i++) {
      arr[0] = 0;
      arr[1] = 1;  
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  console.log(arr);
} */

/* 
function fibonacci(n) {
  arr = [];
  if (n == 0) {
    arr[0] = 0;
  }
  if (n >= 1) {
    arr[0] = 0; 
    arr[1] = 1;
  } 
    
  for (let i = 2; i <= n; i++) { 
      arr[i] = arr[i - 1] + arr[i - 2];
}
  
  console.log(arr);
} */


function fibonacci(n) {
  if (n == 0) {
    console.log(0);
  }
  if (n >= 1) {
    console.log(0);
    console.log(1);
  } 
  let secondLast = 0;
  let last = 1;
  for (let i = 2; i <= n; i++) { 
     let ans = secondLast + last;
     console.log(ans);
     secondLast = last;
     last = ans;
}
}
fibonacci(2);


