const fs = require('fs');
const http = require('http');
const { type } = require('os');
const  url = require('url');
const replaceTemplate = require('./modules/replaceTempate');

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


const cardsTemp = fs.readFileSync(`${__dirname}/templates/cards.html`, 'UTF-8');
const overviewTemp = fs.readFileSync(`${__dirname}/templates/overview.html`, 'UTF-8');
const productTemp = fs.readFileSync(`${__dirname}/templates/product.html`, 'UTF-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'UTF-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {

    const { query, pathname } = url.parse(req.url, true);

    // over view 
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});  
      
          const cardshtml = dataObj.map((el) => replaceTemplate(cardsTemp, el));
          const output = overviewTemp.replace('{%PRODUCT_CARDS%}', cardshtml);
          res.end(output);
    }
    else if (pathname === '/product') {
        
        //PRODUCT
        res.writeHead(200, {'Content-type': 'text/html'}); 
        const product = dataObj[query.id];
        const output = replaceTemplate(productTemp, product);
        res.end(output);
    }
    else if (pathname === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.end('<h1> Cheating karta hai to Cheating...');
    }

 

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Running');
})

