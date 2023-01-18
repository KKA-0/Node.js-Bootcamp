const fs = require('fs');
const http = require('http');
const { type } = require('os');
const {url} = require('url');

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
        
        const pathName = req.url;
        if (pathName === '/' || pathName ===   '/overview')
        {
            res.end('ye to overview hai bro');
        }
        else if(pathName === '/product')
        {
            res.end('ye to product page hai');
        }
        else 
        {
            res.writeHead(404,{
                'content-type': 'text/html'    
            });
            res.end('<h1> Cheating karta hai to Cheating...');
        }
    
    
    
    }    );

server.listen(8000, '127.0.0.1', () => {
    console.log('Running');
})

