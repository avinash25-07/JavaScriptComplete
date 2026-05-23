console.log("hello");

// console.log(__dirname); //it prints the current directory path

arr = [[11,12], [21,32],[45,34]];

for(let elements of arr) {
    for(let ele of elements) {
        console.log(ele);
    }
}
