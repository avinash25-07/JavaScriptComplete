console.log("Hello");
for(let i = 0; i < 3; i++){
    setTimeout(function exec(){
        console.log("Time done");
    }, 10)
}
for(let i = 0; i < 1000000000; i++){
    //sometask
}
console.log("End");