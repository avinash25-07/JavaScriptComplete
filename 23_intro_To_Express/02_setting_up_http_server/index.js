const http = require("http");

const PORT = 3000;

const server = http.createServer(function listener(request, response){





    // console.log("Incomminf request details:", request);
    // console.log("Response object details:", response);
    if(request.url === "/html") {
        console.log(request.method);
        // response.end({msg: "success"}); //not work b/c only expect string
        // response.end("success"); 
        response.send("hi");    
    }
    console.log("request recieved");
});


server.listen(PORT,"0.0.0.0", function exec() {

    console.log("server is up and running on port: ", PORT);
});