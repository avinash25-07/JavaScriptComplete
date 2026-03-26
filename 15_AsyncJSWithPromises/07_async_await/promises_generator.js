function download(url){
    return new Promise(function exec(res, rej) {
        console.log("Downloading started from url", url);
        setTimeout(function down(){
            console.log("Downloading completed after 5s");
            const content = "ABCDEF";
            res(content);
        }, 4000);
    })
} 

function writeFile(data) {
    return new Promise(function exec(res, rej) {
        console.log("Started writing file with", data);
        setTimeout(function writing() {
            console.log("completed writing data in the file");
            const filename = "file.txt";
            res(filename);
        }, 5000)
    })
}  

function uploadFile(file, url) {
    return new Promise(function exec(res, rej) {
        console.log("Started uploading this", file,"to given url", url);
        setTimeout(function uploading() {
            console.log("file uploaded successfully.");
            const response = "SUCCESS";
            res(response);
        }, 2000)
    })
}
 

function doAfterRecieving(value) {
    let future = iter.next(value);
    console.log("Future is ", future);
    if(future.done) return;
    future.value.then(doAfterRecieving);
}

function* steps() {
    const downloadedData = yield download("www.xyz.com");
    console.log("Data downloaded is ", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("File written is ", fileWritten);
    const uploadResponse = yield uploadFile(fileWritten, "www.drive.goolgle.com");
    console.log("Upload response is ", uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
for(let i = 0; i < 10000000; i++){}
future.value.then(doAfterRecieving);