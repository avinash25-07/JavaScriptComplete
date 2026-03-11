function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");  //2
    setTimeout(function process() {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        //if random number is even we fulfill
        resolve(num);
        return num;
      } else {
        //if random number is odd we rejected
        reject(num);
        return num;
      }
    }, 1000);
    console.log("Exiting the executor callback in the promise constructor");  //3
  });
}

console.log("Starting.......");  //1
const p = createPromiseWithTimeout();
console.log("We are waiting for the promise to complete");  //4
console.log("currently my promise object is like ... ", p);  //5 - promise - pending
console.log("Going to register my 1 set of handlers");

p.then(
  function fulfilHandler1(value) {
    console.log("Inside fulfill handler 1 with value: ", value);  //6
    console.log("Promise after fulfillment is", p);  //7
    setTimeout(function t(){console.log("Ended 0s timer");},0)
    console.log("Exiting the fulfilhandler 1");
  },
  function rejectionHandler1(value) {
    console.log("Inside rejection handler 1 with value: ", value);
    console.log("Promise after rejection is", p);
    setTimeout(function t(){console.log("Ended 0s timer");},0)
    console.log("Exiting the rejectionhandler 1");
  },
);
console.log("Going to register my 2 set of handlers");

p.then(
  function fulfilHandler2(value) {
    console.log("Inside fulfill handler 2 with value: ", value);  //6
    console.log("Promise after fulfillment is", p);  //7
  },
  function rejectionHandler2(value) {
    console.log("Inside rejection handler 2 with value: ", value);
    console.log("Promise after rejection is", p);
  },
);

console.log("Ending........");
setTimeout(function globalTimer(){console.log("Global timer of 0s");}, 1000)

// for(let i = 0; i < 10000000000; i++){}

// console.log("Ending the loop also");
