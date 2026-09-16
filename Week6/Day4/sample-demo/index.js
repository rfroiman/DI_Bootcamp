const http = require('http');
const server = http.createServer((request, response) => {

    const welcomeJSON = JSON.stringify({
        title: "Hello!",
        message: "Welcome to our perfect server!"
    });

    switch (request.url) {
        case "/": response.setHeader('Content-Type', 'text/html');
        response.end("Home: Hello World");
        break;
        case "/about": response.end("<h1>This is About page</h1>");
        break;
        case "/contact": response.statusCode = 301;
        response.end("<h1>This is Contact page</h1>");
        break;
        case "/welcome": response.setHeader('Content-Type', 'application/json');
        response.end(welcomeJSON);
        break;
        default: response.end("<h1>404</h1><p>This page is not found</p>")
    }
});

const PORT = 5000;

server.listen(PORT, 'localhost', () => { 
    // http://localhost:5000
    console.log("Our server is running!");
})

