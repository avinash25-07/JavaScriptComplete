console.log("Hello");
setTimeout(function exec(){
    console.log("Timer Done");
    setTimeout(function exec(){
        console.log("whow another one timer");
    }, 10);
}, 0);
for(let i = 0; i < 1000000000; i++){
    //sometask
}
console.log("End");