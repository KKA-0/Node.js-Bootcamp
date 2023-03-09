const fs = require('fs')
const http = require('http');
const url = require('url');
const { type } = require('os');


const home = fs.readFileSync(`${__dirname}/templates/index.html`, 'UTF-8');
const product = fs.readFileSync(`${__dirname}/templates/product.html`, 'UTF-8');
const error = fs.readFileSync(`${__dirname}/templates/error.html`, 'UTF-8');
///             server created below               ///
const server = http.createServer((req, res) => {

    const { query, pathname } = url.parse(req.url, true);
    if (pathname === '/' || pathname === '/home') 
    {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(home);
    }
    else if (pathname === '/product')
    {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(product);
    }
    else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(error);
    }
});

server.listen(8000, '127.0.1.1', () => {
    console.log('Mahi Maar raha hai!')
})