const fs = require('fs');
const http = require('http');
const { type } = require('os');
const { url } = require('url');

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

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    return output;
  };
   

const cardsTemp = fs.readFileSync(`${__dirname}/templates/cards.html`, 'UTF-8');
const overviewTemp = fs.readFileSync(`${__dirname}/templates/overview.html`, 'UTF-8');
const productTemp = fs.readFileSync(`${__dirname}/templates/product.html`, 'UTF-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'UTF-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {

    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});
      
          const cardshtml = dataObj.map((el) => replaceTemplate(cardsTemp, el));
        //   console.log(cardshtml);
        //   res.end(overviewTemp);
          const output = overviewTemp.replace('{%PRODUCT_CARDS%}', cardshtml);
          res.end(output);
    }
    else if (pathName === '/product') {
        res.end('ye to product page hai');
    }
    else if (pathName === '/api') {
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

