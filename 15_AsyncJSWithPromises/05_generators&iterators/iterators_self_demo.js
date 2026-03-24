function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if (idx == array.length) {
            // return undefined;
            //or
            return {value: undefined, done: true};
        }
        let nextElement = array[idx];
        idx++;
        // return nextElement;
        //or
        return {value: nextElement, done: false};
    }
    // return next;   // or we cam return object like below
    return {next};
}


// somewhere we are comsuming it 

const automaticFetcher = fetchNextElement([99,11,22,11]);

// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher()); 


// or using the returning the object

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());