function download(url){
    return new Promise(function exec(res, rej) {
        console.log("Downloading started from url", url);
        setTimeout(function down(){
            console.log("Downloading completed after 5s");
            const content = "ABCDEF";
            res(content);
        }, 1000);
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

async function steps() {
    const downloadedData = await download("www.xyz.com");
    console.log("Data downloaded is ", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("File written is ", fileWritten);
    const uploadResponse = await uploadFile(fileWritten, "www.drive.goolgle.com");
    console.log("Upload response is ", uploadResponse);
    return uploadResponse;
}

steps().then( (value) => console.log("we have completed steps with ", value));
console.log("Outside");
for(let i; i < 10000000000; i++) {

}
setTimeout(function f() {
    console.log("Timer done");
}, 4000);
console.log("For loop done");



