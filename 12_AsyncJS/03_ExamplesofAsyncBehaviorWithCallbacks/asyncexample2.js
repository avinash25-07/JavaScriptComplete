console.log("Hello");
setTimeout(function exec(){
    console.log("Timer Done");
}, 0);
for(let i = 0; i < 1000000000; i++){
    //sometask
}
console.log("End");