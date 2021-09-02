const readline = require('readline');
const { domainToUnicode } = require('url');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let [m,n] = lines[0].split(' ');
    let square = parseInt(m) * parseInt(n);
    console.log(Math.trunc(square/2));
});