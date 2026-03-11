function timeConsumingByLoop(){
    console.log("Loop starts");
    for(let i = 0; i < 10000000000; i++){
        //some task
    }
    console.log("Loop end");
}
function timeConsumingByRuntimeFeature0(){
    console.log("Starting timer");
    setTimeout(function exec0(){
        console.log("completed the timer0");
        for(let i = 0; i < 1000000000; i++){
        //some task
    }
    }, 5000)  //5 sectimer
}
function timeConsumingByRuntimeFeature1(){
    console.log("Starting timer");
    setTimeout(function exec1(){
        console.log("completed the timer1");
    }, 0)  //0 sec timer
}
function timeConsumingByRuntimeFeature2(){
    console.log("Starting timer");
    setTimeout(function exec2(){
        console.log("completed the timer2");
    }, 200) //200 milo sec timer
}
console.log("Hii");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log('Bye');