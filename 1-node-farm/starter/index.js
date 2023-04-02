const fs = require('fs');

const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(txtIn);

const textOut = `This is what we know about avocado ${txtIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file written');
const hello = 'Hello World';

console.log(hello)