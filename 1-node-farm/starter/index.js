const fs = require('fs');
const http = require('http');
const { Http2ServerResponse } = require('http2');

/// / / / / /
//Files
/// / / / / /
// const textin = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textin);

// const write = 'HERE we know this:  ${textin}. ${date.now()}';
// fs.writeFileSync('./txt/output.txt', write);
// console.log('Ho gaya write bro');


/// / / / / /
//SERVER
/// / / / / /

const server = http.createServer((req, res) =>{
        res.end('Hello World');
    }
        );

server.listen(8000, '127.0.0.1', () => {
    console.log('Running');
})
