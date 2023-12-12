const http = require('http')

const PORT = 3024;
const HOSTNAME = 'localhost';

const server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("welcome to server made by Akxxxhil");

    }
    else if (req.url == '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("welcome to Home Page");

    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("welcome to About Page");

    }
    else if (req.url == '/product') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ product1: "biscuit" }));

    }
    else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end("ERROR");

    }


})

server.listen(PORT, () => {
    console.log(`server is listening at ${HOSTNAME} in the ${PORT}`);
})








































