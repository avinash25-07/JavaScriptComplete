const http = require("http");

const PORT = 4000;

const server = http.createServer(function listener(req, res){
    //send html data
    // if(req.url == "/html") {
    //     res.writeHead(200, {
    //         "Content-Type": "text/html"
    //     });

    //     res.end(`
    //         <html>
    //             <body>
    //                 <h1>Hello HTML</h1>
    //                 <p>This is HTML response</p>
    //             </body>
    //         </html>
    //     `);
    // }

    //send json data
    if(req.url == "/html") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        const data = {
            name: "Avinash",
            course: "Node.js"
        };

        res.end(JSON.stringify(data));
    }
});


server.listen(PORT,"0.0.0.0", function exec() {

    console.log("server is up and running on port: ", PORT);
});