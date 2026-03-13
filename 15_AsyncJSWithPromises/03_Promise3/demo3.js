function blocking_for_Loop() {
  for (let i = 0; i < 10000000000; i++) {
    //something
  }
}
console.log("start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 is done");
}, 0);
blocking_for_Loop();
let x = Promise.resolve("Avinash's promise1");
x.then(function processPromise(value) {
  console.log("Whose's promise", value);
  blocking_for_Loop();
});
let y = Promise.resolve("Avinash's promise2");
y.then(function processPromise(value) {
  console.log("Whose's promise", value);
  setTimeout(function(){
    console.log("Ok done");
  }, 0)
});
let z = Promise.resolve("Avinash's promise3");
z.then(function processPromise(value) {
  console.log("Whose's promise", value);
});
setTimeout(function timer2() {
  console.log("Timer 2 is done");
}, 0);
console.log("End of the files");
