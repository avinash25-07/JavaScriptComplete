function download(url, time){
    return new Promise(function exec(res, rej) {
        console.log("Downloading started from url", url);
        setTimeout(function down(){
            console.log("Downloading completed.");
            const content = "ABCDEF";
            if(time > 500) {
                rej(    "error")
            }else {
                res(content);
            }
        }, time);
    })
} 

const p1 = download("www.abc1.com", 5000);
const p2 = download("www.abc2.com", 1000);
const p3 = download("www.abc3.com", 3000);

Promise.all([p1, p2, p3]).then(function fullfillHandler(values) {
    console.log(values);
})