function download(url){
    return new Promise(function exec(res, rej) {
        console.log("Downloading started from url", url);
        setTimeout(function down(){
            console.log("Downloading completed");
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
    
x = download("www.xyz.com")
.then(function processDownload(value) {
    console.log("Now we are going to process downloaded data");
    return writeFile(value);
})
.then(function processWrite(value) {
    console.log("we downloaded and written the file, now we will upload.");
    return uploadFile(value, "www.upload.com");
})
.then(function processUpload(value) {
    console.log("We have uploaded with", value);
})