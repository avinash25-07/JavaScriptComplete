function fetchData(url) {
    return new Promise (function (resolve, reject) {
        console.log("Started downloading", url);
        setTimeout(function prosessDownloading(){
            let data = "dummy data";
            console.log("Downloading complete.");
            resolve(data);
        }, 7000);
    })
}

console.log("start");
let promiseObj = fetchData("asdhjbkljsd");
promiseObj.then(function A(value){
    console.log("Value is",value);
})
console.log("end");