// higher order function

function f(x, fn){
    console.log(x);
    console.log(fn);
    fn();
}

f(10, function exec() {    //this FE pased as argument in function f
    console.log("I am the function expression passed to HOF.");
})

//internal functions

let arr = [1, 10, 9, 100, 1000, 11, 13, 12, 14, 3, 2];

arr.sort();   // it sorts the given array // expected - to sort in increasing order but default implementation of arr.sort()
                // is going to sort in lexicographical order

/**
 * 0 - A
 * 1 - B
 * 2 - C
 * 3 - D
 * 4 - E
 * 5 - F
 * .....
 * 
 * [B, BA, J , BAA, BAAA, BB, BC , BD, BE, C, D]  ACOOEDING TO DICTIONARY IF WE ARRANGED IT 
 * [B, BA, BAA, BAAA, BB, .......]
 */

console.log(arr);

// sort b in increasing order

b = [1, 10, 9, 100, 1000, 11, 13, 12, 14, 3, 2];

b.sort(function (a, b) {
    // if a < b -> a - b will be negative -> if comparator(cmp) function gives negative then a is placed before b.(a < b)
    // if a > b -> a - b will be positive -> if cmp function gives positive then b is places before a. (b < a)
    return a - b;
})  // sort os HOF, the sort function takes comparator function as argument

console.log(b);


