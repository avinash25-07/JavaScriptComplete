// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. 
// The returned function allows calling fn only once within a limit time in milliseconds.
//  If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit){
   let lastCalled = 0;
    return function() {
        let currentTime = Date.now();
        if (currentTime - lastCalled >= limit){
            lastCalled =  currentTime;
            return fn();
        }
        else {
            if (currentTime - lastCalled >= limit) {
                return `Rate Limit Excceded`
            }
        }
    }
}

function helloWorld() {
    console.log("Hello World");
}

let res = rateLimiter(helloWorld, 3000);
console.log(res());
let res1 = rateLimiter(helloWorld, 2000);
console.log(res());
