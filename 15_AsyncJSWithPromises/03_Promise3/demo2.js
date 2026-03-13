console.log("start");

setTimeout(function timer1(){
    console.log("Timer 1 is done");
}, 0)

for(let i = 0; i < 10000000000; i++){
    //something
}

let x = Promise.resolve("Avinash's promise"); // this is shrothand in JS that already retruns a resolved promise & it equivalent to below

// function f(){
//     return new Promise(function exex(res, rej){
//         console.log("Avinash''s promise");
//     })
// }

x.then(function peocessPromise(value){
    console.log("Whose's promise", value);
})
setTimeout(function timer2(){
    console.log('Timer 2 is done');
}, 0)

console.log("End tof the files");
