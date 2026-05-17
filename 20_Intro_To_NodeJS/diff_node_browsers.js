const x = setTimeout(function exec() {
    console.log("compplted timer");
}, 10000);

console.log(x);
clearTimeout(x);