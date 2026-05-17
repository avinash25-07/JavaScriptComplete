// const {linearSearch, binarySearch: bs} = require("./serching");  //named export
// const basicsort = require("./sorting.mjs");
// const quicksort = require("./quicksort");

import mergesort, { insertionsort } from './sorting.mjs'

// console.log(linearSearch([2,34,5,6,23,7], 6));
let arr = [5,3,6,7,3];
insertionsort
arr = mergesort(arr);
console.log(arr);








// // basicsort.bubb   lesort(arr);
// quicksort(arr)
// console.log(arr);
