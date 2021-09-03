const readline = require('readline');
const { pathToFileURL } = require('url');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let line;

rl.on('line', inp => {
    line = inp;
}).on('close', () => {
    let [n, m, a] = line.split(' ');
    console.log(Math.ceil(parseInt(n)/parseInt(a)) * Math.ceil(parseInt(m)/parseInt(a)));
});