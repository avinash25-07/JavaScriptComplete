function download(url){
    return new Promise(function exec(res, rej) {
        console.log("Downloading started from url", url);
        setTimeout(function down(){
            console.log("Downloading completed after 5s");
            const content = "ABCDEF";
            rej(content);
        }, 1000);
    })
} 

async function steps() {
    try {
        const downloadedData = await download("www.xyz.com");
        console.log("Data downloaded is ", downloadedData);
        return downloadedData;
    } catch (error) {
        console.log("we handled error with", error);
    }
    finally {
        console.log("Ending");
    }
}

steps();



