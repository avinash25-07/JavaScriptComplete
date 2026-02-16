function upperTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += "  ";
    }
    let stars = (2 * i) - 1;
    for(let k= 1; k <= stars; k++){
        str += " *"
    }
    console.log(str);
  }
}

function lowerTriangle(n) {
  for (let i = 1; i <= n-1; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "  ";
    }
    let stars = 2 * (n - i) - 1;
    for(let k= 1; k <= stars; k++){
        str += " *"
    }
    console.log(str);
  }
}
function pattern(n){
    upperTriangle(n);
    lowerTriangle(n);
}
pattern(3);