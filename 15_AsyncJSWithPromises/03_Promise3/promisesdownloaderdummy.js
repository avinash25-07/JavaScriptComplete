function download(url){
    return new Promise(function exec(res, rej){
        console.log("Downloading started from url", url);
        setTimeout(function p(){
            console.log("Downloading completed after 5s");
            const content = "ABCDEF";
            res(content);
            res(content);
        }, 5000);
    })
}

x = download("www.xyz.com");
x
.then(
    function fulfillHandler1(value){
        console.log("Content downloaded is1", value);
        return "New promise string"
    },
    function rejectHandler1(value){
        console.log("Rejected with", value);
    }
)
.then(function newFulFillHandler2(value){
    console.log("Value from the chained hen promise", value);
});