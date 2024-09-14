//HANDLING QUERY PARAMETERS

const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");

    const parsedUrl = url.parse(request.url, true); //parsed the request URL 

    // about page

    //pathname => /about 

    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query; //object 

    /*
    {
    "v" : "7239dj2",
    "H": "hello",
    "value": "ilovepizza"
    }
    */

    if(pathname === "/") {
        response.end("Welcome to our home page. Your value query is ${query.H} ${query.value} ${query.v}");
    } 

    if(pathname === "/about") {
        response.end(`We are a cool company. Your value query is ${query.H} ${query.value} ${query.v}. and my name is ${query.name}`)
    } else {
        response.statusCode = 404;
        response.end("Page Not found, so sorry")
    }


})

const PORT = 8082;

server.listen(PORT, () => {

    console.log("Server running at port", PORT)
})