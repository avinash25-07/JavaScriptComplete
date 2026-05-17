function swap(arr, i, j) {
    // swaps elements of array at index i and j
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [5,9,1,7,8,2,3];

let i = 0;  //start index
let j = arr.length - 1; // last index 

while(i <= j){
    swap(arr, i, j);
    i++;
    j--;
}



// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

console.log(arr)










