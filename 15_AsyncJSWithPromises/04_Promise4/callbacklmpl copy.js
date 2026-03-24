function download(url, cb){
    console.log("Downloading started from url", url);
    setTimeout(function down(){
    console.log("Downloading completed after 5s");
    const content = "ABCDEF";
    cb(content)
    }, 4000);
} 

function writeFile(data, cb) {
    console.log("Started writing file with", data);
    setTimeout(function writing() {
        console.log("completed writing data in the file");
        const filename = "file.txt";
        cb(filename);
   }, 5000)
}  

function uploadFile(url, file, cb) {
    console.log("Started uploading this", file,"to given url", url);
    setTimeout(function uploading() {
        console.log("file uploaded successfully.");
        const response = "SUCCESS";
        cb(response);
    }, 2000)
}
    

download("www.xyz.com", function processDownload(content) {
    console.log("Now we are going to process downloaded data");
    writeFile(content, function processWrite(filename){
        console.log("we are downloade and written the file now we will upload.");
        uploadFile("www.upload.com", filename, function processUpload(response){
            console.log("We have uploaded with", response);
        })
    })
});