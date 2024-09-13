const http = require("http");

//Create a server 

const server = http.createServer((request, response) => {
    response.statusCode = 200; //200 => request ok
    response.setHeader("Content-type", "text/plain");

    if(request.url === "/" ) {
        response.end("Welcome to our home page");
    } else if ( request.url === "/about"){
        response.end("We are a cool company that does cool stuff")
    } else  {
        response.statusCode = 404 // When the resource is not found 
        response.end("Page Not found, so sorry")
    }

})




//Define your port
const PORT = 8080;



//start the server 
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

