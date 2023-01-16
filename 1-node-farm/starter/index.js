const fs = require('fs');

const textin = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textin);

const write = 'HERE we know this:  ${textin}. ${date.now()}';
fs.writeFileSync('./txt/output.txt', write);
console.log('Ho gaya write bro');


