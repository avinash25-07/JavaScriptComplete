// let i = 0;
function process() {
    let i = 0;  //either define here or outside function doesn't matters
    function innerProcess() {
        i += 1;
        return i;
    }
    return innerProcess;
}

let res = process();

console.log(res);

console.log("First time calling res", res());
console.log("Second time calling res", res());
console.log("Thirsd time calling res", res());