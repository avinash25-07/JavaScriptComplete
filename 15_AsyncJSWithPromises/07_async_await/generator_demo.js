function* fetchNextElement() {
    console.log("inside generator function");
    const x = 10;
    yield 11;
    console.log("Entering after yeild");
    let y = x + (yield 30);
    console.log("Value of y is: ", y);
    let z = yield 40;
    console.log("Ended", z);
    yield {name: "Avinash"};
}

console.log("Start");
const iter = fetchNextElement();
console.log("Called generator");
console.log("1st ", iter.next());
console.log("2nd ", iter.next());
console.log("3rd ", iter.next(17));
console.log("4th ", iter.next(12));
console.log("5th ", iter.next(12));
console.log("6th ", iter.next(12));
