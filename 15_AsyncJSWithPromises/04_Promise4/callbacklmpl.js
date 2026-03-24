function download(url, cb){
    console.log("Downloading started from url", url);
    setTimeout(function down(){
    console.log("Downloading completed after 5s");
    const content = "ABCDEF";
    cb(content)
    }, 5000);
} 

function saveFile(content, cb) {
    const myFile = content;
    console.log("file written");
    cb(myFile);
} 

function uploadFile(myFile, cb) {
    const newFile = myFile;
    console.log("file uploaded");
    cb(newFile);
}
    

download("www.xyz.com", function process(content) {
    saveFile(content, function save(myFile){
        uploadFile(myFile, function uploaded(newFile){
            console.log("Completed");
        })
    })
});