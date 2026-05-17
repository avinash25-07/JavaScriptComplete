function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            // let num = 10
            if(num % 2 == 0){
                //if random number is even we fulfill
                console.log("fulfilling");
                resolve(function resolveFun(){console.log("Passing in resolve");});
                console.log("completed reslving");
                // resolve(num, 10, 20);    // passing multiple values - value is zero b/c alwayls set first value to promise result property
                resolve(10);
                console.log("resolving again");
                return num;
            } else {
                //if random number is odd we rejected
                console.log("rejecting");
                reject(num);
                console.log("completed rejecting");
                reject(11);
                console.log("rejecting again");
                return num;  
            }
        }, 1000); 
        console.log("Hii Avinash");
    });
}

let y = createPromiseWithTimeout().
    then(function handler(value){
        // console.log(value());
        return value;
    });

y.then((val) => val())
  
