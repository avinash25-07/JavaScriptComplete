function* fetchNextElement() {
    console.log("inside generator function");
    yield 1;
    yield 2;
    console.log("somewhere in middle");
    yield 3;
    // return 10;
    yield 4;
    console.log("Ended");
}

const iter = fetchNextElement();

console.log("1st ", iter.next());
console.log("2nd ", iter.next());
console.log("3rd ", iter.next());
console.log("4th ", iter.next());
console.log("5th ", iter.next());
console.log("6th ", iter.next());
