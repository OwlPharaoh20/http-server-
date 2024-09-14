const http = require("http");

const server = http.createServer((request, response) => {
  // FOR POST REQUEST 
  if (request.method === "POST" && request.url === "/save") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    })

        request.on("end", () => {
            response.statusCode =200;
            response.setHeader("Content-Type", "text/plain");

            response.end(`Here is the user data saved: ${body}`)
        })
        //FOR GET REQUEST. 
     } else if( request.method === "GET" && request.url === "/dashboard") {
        response.statusCode =200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Welcome to the user dashboard")
     } else {
        response.statusCode = 404;
        response.end("Page Not found");
     }
})


//Define Port 
PORT = 8083;

//Start the server 
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


