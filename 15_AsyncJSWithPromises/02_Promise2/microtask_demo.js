function createPromise(){
    return new Promise(function exec(resolve, reject){
        console.log("Resolving the promise");
        resolve("Done");
    })
}

setTimeout(function process(){
    console.log("Timer completed");
}, 0)

let p = createPromise();


p.then(
    function fulfillhandler1(value){
        console.log("we fulfilled1 with value ", value);
    }, function rejectionHandler(){}
);
p.then(
    function fulfillhandler2(value){
        console.log("we fulfilled2 with value ", value);
    }, function rejectionHandler(){}
);
p.then(
    function fulfillhandler3(value){
        console.log("we fulfilled3 with value ", value);
    }, function rejectionHandler(){}
);

for(let i = 0; i < 10000000000; i++){}

console.log("Ending.....");